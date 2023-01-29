import DatePicker from 'react-datepicker';
import { useState, useEffect } from "react";
import "./vacc.css";
import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
var sta=[]
var arr=[]

export default class CreateVaccine extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAdharcard = this.onChangeAdharcard.bind(this);
    this.onChangeHospitalname = this.onChangeHospitalname.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onChangeslot = this.onChangeslot.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username:'',
        adharcard: '',
        hospital_name:[],
        date: new Date(),
        slot_number:0,
        patients:[]
      }
  }


  componentDidMount() {
   
    axios.get('http://localhost:5000/hospitals/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            hospital_name: response.data.map(user => user.hname),
            hname: response.data[0].hname

          }) 
        }
      })
      .then(response => {response.data.map((hospital)=>arr.push(hospital.hname))})
      .catch((error) => {
        console.log(error);
      })

  }


  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeAdharcard(e) {
    this.setState({
      adharcard: e.target.value
    })
  }

  onChangeHospitalname(e) {
    this.setState({
      hospital_name: e.target.value
    })
  }

  onChangedate(e) {
    this.setState({
      date : Date
    })
  }

  onChangeslot(e) {
    this.setState({
      slot_number: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const vac = {

      username: this.state.username,
      adharcard: this.state.adharcard,
      hospital_name: this.state.hospital_name,
      date: this.state.date,
      slot_number: this.state.slot_number
        
    }

    {console.log(arr)}

    axios.post('http://localhost:5000/patients/add', vac)
      .then(res => console.log(res.data));

    window.location = '/';
  }

sta=[
    'Slot1',
    'Slot2',
    'Slot3'
    ]

  
  render() {
    return (
    <div>
      <h3>Vaccination Booking</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
      <label>Username: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.username}
          onChange={this.onChangeUsername}
          />
    </div>


      <div className="form-group"> 
      <label>Aadhar Card No: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.adharcard}
          onChange={this.onChangeAdharcard}
          />
    </div>
    <div className="form-group"> 
    <label>Hospital: </label>
    <select ref="userInput"
        required
        className="form-control"
        value={this.state.hospital_name}
        onChange={this.onChangeHospitalname}>
        {
          this.state.hospital_name.map(function(user) {
            return <option 
              key={user}
              value={user}>{user}
              </option>;
          })
        }
    </select>
  </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="form-group"> 
          <label>Slot: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.status}
              onChange={this.onChangestatus}>
              {
                this.sta.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Book Now" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}