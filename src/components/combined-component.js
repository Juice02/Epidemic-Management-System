import React, { Component } from 'react';
import "../App.css";

import Texts from "./frontpage-textbox";
import CaseStatus from "./Cases-status-component";

  export default function Yeet(){
    return (
        <div>
          <CaseStatus />
          <Texts /> 
        </div>
      );
  }

