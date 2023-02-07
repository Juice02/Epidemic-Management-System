import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

export default function Form(props) {
    const [book, setBook] = useState('');
    const [user, setUser] = useState('');
    const [adhar, setAdhar] = useState('');
    const [hos, setHos] = useState('');
    const [hospital, setHospital] = useState('');
    const [date, setDate] = useState('');
    const [slot, setSlot] = useState('');


    async function fetchData() {
        try {
          const res = await axios.get('http://localhost:5000/bookings');
          
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
        
      }, [])

   
   
    function handleChange(event) {

        setval(event.target.value)
       
      }

      function handleSubmit(event) {
        for(let i=0;i<hos.length;i++)
        {
           
            if(JSON.stringify(hos[i].adharcard)===val)
            {
                console.log(hos[i]);
                setBook(hos[i].booking_id);
                setUser(hos[i].username);
                setAdhar(hos[i].adharcard);
                setHospital(hos[i].hospital_name);
                setDate((hos[i].date).substring(1, 11));
                setSlot(hos[i].slot_number);
            }
        }
        
        }


    const [contacts, setContacts] = useState(hos);
    const [val, setval] = useState('');

    return (
        <div>
        <h5>Check Your Vaccine Details</h5>
        <div className='search'>
        <input
          type="text"
          placeholder="Enter Adhar Card Number Here"
            value={val}
            onChange={handleChange}
        />
        <button className='butt'
        onClick={handleSubmit}
        >Search</button>
        </div>
        <div className='patient'>
        <h4> Booking_id:{book}</h4> 
        <h4>Name:{user}</h4>
        <h4>Adhar Card No:{adhar}</h4>
        <h4>Hospital:{hospital}</h4>
        <h4>Date:{date}</h4>
        <h4>Slot:{slot}</h4>
        </div>
        <div>
    <button onClick={()=>window.location = '/vacc-booking'} className='hellopat'>
        Book A Vaccine</button>
    </div>
   
        </div>

      );
    }
    


  