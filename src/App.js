import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


import Navbar from "./components/navbar-component";
import Patdata from "./components/patient-data-component";
import Hosdata from "./components/hospital-data-component";
import CaseStatus from "./components/Cases-status-component";
import CreatePat from "./components/create-patient-component";
import Patedit from "./components/edit-patient-component";
import Activemap from "./components/active-map";
import Obj from "./components/patient-list-component";


function App() {

  return (
    <Router>
    <Navbar /> 
    <br/> 
   
        <Routes>
            
            <Route path="/" element={<CaseStatus/>} /> 
            <Route path="/create" element={<CreatePat />} />
            <Route path="/edit/:id" exact element={<Patedit/>} />
            <Route path="/pat-list" element={<Obj/>} /> 
            <Route path="hos-list" exact element={<Hosdata />} /> 
        </Routes> 
     
</Router>
  );
}

export default App;
