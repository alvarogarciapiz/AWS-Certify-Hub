import React, { useState, useEffect } from "react";
import data from "../assets/preguntas.json";
import "../assets/styles/ExamMain.css";
import { Link } from 'react-router-dom';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ExamErrors() {
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
    const numeroALetra = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
    };

    let answersAsLeters = [respuestaCorrecta];
    if (respuestaCorrecta.length > 2) {
      answersAsLeters = respuestaCorrecta.split(",").map((item) => item.trim());
    }

    // Convierte las opciones seleccionadas a letras
    const selectedAsLeters = Object.keys(selectedOptions).map(
      (numero) => numeroALetra[numero]
    );

    // Realiza la comparación
    const a = selectedAsLeters.slice().sort().join("");
    const b = answersAsLeters.slice().sort().join("");
    setEstadoRespuesta(a === b);

    // Resetea answersAsLeters y establece isActive a true
    answersAsLeters = [];
    setIsActive(true);

    // Si la respuesta es incorrecta, agrega el número de la pregunta a un array en localStorage
    if (a !== b) {
      const failedQuestions =
        JSON.parse(localStorage.getItem("FailedBCPR")) || [];
      failedQuestions.push(question.id);
      localStorage.setItem("FailedBCPR", JSON.stringify(failedQuestions));
    } else {
      // If the answer is correct, remove the question id from FailedBCPR
      const failedQuestions =
        JSON.parse(localStorage.getItem("FailedBCPR")) || [];
      const index = failedQuestions.indexOf(question.id);
      if (index !== -1) {
        failedQuestions.splice(index, 1);
        localStorage.setItem("FailedBCPR", JSON.stringify(failedQuestions));
      }
    }
    // Check if there are any questions left in FailedBCPR
    const failedQuestions = JSON.parse(localStorage.getItem("FailedBCPR")) || [];
    if (failedQuestions.length === 0) {
      setNoQuestionsLeft(true);
    }
  };

  useEffect(() => {
    const failedQuestions = JSON.parse(localStorage.getItem("FailedBCPR")) || [];
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

  const question = shuffledQuestions[currentQuestion];

  const preguntaSinTresCaracteres = question.pregunta.substring(4);

  const opciones = question.opciones
    .split("\n")
    .map((opcion) => opcion.trim().substring(0));

  const respuestaCorrecta = question.respuesta.split(":")[1].trim();

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
    <div className="container">
      <div>
        <p className="pregunta">
          <a className="azul">Question {question.id}</a> ➡️{" "}
          {preguntaSinTresCaracteres}
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
          <button
            className="nextQuestion"
            onClick={() => checkQuestion(respuestaCorrecta)}
          >
            Check Solution
          </button>
          <br />
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

export default ExamErrors;
