import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './pattable.css';
console.log("executed1")
const Patient = props => (
  <tr>
    <td>{props.patient.pid}</td>
    <td>{props.patient.pname}</td>
    <td>{props.patient.location}</td>
    <td>{props.patient.age}</td>
    <td>{props.patient.status}</td>
    <td>{props.patient.p_history}</td>
    <td>
      <Link to={"/edit/"+props.patient._id}>edit</Link> | <a href="#" onClick={() => { props.deletePatient(props.patient._id) }}>delete</a>
    </td>
    {console.log("/edit/"+props.patient._id)}
  </tr>
)
console.log("executed2")
export default class PatientsList extends Component {
  constructor(props) {
    super(props);

    this.deletePatient = this.deletePatient.bind(this)

    this.state = {patients: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/patients/')
      .then(response => {
        this.setState({ patients: response.data })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePatient(id) {
    axios.delete('http://localhost:5000/patients/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      patients: this.state.patients.filter(el => el._id !== id)
    })
  }

  patientList() {
    return this.state.patients.map(currentpatient => {
      return <Patient patient={currentpatient} deletePatient={this.deletePatient} key={currentpatient._id}/>;
    })
  }

  render() {
    
    return (
      <div>
        <h3>Logged Patients</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Pid</th>
              <th>Name</th>
              <th>Location</th>
              <th>Age</th>
              <th>Status</th>
              <th>Med. History</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.patientList() }
          </tbody>
        </table>
      </div>
    )
  }
}