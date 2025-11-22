import React, { useState, useEffect } from "react";
import data from "../assets/PDOE.json";
import "../assets/styles/ExamMain.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ExamMainPDOE() {
  const [verRespuestas, setIsActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedStyles, setSelectedStyles] = useState({});
  const [estadoRespuesta, setEstadoRespuesta] = useState(false);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOptions({});
    setSelectedStyles({});
    setEstadoRespuesta(false);
    setIsActive(false);
  };

  const checkQuestion = (respuestaCorrecta) => {
    const selectedAsArray = Object.keys(selectedOptions).map(Number);
    
    // Get the selected option text
    const selectedOptionText = selectedAsArray.length === 1 ? opciones[selectedAsArray[0]] : null;
    
    // Compare the full text of the selected option with the correct answer
    // Remove any leading letter/parenthesis (like "A) ", "B) ") from both for comparison
    const cleanSelected = selectedOptionText ? selectedOptionText.replace(/^[A-Z]\)\s*/, '').trim() : '';
    const cleanCorrect = respuestaCorrecta.replace(/^[A-Z]\)\s*/, '').trim();
    
    const isCorrect = cleanSelected === cleanCorrect;
    
    setEstadoRespuesta(isCorrect);
    setIsActive(true);

    if (!isCorrect) {
      const failedQuestions =
        JSON.parse(localStorage.getItem("FailedPDOE")) || [];
      failedQuestions.push(question.id);
      localStorage.setItem("FailedPDOE", JSON.stringify(failedQuestions));
    }
  };

  useEffect(() => {
    const questionCountFromStorage = localStorage.getItem('examQuestionCountPDOE');
    const questionCount = questionCountFromStorage === 'All' 
      ? data.preguntas.length 
      : parseInt(questionCountFromStorage) || 50;
    const allQuestions = shuffleArray([...data.preguntas]);
    setShuffledQuestions(allQuestions.slice(0, questionCount));
  }, []);

  if (currentQuestion >= shuffledQuestions.length) {
    return (
      <div className="exam-page">
        <div className="exam-container">
          <h1 style={{ textAlign: 'center', color: '#fff' }}>🎉 Exam Complete!</h1>
        </div>
      </div>
    );
  }

  const question = shuffledQuestions[currentQuestion];
  const opciones = question.opciones.split("\n").map((opcion) => opcion.trim());
  const respuestaCorrecta = question.respuesta;

  const toggleOption = (opcion) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      if (updatedOptions[opcion]) {
        delete updatedOptions[opcion];
      } else {
        updatedOptions[opcion] = true;
      }
      return updatedOptions;
    });

    setSelectedStyles((prevSelectedStyles) => ({
      ...prevSelectedStyles,
      [opcion]: !prevSelectedStyles[opcion],
    }));
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
            onClick={() => checkQuestion(respuestaCorrecta)}
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

export default ExamMainPDOE;
