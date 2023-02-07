import {useEffect,useState} from 'react';
import axios from 'axios';

export default function Form(props) {
    const [userName, setName] = useState('');
    const [password, setPassword] = useState('');
    const [data,setData]=useState('');
   
    
    
    function handleNameChange(event) {
      setName(event.target.value)
    }
  
    
    function handlepasswordChange(event) {
      
      setPassword(event.target.value)
  
          }
    
     function handleSubmit(event) {
            const obj={
                username:userName,
                password:password,
            }
         
  
   axios.post('http://localhost:5000/login/add',obj)
   .then(res => {console.log(res)
   })
   .catch(err => console.log(err));
 
  console.log(obj.signup_userName);

  window.location='/signin'
  event.preventDefault();
     
}

   
   console.log(data);
    
    
    return (
      <div>
     
      <form onSubmit={handleSubmit}>
        <label>
          Hospital Id:
          <input
            type="text"
            name="name"
            value={userName}
            onChange={handleNameChange}
          />
        </label>
        <label>
        Password:
          <input
            type="text"
            name="name"
            value={password}
            onChange={handlepasswordChange}
          />
          <p>Remember your password. Forgot Password Not Available.</p>
        </label>
        
      
       
           
        <br />
        <button type="submit">Submit</button>
      </form>
      
      </div>
  
    );
  
    }

