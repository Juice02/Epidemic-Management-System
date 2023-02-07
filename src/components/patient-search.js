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
    const [hos, setHos] = useState('');
    const [pid, setpid] = useState('');
    const [name, setname] = useState('');
    const [location, setloc] = useState('');
    const [age, setage] = useState('');
    const [status, setstatus] = useState('');
    const [history, setHis] = useState('');

    async function fetchData() {
        try {
          const res = await axios.get('http://localhost:5000/patients');
          
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

   // console.log(hos)
    
    function handleChange(event) {

        setval(event.target.value)
       
      }

      function handleSubmit(event) {
        for(let i=0;i<hos.length;i++)
        {
           
            if(hos[i].pid===val)
            {
                console.log(hos[i]);
                setpid(hos[i].pid);
                setname(hos[i].pname);
                setloc(hos[i].location);
                setage(hos[i].age);
                setstatus(hos[i].status);
                setHis(hos[i].p_history);
            }
        }
        
        }


    const [contacts, setContacts] = useState(hos);
    const [val, setval] = useState('');
    
    return (
        <div>
        <div className='search'>
        <input
          type="text"
          placeholder="Enter Patient Id Here"
            value={val}
            onChange={handleChange}
        />
        <button className='butt'
        onClick={handleSubmit}
        >Search</button>
        </div>
        <div className='patient'>
        <h4> Patient Id:{pid}</h4> 
        <h4>Patient Name:{name}</h4>
        <h4>Location:{location}</h4>
        <h4>Age:{age}</h4>
        <h4>Status:{status}</h4>
        <h4> History:{history}</h4>
        </div>
        <div>
    <button onClick={()=>window.location = '/create'} className='hellopat'>
        CREATE NEW</button>
    </div>
    <div><button onClick={()=>window.location = '/list'} className='smol'>
    Edit Patient Database</button></div>
        </div>

      );
    }
    


  