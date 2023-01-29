import react, { useState } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useEffect } from 'react';

var arr =['Slot1','Slot2','Slot3']


export default function Form(props) {
  const [user, setName] = useState('');
  const [adhar, setAdhar] = useState('');
  const [hos, setHos] = useState([]);
  const [dates, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [re,setRe]=useState('');
  const[hospital,setHospital]=useState('');
  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleAdharChange(event) {
    if(event.target.value.length>12){
      alert("cannot be over 12 digits");
    }
    else
    setAdhar(event.target.value)
  }

  function handleHosChange(event) {
    setHospital(event.target.value)
  }

  function handleDateChange(event) {
    console.log(event)
    setDate(event)

  }

  function handleSlotChange(event) {
    setSlot(event.target.value)
  }

  function handleSubmit(event) {
    const obj={
        username:user,
        adharcard:adhar,
        hospital_name: hos,
        date: dates,
        slot_number:slot
    }
    axios.post('http://localhost:5000/bookings/add', obj)
      .then(res => {console.log(res)})
      .catch(err => console.log(err));
  }

  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:5000/hospitals');
      
      return res.data;
    } catch (err) {
      console.log(err);
    }
   
  }

  useEffect(() => {
    fetchData()
      .then(data => {
        setHos(data)
       
      })
      
      setRe(Math.random());
  }, [])
 
  console.log(hos)
  console.log(Array.isArray(hos));
  

  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="name"
          value={user}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Adhar Card No:
        <input
          type="text"
          name="name"
          value={adhar}
          onChange={handleAdharChange}
        />
      </label>
      <label>Hospital: </label>
    <select 
        required
        className="form-control"
        value={hospital}
        onChange={handleHosChange}>
        {
          hos.map(function(user) {
            return <option 
              
              value={user.hname}>{user.hname}
              </option>;
          })
        }
    </select>
      <label>Date: </label>
          <div>
            <DatePicker
              selected={dates}
              onChange={handleDateChange}
            />
          </div>
          <label>Slot: </label>
          <select 
              required
              className="form-control"
              value={slot}
              onChange={handleSlotChange}>
              {
                arr.map(function(user) {
                  return <option 
                    
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );

}