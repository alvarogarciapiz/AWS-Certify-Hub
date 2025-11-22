import React, { useState, useEffect } from "react";
import data from "../assets/PDOE.json";
import "../assets/styles/ExamMain.css";
import { Link } from 'react-router-dom';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ExamErrorsPDOE() {
  const [verRespuestas, setIsActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedStyles, setSelectedStyles] = useState({});
  const [estadoRespuesta, setEstadoRespuesta] = useState(false);
  const [noQuestionsLeft, setNoQuestionsLeft] = useState(false);

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

    if (isCorrect) {
      const failedQuestions =
        JSON.parse(localStorage.getItem("FailedPDOE")) || [];
      const index = failedQuestions.indexOf(question.id);
      if (index !== -1) {
        failedQuestions.splice(index, 1);
        localStorage.setItem("FailedPDOE", JSON.stringify(failedQuestions));
      }
    }

    const failedQuestions = JSON.parse(localStorage.getItem("FailedPDOE")) || [];
    if (failedQuestions.length === 0) {
      setNoQuestionsLeft(true);
    }
  };

  useEffect(() => {
    const failedQuestions = JSON.parse(localStorage.getItem("FailedPDOE")) || [];
    const filteredQuestions = data.preguntas.filter(question => 
      failedQuestions.includes(question.id)
    );
    setShuffledQuestions(shuffleArray(filteredQuestions));
    if (filteredQuestions.length === 0) {
      setNoQuestionsLeft(true);
    }
  }, []);

  if (noQuestionsLeft) {
    return (
      <div className="exam-page">
        <div className="noErrors">
          <div className="noErrors-icon">🥳</div>
          <h1>No Errors Found!</h1>
          <p className="noErrors-message">
            Great job! You haven't made any mistakes yet. Keep practicing to maintain your streak!
          </p>
          <Link to="/exampdoe">
            <button className="nextQuestion">Start New Practice</button>
          </Link>
        </div>
      </div>
    );
  }

  if (currentQuestion >= shuffledQuestions.length) {
    return <div>¡Fin del juego!</div>;
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

export default ExamErrorsPDOE;
