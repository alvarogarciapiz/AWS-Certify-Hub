/* HomeCards.jsx */
import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "../assets/styles/HomeCards.css";

function HomeCards() {
  return (
    <div className="container-fluid">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="roundcard">
            <Link to="/cloudpractitioner" className="links">
              <img
                className="roundimage"
                src="/BCPR_exams.webp"
                alt="Cloud Practitioner"
              />
              <h1 className="cardtitle">Cloud Practitioner</h1>
              <h2 className="cardsubtitle">Foundation Level</h2>
              <h3 className="cardsubsubtitle">
                Start your AWS certification journey
              </h3>
            </Link>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <div className="roundcard">
            <Link to="/solutionsarchitect" className="links">
              <img
                className="roundimage"
                src="/ISAR_exams.jpg"
                alt="Solutions Architect"
              />
              <h1 className="cardtitle">Solutions Architect</h1>
              <h2 className="cardsubtitle">Associate Level</h2>
              <h3 className="cardsubsubtitle">
                Design scalable AWS architectures
              </h3>
            </Link>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <div className="roundcard">
            <Link to="/devopsengineer" className="links">
              <img
                className="roundimage"
                src="/PDOE_exams.webp"
                alt="DevOps Engineer"
              />
              <h1 className="cardtitle">DevOps Engineer</h1>
              <h2 className="cardsubtitle">Professional Level</h2>
              <h3 className="cardsubsubtitle">
                Master CI/CD and automation on AWS
              </h3>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeCards;