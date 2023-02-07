import React, { Component } from 'react';
import "../App.css";

import Texts from "./frontpage-textbox";
import CaseStatus from "./Cases-status-component";
import Mar from "./marquee";

  export default function Yeet(){
    return (
        <div>
        <Texts /> 
          <div className='rarara'>
        <CaseStatus />
          </div>
         <div>
        <Mar/>
        </div>
        </div>
        
      );
  }

