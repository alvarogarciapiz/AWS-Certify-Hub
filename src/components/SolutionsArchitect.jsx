import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "../assets/styles/CloudPractitioner.css";
import simulator from '../../public/ISAR_simulator.jpg'
import exams from '../../public/ISAR_exams.jpg'
import errors from '../../public/ISAR_errors.jpg'

function CloudPractitioner() {
  return (
    <>
      <div className="titles">
        <Grid item xs={12}>
          <h1 className="examTitle">AWS Solutions Architect Associate</h1>
          <h2 className="examSubtitle">Train, test yourself and progress</h2>
        </Grid>
      </div>
      <div className="container-fluid">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <Link to="/examsimulator" className="links">
                <img
                  className="roundimage"
                  src={simulator}
                  alt="ISAR simulator"
                />
                <h1 className="cardtitle">Exam Simulator</h1>
                <h2 className="cardsubtitle">Solutions Architect</h2>
                <h3 className="cardsubsubtitle">Real exam simulation.</h3>
              </Link>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <Link to="/exam" className="links">
                <img
                  className="roundimage"
                  src={exams}
                  alt="ISAR exam"
                />
                <h1 className="cardtitle">Practice tests</h1>
                <h2 className="cardsubtitle">Solutions Architect</h2>
                <h3 className="cardsubsubtitle">
                  Random questions to test your level.
                </h3>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <Link to="/examerrors" className="links">
                <img
                  className="roundimage"
                  src={errors}
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
        </Grid>
      </div>
      <div className="bottomroom"></div>
    </>
  );
}

export default CloudPractitioner;
