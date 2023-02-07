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
    try {
        //console.log(data[0].username)
    } catch (error) {
        console.log(error)
    }
  
  
  
    function handleSubmit(event) {
     
      for(let i=0;i<data.length;i++){
        if(userName.toLowerCase() === data[i].username.toLowerCase()){
            console.log("true");
            if(data[i].password===password)
            console.log("Signin is successful");
            window.location = '/';  
            event.preventDefault(); 
      }
      else
      console.log("login failed");
    console.log(data[i].password===password);

    }
      
      
  
   
      
   }
  
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:5000/login');
        
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
        
      
    }, [])
   
   console.log(data);
    
    
    return (
      <div>
     
      <form onSubmit={handleSubmit}>
        <label>
          Login ID:
          <input
            type="text"
            name="name"
            value={userName}
            onChange={handleNameChange}
          />
        </label>
        <label>
         password:
          <input
            type="text"
            name="name"
            value={password}
            onChange={handlepasswordChange}
          />
        </label>
        
      
       
           
        <br />
        <button type="submit">Log In</button>
      </form>
      <button type="random">Sign Up</button>
      </div>
  
    );
  
  }
