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
    const failedISAR = JSON.parse(localStorage.getItem('FailedISAR')) || [];
    const filteredQuestions = data.preguntas.filter(question => failedISAR.includes(question.id.toString()));
    setShuffledQuestions(shuffleArray(filteredQuestions));
  }, []);

  useEffect(() => {
    if (verRespuestas) {
      checkQuestion();
    }
  }, [verRespuestas]);

  const noQuestionsLeft = shuffledQuestions.length === 0;
  if (noQuestionsLeft) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1 className="noErrors">
          🥳 There are no errors. Make some tests and come back later! 
        </h1>
      </div>
    );
  }

  if (currentQuestion >= shuffledQuestions.length) {
    return <div>¡Fin del juego!</div>;
  }

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setSelectedOptionIndex(null);
      setSelectedStyles({});
      setEstadoRespuesta(false);
      setIsActive(false);
    } else {
      setShuffledQuestions([]);
    }
  };

  const question = shuffledQuestions[currentQuestion];
  const opciones = question.opciones.split("\n");
  const respuestaCorrecta = question.respuesta;

  const toggleOption = (index) => {
    setSelectedOptionIndex(index);
    setSelectedStyles({ [index]: true });
    setIsActive(true);
  };

  const checkQuestion = () => {
    const selectedOption = opciones[selectedOptionIndex];
    const isCorrect = selectedOption === respuestaCorrecta;
    setEstadoRespuesta(isCorrect);
  
    if (isCorrect) {
      const failedISAR = JSON.parse(localStorage.getItem('FailedISAR')) || [];
      const index = failedISAR.indexOf(question.id.toString());
      if (index !== -1) {
        failedISAR.splice(index, 1);
        localStorage.setItem('FailedISAR', JSON.stringify(failedISAR));
      }
    }
  };

  return (
    <div className="container">
      <div>
        <p className="pregunta">
          <a className="azul">Question {question.id}</a> ➡️{" "}
          {question.pregunta}
        </p>

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
          {verRespuestas && (
            <div
              className={`solucion ${
                estadoRespuesta ? "correct" : "incorrect"
              }`}
            >
              {estadoRespuesta ? "Correct" : "Incorrect"}
              {!estadoRespuesta && (
                <div>Correct Answer: {respuestaCorrecta}</div>
              )}
            </div>
          )}
          <button className="nextQuestion" onClick={nextQuestion}>
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamMain;