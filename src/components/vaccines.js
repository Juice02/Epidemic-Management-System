import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
var sta =[]

export default class vaccines extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAdharcard = this.onChangeAdharcard.bind(this);
    this.onChangeHospital_name = this.onChangeHospital_name.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeSlot_number = this.onChangeSlot_number.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state = {
      username: '',
      adharcard: '',
      hospital_name: [],
      date: new Date(),
      slot_number: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/hospital/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            hospitals: response.data.map(hospital => hospital.hlocation),
            hlocation : response.data[0].hlocation
          })
        }
      })
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
      Adharcard: e.target.value
    })
  }

  onChangeHospital_name(e) {
    this.setState({
      hospital_name: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  onChangeSlot_number(e){
    this.setState({
        Slot_number:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const vacc_booking = {
      username: this.state.username,
      adharcard: this.state.adharcard,
      hospital_name: this.state.hospital_name,
      date: this.state.date,
      slot_number:this.state.slot_number
    }

    console.log(vacc_booking);

    axios.post('http://localhost:5000/vacc-booking/add', vaccines)
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
      <h3>Create vaccine Log</h3>
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
      <label>Adhar Card No: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.adharcard}
          onChange={this.onChangeAdharcard}
          />
    </div>

    <div className="form-group"> 
          <label>Hospitals: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.hospital}
              onChange={this.onChangeHospital_name}>
              {
                this.state.hospitals.map(function(hospital) {
                  return <option 
                    key={hospital}
                    value={hospital}>{hospital}
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
              value={this.state.slot_number}
              onChange={this.onChangeSlot_number}>
              {
                this.sta.map(function(slot_number) {
                  return <option 
                    key={slot_number}
                    value={slot_number}>{slot_number}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Vaccination Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
 
}
