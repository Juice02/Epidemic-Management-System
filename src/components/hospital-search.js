import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import "./searching.css";

function Searchdata()
{
  const [userData, setUserdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
   
  useEffect( ()=>{
    const getUserdata= async()=>{
      const reqData= await fetch("http://localhost:5000/hospitals");
      const resData= await reqData.json();
      console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);

    }
getUserdata();
  },[]);

  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= userData.filter( (item)=> item.hlocation.toLowerCase().includes(getSearch));
     setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  }


  return(

        <React.Fragment>              
         <Container>
        <div className='row mt-3'> 
        <h1>Hospital Location Filter</h1>
            <div className='col-md-12 mt-3 mb-3'>              
                <div className="lol">  
                              
                <input  type="text" name='name' value={query}   className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Enter Location Here' />
              </div>          
            </div>

            <div className='col-md-12'>
            <table className="table" style={{ color: "#fff" }}>
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Location</th>
                  <th>Beds</th>
                  <th>Ventilators</th>
                  <th>O2 Cylinders</th>
                  <th>Vaccines</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.map( (getUser, index)=>(
                  <tr key={index}>
                  <td>{getUser.hname}</td>
                  <td>{getUser.hlocation}</td>
                  <td>{getUser.nbeds}</td>
                  <td>{getUser.nvents}</td>
                  <td>{getUser.nOx}</td>
                  <td>{getUser.nvax}</td>
                  </tr>
                   )) }  
                    
              </tbody>
            </table>
            </div>
        </div>
      </Container>

        </React.Fragment>
    );
}
export default Searchdata;