import './hostable.css'
import {useEffect,useState} from 'react';
import axios from 'axios';

 
const TableHeadItem=({ item })=><th>{item.heading}</th>
const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem) => {
  
        if(columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.') //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
        }
  
        return <td>{item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )
const Hostable = () =>{
const [dataTable, setDataTable] = useState([]);
console.log(dataTable);



useEffect(() => {
    axios('http://localhost:5000/hospitals/')
    .then(res => setDataTable(res.data))
    .catch(err=>console.log(err))

    }, []);
    

    const column = [
        { heading: 'Name', value: 'hname' },
        { heading: 'Location', value: 'hlocation'},
        { heading: 'Beds', value:'nbeds'},
        { heading: 'Oxygen Cylinders', value:'nOx'},
        { heading: 'Ventilators', value:'nvents'},
        { heading: 'Vaccines', value:'nvax'}
        
      ]
      
      
      return (
        <div className="App">
          <h1>Hospital Resources</h1>
          <table>
            <thead>
                <tr>
                
                    {column.map((item,index) => <TableHeadItem item={item}/>)}
                </tr>
            </thead>
            <tbody>
                {dataTable.map((item,index) => <TableRow item={item} column={column}/>)}
            </tbody>
          </table>

        </div>
      
        );
   

}

export default Hostable;