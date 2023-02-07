import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


import Signup from "./components/signup-component";
import Login from "./components/login-component";
import Combine from "./components/combined-component";
import Navbar from "./components/navbar-component";
import Hosdata from "./components/hospital-data-component";
import CaseStatus from "./components/Cases-status-component";
import CreatePat from "./components/create-patient-component";
import Patedit from "./components/edit-patient-component";
import Activemap from "./components/active-map";
import Obj from "./components/patient-search";
import Vaccination from "./components/vaccines";
import Newvax from "./components/vaccination-component";
import XY from "./components/Dialog"; 
import Post_log from "./components/after-login-comp"; 



function App() {

  return (
    <Router>
    <Navbar /> 
    <br/> 
   
        <Routes>
             <Route path="/signup" element={<Signup />} /> 
             <Route path="/post-login" element={<Post_log />} /> 
             <Route path="/signin" element={<Login />} /> 
             <Route path="/" element={<CaseStatus/>} /> 
             <Route path="/ye" element={<XY/>} /> 
            <Route path="/vacc-booking" element={<Newvax/>} />
            <Route path="/create" element={<CreatePat />} />
            <Route path="/edit/:id" exact element={<Patedit/>} />
            <Route path="/pat-search" element={<Obj/>} /> 
            <Route path="hos-list" exact element={<Hosdata />} /> 
        </Routes> 
        
</Router>
  );
}

export default App;
