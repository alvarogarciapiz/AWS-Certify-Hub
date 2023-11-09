import React, { useState } from "react";
import './assets/styles/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/navbar/Sidebar'

import Home from './components/Home';
import Resources from "./components/Resources";
import CloudPractitioner from "./components/CloudPractitioner"
import SolutionsArchitect from "./components/SolutionsArchitect"
import ExamErrors from "./components/ExamErrors"
import ExamErrorsISAR from "./components/ExamErrorsISAR"
import ExamMain from "./components/ExamMain"
import ExamSimulator from "./components/ExamSimulator"
import ExamMainISAR from "./components/ExamMainISAR"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <ScrollToTop />
      <Routes>
        {/* Se deben añadir aquí para luego estar disponible en el NavBar */}
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/cloudpractitioner" element={<CloudPractitioner />} />
        <Route path="/solutionsarchitect" element={<SolutionsArchitect />} />
        <Route path="/examsimulator" element={<ExamSimulator />} />
        <Route path="/exam" element={<ExamMain />} />
        <Route path="/examISAR" element={<ExamMainISAR />} />
        <Route path="/examerrors" element={<ExamErrors />} />
        <Route path="/examerrorsISAR" element={<ExamErrorsISAR />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;