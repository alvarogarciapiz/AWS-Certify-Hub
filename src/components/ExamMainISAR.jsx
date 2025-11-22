import React, { useState, useEffect } from "react";
import "../assets/styles/ExamMain.css";
import data from "../assets/ISAR.json";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ExamMain() {
  const [verRespuestas, setIsActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [selectedStyles, setSelectedStyles] = useState({});
  const [estadoRespuesta, setEstadoRespuesta] = useState(false);

  useEffect(() => {
    const questionCountFromStorage = localStorage.getItem('examQuestionCountISAR');
    const questionCount = questionCountFromStorage === 'All' 
      ? data.preguntas.length 
      : parseInt(questionCountFromStorage) || 50;
    setShuffledQuestions(shuffleArray([...data.preguntas]).slice(0, questionCount));
  }, []);

  useEffect(() => {
    if (verRespuestas) {
      checkQuestion();
    }
  }, [verRespuestas]);

  if (currentQuestion >= shuffledQuestions.length) {
    return (
      <div className="exam-page">
        <div className="exam-container">
          <h1 style={{ textAlign: 'center', color: '#fff' }}>🎉 Exam Complete!</h1>
        </div>
      </div>
    );
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOptionIndex(null);
    setSelectedStyles({});
    setEstadoRespuesta(false);
    setIsActive(false);
  };

  const question = shuffledQuestions[currentQuestion];
  const opciones = question.opciones.split("\n");
  const respuestaCorrecta = question.respuesta;

  const toggleOption = (index) => {
    setSelectedOptionIndex(index);
    setSelectedStyles({ [index]: true });
  };

  const checkQuestion = () => {
    const selectedOption = opciones[selectedOptionIndex];
    const isCorrect = selectedOption === respuestaCorrecta;
    setEstadoRespuesta(isCorrect);
    setIsActive(true);
  
    if (!isCorrect) {
      const failedISAR = JSON.parse(localStorage.getItem('FailedISAR')) || [];
      failedISAR.push(question.id);
      localStorage.setItem('FailedISAR', JSON.stringify(failedISAR));
    }
  };

  return (
    <div className="exam-page">
      <div className="exam-container">
        <div className="question-header">
          <div className="question-number">
            Question {question.id}
          </div>
          <div className="question-progress">
            {currentQuestion + 1} / {shuffledQuestions.length}
          </div>
        </div>

        <p className="pregunta">{question.pregunta}</p>

        <ul className="opcionesList">
          {opciones.map((opcion, index) => (
            <li key={index}>
              <button
                className={`opcionesButton ${
                  selectedStyles[index] ? "selected" : ""
                }`}
                onClick={() => toggleOption(index)}
              >
                {opcion}
              </button>
            </li>
          ))}
        </ul>

        <div className="button-container">
          <button
            className="checkButton"
            onClick={checkQuestion}
          >
            Check Answer
          </button>

          {verRespuestas && (
            <div className={`solucion ${estadoRespuesta ? "correct" : "incorrect"}`}>
              {estadoRespuesta ? "✓ Correct!" : "✗ Incorrect"}
              {!estadoRespuesta && (
                <div className="correct-answer">Correct: {respuestaCorrecta}</div>
              )}
            </div>
          )}

          <button className="nextQuestion" onClick={nextQuestion}>
            Next Question →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamMain;