import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
var sta=[]

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangehname = this.onChangehname.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeBeds = this.onChangeBeds.bind(this);
    this.onChangevents = this.onChangevents.bind(this);
    this.onChangeOx = this.onChangeOx.bind(this);
    this.onChangeVax = this.onChangeVax.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
        hname:'',
        hlocation:'',
        nbeds:0,
        nvents:0, 
        nOx:0,     
        nvax:0
      }
  }


  onChangehname(e) {
    this.setState({
      hname: e.target.value
    })
  }

  onChangeBeds(e) {
    this.setState({
      nbeds: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      hlocation: e.target.value
    })
  }

  onChangevents(e) {
    this.setState({
      nvents: e.target.value
    })
  }

  onChangeOx(e) {
    this.setState({
        nOx: e.target.value
    })
  }
  onChangeVax(e) {
    this.setState({
        nvax: e.target.value
    })
  }

  onSubmit(e) {
    

    const patient = {

        hname: this.state.hname,
        hlocation: this.state.hlocation,
        nbeds:this.state.nbeds,
        nvents:this.state.nvents,
        nOx:this.state.nOx,
        nvax:this.state.nvax
        
    }

    console.log(patient);

    axios.post('http://localhost:5000/hospitals/add', patient)
      .then(res => console.log(res.data));

      e.preventDefault();
   window.location = '/';
    
  }




  render() {
    return (
    <div>
      <h3>Create New Hospital Log</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
      <label>Hospital: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.hname}
          onChange={this.onChangehname}
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
          <label>Beds: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.nbeds}
              onChange={this.onChangeBeds}
              />
        </div>
        <div className="form-group">
          <label>Ventilators: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.nvents}
              onChange={this.onChangevents}
              />
        </div>
        <div className="form-group">
        <label>O2 Cylinders: </label>
        <input 
            type="text" 
            className="form-control"
            value={this.state.nOx}
            onChange={this.onChangeOx}
            />
      </div>
      <div className="form-group">
      <label>Vaccines: </label>
      <input 
          type="text" 
          className="form-control"
          value={this.state.nvax}
          onChange={this.onChangeVax}
          />
    </div>

        <div className="form-group">
          <input type="submit" value="Create Hospital Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}