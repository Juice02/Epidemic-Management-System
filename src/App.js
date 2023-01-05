import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar-component";
import Patdata from "./components/patient-data-component";
import Hosdata from "./components/hospital-data-component";

function App() {

  return (
    <Router>
    <div className="container">
    <Navbar /> 
    <br/> 
        <Routes> 
            <Route path="/pat-list" exact element={<Patdata />} /> 
            <Route path="hos-list" element={<Hosdata />} /> 
        </Routes>
    </div> 
</Router>
  );
}

export default App;
