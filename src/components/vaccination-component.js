import react, { useState } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useEffect } from 'react';
import "./vacc.css";
import Dial from "./Dialog.js"

var arr =['Slot1','Slot2','Slot3']

let booking_id = Math.floor((Math.random() * 100000000000) + 1);
const title="Booking Confirmed!"

export default function Form(props) {
  const [user, setName] = useState('');
  const [adhar, setAdhar] = useState('');
  const [hos, setHos] = useState([]);
  const [dates, setDate] = useState();
  const [slot, setSlot] = useState('');
  const [re,setRe]=useState();
  const [id,setId]=useState('63d6870faea4cc23849192e1');
  const[hospital,setHospital]=useState('Dayanand Sagar');
  const[pop,setPop]=useState(false);
  
  useEffect(()=>{
    
  },[re])
  
  
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

      for(let i=0;i<hos.length;i++)
      {
        if(hospital===hos[i].hname)
        {
          setId(hos[i]._id)
        }
      }
        setRe(Math.random())
        }
  

  function handleDateChange(event) {
    console.log(event)
    console.log(typeof event)
    setDate(event)
    
  }

  function handleSlotChange(event) {
    setSlot(event.target.value)
  }

  console.log("Rendered")
 
  function handlePopUp(event) {
    setPop(prev=>!prev)
  }



  function handleSubmit(event) {
    const obj={
        booking_id:booking_id,
        username:user,
        adharcard:adhar,
        hospital_name: hospital,
        date: JSON.stringify(dates),
        slot_number:slot
    }
    
    
    
    console.log(obj.date)

    event.preventDefault();
    
    
    setPop(prev=>!prev);
 
    axios.post('http://localhost:5000/bookings/add',obj)
      .then(res => {console.log(res)
      })
      .catch(err => console.log(err));
      
     console.log(obj.hospital_name);
 

     for(let i=0;i<hos.length;i++)
        {
           
            if(hos[i].hname===hospital)
            {
              const l= hos[i]._id;
               setRe(Math.random())
               console.log((hos[i]._id))
                console.log(hos[i].hname)
                console.log(hos[i].hlocation)
                console.log(hos[i].nbeds)
                console.log(hos[i].nvents)
                console.log(hos[i].nOx)
               console.log(hos[i].nvax)

               const nobj={
                // id:hos[i]._id,
                hname: hos[i].hname,
                hlocation: hos[i].hlocation,
                nbeds: hos[i].nbeds,
                nvents: hos[i].nvents,
                nOx: hos[i].nOx,
                nvax: hos[i].nvax-1,

              }
              console.log(l)
              setId(l)
              console.log(id)
              
              axios.post(`http://localhost:5000/hospitals/update/${l}`,nobj)
              .then(res=>{console.log(res)})
              .catch(err=>{console.log(err)})
              
              break;
                
            }
        }
        
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
 
 
  
  
  return (
    <div>
   { pop && <Dial title={title} data={booking_id} handlePopUp={handlePopUp}/>}
      <h1>Vaccination Booking</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
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
    
    </div>

  );

}
