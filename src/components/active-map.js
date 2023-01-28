import React, { useState, useEffect } from 'react';
import {MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import './active-map.css';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
var arr=[];

const MyComponent = () => {
  const [dataTable, setDataTable] = useState([]);
  const [markers, setMarkers] = useState([]);

 


  useEffect(() => {
    axios('http://localhost:5000/patients/')
      .then(res => {
        setDataTable(res.data);
       
        const provider = new OpenStreetMapProvider();
        let address = res.data.map((elem) =>{
            console.log(elem.location)

            provider.search({ query: elem.location })
          .then(results => {
            
            const markers = results.map(result => {arr.push([result.y,result.x]) 
              return {
                
                key: elem,
                position: [result.y, result.x]
              };
              
            });
            setMarkers(markers);
          });
 
          })
        
      })
      .catch(err => console.log(err))
  }, []);



console.log(arr)
  
  return (
    <Map center={[12.9716, 77.5946]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <div>
        {arr.map((item,index)=><Marker key={Math.random()*100000} position={item}/>)}
        
        
      </div>
    </Map>
  ); 



}

export default MyComponent;
