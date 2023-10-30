import React, { useState } from "react";
import './assets/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/navbar/Sidebar'

import Home from './components/Home';
import Resources from "./components/Resources";
import CloudPractitioner from "./components/CloudPractitioner"
import SolutionsArchitect from "./components/SolutionsArchitect"
import ExamErrors from "./components/ExamErrors"
import ExamMain from "./components/ExamMain"
import ExamSimulator from "./components/ExamSimulator"

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        {/* Se deben añadir aquí para luego estar disponible en el NavBar */}
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/cloudpractitioner" element={<CloudPractitioner />} />
        <Route path="/solutionsarchitect" element={<SolutionsArchitect />} />
        <Route path="/examsimulator" element={<ExamSimulator />} />
        <Route path="/exam" element={<ExamMain />} />
        <Route path="/examerrors" element={<ExamErrors />} />
      </Routes>
    </>
  );
}

export default App;
