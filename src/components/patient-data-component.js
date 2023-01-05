import './pattable.css'
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
const Pattable = () =>{
const [dataTable, setDataTable] = useState([]);
console.log(dataTable);



useEffect(() => {
    axios('http://localhost:5000/patients/')
    .then(res => setDataTable(res.data))
    .catch(err=>console.log(err))

    }, []);
    

    const column = [
        { heading: 'Name', value: 'pname' },
        { heading: 'Location', value: 'location'},
        { heading: 'Age', value:'age'},
        { heading: 'History', value:'p_history'}

      
      ]
      
      
      return (
        <div className="App">
          <h1>Patient Data</h1>
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

export default Pattable;