import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
var sta=[]

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangePid = this.onChangePid.bind(this);
    this.onChangePname = this.onChangePname.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onChangeP_history = this.onChangeP_history.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        pid:'',
        pname: '',
        location:'',
        age:0,
        status:'',
        p_history:'',
        patients:[]
      }
  }


  onChangePid(e) {
    this.setState({
      pid: e.target.value
    })
  }

  onChangePname(e) {
    this.setState({
      pname: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeage(e) {
    this.setState({
      age: e.target.value
    })
  }

  onChangestatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onChangeP_history(e) {
    this.setState({
      p_history: e.target.value
    })
  }

  onSubmit(e) {
    

    const patient = {

        pid: this.state.pid,
        pname: this.state.pname,
        location:this.state.location,
        age:this.state.age,
        status:this.state.status,
        p_history:this.state.p_history
        
    }

    console.log(patient);

    axios.post('http://localhost:5000/patients/add', patient)
      .then(res => console.log(res.data));

      e.preventDefault();
   // window.location = '/pat-search';
    
  }

status=[
    'Active',
    'Recovered',
    'Deceased'
    ]


  render() {
    return (
    <div>
      <h3>Create New Patient Log</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
      <label>Patient ID: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.pid}
          onChange={this.onChangePid}
          />
    </div>


      <div className="form-group"> 
      <label>Name: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.pname}
          onChange={this.onChangePname}
          />
    </div>
        <div className="form-group"> 
          <label>Location: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeage}
              />
        </div>
        <div className="form-group"> 
          <label>Status: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.status}
              onChange={this.onChangestatus}>
              {
                this.status.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Medical History: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.p_history}
              onChange={this.onChangeP_history}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Patient Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}