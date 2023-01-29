import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


import Navbar from "./components/navbar-component";
import Patdata from "./components/patient-data-component";
import Hosdata from "./components/hospital-data-component";
import CaseStatus from "./components/Cases-status-component";
import CreatePat from "./components/create-patient-component";
import patedit from "./components/patient-list";
import Activemap from "./components/active-map";

function App() {

  return (
    <Router>
    <Navbar /> 
    <br/> 
   
        <Routes>
            
            <Route path="/" element={<CaseStatus/>} /> 
            <Route path="/create-pat" element={<CreatePat />} />
            <Route path="/patient-list" element={<patedit />} /> 
            <Route path="hos-list" element={<Hosdata />} /> 
        </Routes> 
     
</Router>
  );
}

export default App;
