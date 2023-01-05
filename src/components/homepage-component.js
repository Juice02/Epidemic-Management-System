import './homepage.css'

import axios from 'axios'
import { useState,useEffect} from 'react'


const TableHeadItem=({ item })=><th>{item.heading}</th>
const Hostable = () =>{

    const[data,setData]=useState([])
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
            setData(data)
          })
        
      },[])
     
    const column = [
        { heading: 'Active', value: '' },
        { heading: 'Recovered', value: '' },
        { heading: 'Deceased', value: '' }
      ]
      
      for(var i=0;i<=data.length;i++)
        {
            console.log(data[i])
        }
     
      return (
        <div className="App">
          <h1>Case Counter</h1>
          <table>
            <thead>
                <tr>
                
                    {column.map((item,index) => <TableHeadItem item={item}/>)}
                </tr>
            </thead>
            <tbody>
                <td>lol</td>
                <td>lol</td>
                <td>lol</td>
            </tbody>
          </table>

        </div>
      
        );
   

}

export default Hostable;