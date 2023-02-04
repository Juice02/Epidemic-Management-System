import React, { useState, useEffect } from 'react';
import {MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import './active-map.css';
import {GeoSearchControl as GeoSearch} from 'leaflet-geosearch';

const MyComponent = () => {
  const [dataTable, setDataTable] = useState([]);
  const [markers, setMarkers] = useState([]);

  
  useEffect(() => {
    axios('http://localhost:5000/patients/')
      .then(res => {
        setDataTable(res.data);
        const provider = new GeoSearch.OpenStreetMapProvider();
        const addresses = res.data.map(patient => patient.location);
        console.log(addresses)
        provider.search({ query: dataTable.location })
          .then(results => {
            const markers = results.map(result => {
              return {
                key: result.x,
                position: [result.y, result.x]
              };
            });
            setMarkers(markers);console.log(dataTable.location)
          });
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <Map center={[12.9716, 77.5946]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map(marker => (
        <Marker key={marker.key} position={marker.position} />
      ))}
    </Map>
  );

      }
  export default MyComponent;