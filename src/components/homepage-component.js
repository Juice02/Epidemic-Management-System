import './homepage.css'


const TableHeadItem=({ item })=><th>{item.heading}</th>
const Hostable = () =>{

    

    const column = [
        { heading: 'Active', value: '' },
        { heading: 'Recovered', value: '' },
        { heading: 'Deceased', value: '' }
      ]
      
      
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
                <td>{}</td>
                <td>lol</td>
                <td>lol</td>
            </tbody>
          </table>

        </div>
      
        );
   

}

export default Hostable;