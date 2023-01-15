import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


import Navbar from "./components/navbar-component";
import Patdata from "./components/patient-data-component";
import Hosdata from "./components/hospital-data-component";
import CaseStatus from "./components/Cases-status-component";


function App() {

  return (
    <Router>
    <Navbar /> 
    <br/> 
        <Routes>
            <Route path="/" exact element={<CaseStatus/>} /> 
            <Route path="/pat-list" exact element={<Patdata />} /> 
            <Route path="hos-list" element={<Hosdata />} /> 
        </Routes> 
</Router>
  );
}

export default App;
