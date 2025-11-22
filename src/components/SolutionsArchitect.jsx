import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import "../assets/styles/CloudPractitioner.css";
import downloadFile from '../assets/AWS-Certified-Solutions-Architect-Associate.pdf';

function SolutionsArchitect() {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState(10);
  const navigate = useNavigate();

  const questionOptions = [10, 20, 30, 50, 'All'];

  const handleStartExam = () => {
    localStorage.setItem('examQuestionCountISAR', selectedQuestions);
    navigate('/examISAR');
    setShowModal(false);
  };

  return (
    <>
      <div className="titles">
        <Grid item xs={12}>
          <h1 className="examTitle">AWS Solutions Architect — Practice Portal</h1>
          <h2 className="examSubtitle">Train, test yourself and progress</h2>
        </Grid>
      </div>
      <div className="container-fluid">
        <Grid container spacing={5}>

          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard" onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
              <img
                className="roundimage"
                src="/ISAR_exams.jpg"
                alt="ISAR exam"
              />
              <h1 className="cardtitle">Practice tests</h1>
              <h2 className="cardsubtitle">Solutions Architect</h2>
              <h3 className="cardsubsubtitle">
                Random questions to test your level.
              </h3>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <Link to="/examerrorsISAR" className="links">
                <img
                  className="roundimage"
                  src="/ISAR_errors.jpg"
                  alt="ISAR errors"
                />
                <h1 className="cardtitle">Errors test</h1>
                <h2 className="cardsubtitle">Solutions Architect</h2>
                <h3 className="cardsubsubtitle">
                  Questions you've failed previously.
                </h3>
              </Link>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <a href={downloadFile} download className="links">
                <img
                  className="roundimage"
                  src="/ISAR_simulator.jpg"
                  alt="ISAR simulator"
                />
                <h1 className="cardtitle">Exam Simulator</h1>
                <h2 className="cardsubtitle">Solutions Architect</h2>
                <h3 className="cardsubsubtitle">Click to download the exam.</h3>
              </a>
            </div>
          </Grid>
          
        </Grid>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Select Number of Questions</h2>
            <p className="modal-subtitle">Choose how many questions you want to practice</p>
            
            <div className="question-options">
              {questionOptions.map((num) => (
                <button
                  key={num}
                  className={`question-option ${selectedQuestions === num ? 'selected' : ''}`}
                  onClick={() => setSelectedQuestions(num)}
                >
                  {num === 'All' ? 'All Questions' : `${num} Questions`}
                </button>
              ))}
            </div>

            <div className="modal-actions">
              <button className="modal-button cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="modal-button start" onClick={handleStartExam}>
                Start Practice
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bottomroom"></div>
    </>
  );
}

export default SolutionsArchitect;
