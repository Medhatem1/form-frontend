import { useState  } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const handleFirstNameChange = (e) => {
    setForm({
      ...form,
      FirstName: e.target.value,
    });
  };
  const handleLastNameChange = (e) => {
    setForm({
      ...form,
      LastName: e.target.value,
    });
  };
  const handleAgeChange = (e) => {
    setForm({
      ...form,
      Age: e.target.value,
    });
  };
    
  


const [form,setForm]=useState({FirstName:"",LastName:"",Age:"0"})
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000",form)
    .then(response=>{
      setForm(response.data);
      console.log(response.data)
    })
    .catch((err)=>{
      console.error(err)
    })
    
}
    

  

  return (
    <div className="app">
    <div className="ah">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          placeholder="FirstName"
          value={form.FirstName}
          onChange={handleFirstNameChange}
          
        />
        <input
          type="text"
          placeholder="lastname"
          value={form.LastName}
          onChange={handleLastNameChange}
          
        />
        <input
          type="number"
          placeholder="age"
          value={form.Age}
          onChange={handleAgeChange}
          
        />
        
        <button >
          sign up NOW
        </button>
      </form>
      </div>
    </div>
  );
}

export default App;
