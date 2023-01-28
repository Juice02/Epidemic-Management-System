import './active-status-component.css'
import {useEffect,useState} from 'react';
import axios from 'axios';
 
const TableHeadItem=({item})=><th>{item.heading}</th>
const TableRow = ({activeCount,recoveredCount,deceasedCount}) => (
    <tr>
        <td>{activeCount}</td>
        <td>{recoveredCount}</td>
        <td>{deceasedCount}</td>
    </tr>
)
const Casetable = () =>{
const [dataTable,setDataTable]=useState([]);
const [activeCount,setActiveCount]=useState(0);
const [recoveredCount,setRecoveredCount]=useState(0);
const [deceasedCount,setDeceasedCount]=useState(0);

useEffect(() => {
    axios('http://localhost:5000/patients/')
    .then((res) => {
        setDataTable(res.data);
        res.data.forEach((item) => {
            if (item.status === "Active") {
             setActiveCount((prevActiveCount) => prevActiveCount + 1);
            } else if (item.status==="Recovered") {
             setRecoveredCount((prevRecoveredCount) => prevRecoveredCount + 1);
            } else if (item.status==="Deceased") {
             setDeceasedCount((prevDeceasedCount) => prevDeceasedCount + 1);
            }
        });
    })
    .catch(err=>console.log(err))

    }, []);
    const column = [
        { heading: 'Active', value: '' },
        { heading: 'Recovered', value: '' },
        { heading: 'Deceased', value: '' }
      ]

      return (
        <div className="case_counter_container">
        <h1>Case Counter</h1>
          <table>
            <thead>
                <tr>
                
                    {column.map((item) => <TableHeadItem item={item}/>)}
                </tr>
            </thead>
            <tbody>
                <TableRow activeCount={activeCount} recoveredCount={recoveredCount} deceasedCount={deceasedCount} />
            </tbody>
          </table>

        </div>
      
        );
   

}
export default Casetable;


