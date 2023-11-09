import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "../assets/styles/CloudPractitioner.css";
import simulator from '../../public/BCPR_simulator.jpg'
import exams from '../../public/BCPR_exams.webp'
import errors from '../../public/BCPR_errors.webp'
import downloadFile from '../assets/AWS-Certified-Cloud-Practitioner.pdf';

function CloudPractitioner() {
  return (
    <>
      <div className="titles">
        <Grid item xs={12}>
          <h1 className="examTitle">AWS Cloud Practitioner Certificate</h1>
          <h2 className="examSubtitle">Train, test yourself and progress</h2>
        </Grid>
      </div>
      <div className="container-fluid">
        <Grid container spacing={5}>

          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <Link to="/exam" className="links">
                <img
                  className="roundimage"
                  src={exams}
                  alt="BCPR exam"
                />
                <h1 className="cardtitle">Practice tests</h1>
                <h2 className="cardsubtitle">Cloud Practitioner</h2>
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
                  alt="BCPR errors"
                />
                <h1 className="cardtitle">Errors test</h1>
                <h2 className="cardsubtitle">Cloud Practitioner</h2>
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
                  src={simulator}
                  alt="BCPR simulator"
                />
                <h1 className="cardtitle">Exam Simulator</h1>
                <h2 className="cardsubtitle">Cloud Practitioner</h2>
                <h3 className="cardsubsubtitle">Click to download the exam.</h3>
              </a>
            </div>
          </Grid>
          
        </Grid>
      </div>
      <div className="bottomroom"></div>
    </>
  );
}

export default CloudPractitioner;
