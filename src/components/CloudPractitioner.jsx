import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "../assets/styles/CloudPractitioner.css";

function CloudPractitioner() {
  return (
    <>
      <div className="container-fluid">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <Link to="/examsimulator" className="links">
                <img
                  className="roundimage"
                  src="https://miro.medium.com/v2/resize:fit:1400/1*ieZpfpwDamHjdyhvaB_eMA.gif"
                  alt="Darth Vader"
                />
                <h1 className="cardtitle">Exam Simulator</h1>
                <h2 className="cardsubtitle">FREE</h2>
                <h3 className="cardsubsubtitle">Real exam simulation.</h3>
              </Link>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="roundcard">
              <Link to="/exam" className="links">
                <img
                  className="roundimage"
                  src="https://miro.medium.com/v2/resize:fit:1400/1*ieZpfpwDamHjdyhvaB_eMA.gif"
                  alt="C3-P0"
                />
                <h1 className="cardtitle">Exam Practice</h1>
                <h2 className="cardsubtitle">FREE</h2>
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
                  src="https://miro.medium.com/v2/resize:fit:1400/1*ieZpfpwDamHjdyhvaB_eMA.gif"
                  alt="R2-D2"
                />
                <h1 className="cardtitle">Errors Exam</h1>
                <h2 className="cardsubtitle">FREE</h2>
                <h3 className="cardsubsubtitle">
                  A test with questions you've failed previously.
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