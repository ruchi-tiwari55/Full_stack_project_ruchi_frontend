import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from  "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate =  useNavigate();

  const Submit = (e) => {
      e.preventDefault();
      //  vamos chamar a URL/server  dentro do método POST do axios
      // A rota /createUser abaixo, já foi definida no arquivo index.jsx item 23
      axios.post("http://localhost:3005/createUser", {name, email, age}  )
     .then( result => {
         console.log(result);
         navigate('/'); /* Agora ao clciar no botão Submit, após gravar os dados no BD, o sistema volta para a tela HomePage */
      })
     .catch( err => console.log(err) )
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='formupd vw-100 bg-white rounded p-3'>

          <form onSubmit={Submit} >
              <h2>Add User</h2>
              <div className='mb-2'>
                 <label htmlFor="">Name</label>
                 <input type="text" placeholder='Enter Name' className="form-control" id='inpNameUser' 
                    onChange={(e) => setName(e.target.value)}
                 />
              </div>
              <div className='mb-2'>
                 <label htmlFor="">Email</label>
                 <input type="email" placeholder='Enter Email' className="form-control" id='inpEmailUser' 
                    onChange={(e) => setEmail(e.target.value)}
                 />
              </div>
              <div className='mb-2'>
                 <label htmlFor="">Age</label>
                 <input type="text" placeholder='Enter Age' className="form-control" id='inpAgeUser' 
                    onChange={(e) => setAge(e.target.value)}
                 />
              </div>
              <div className="flexContainer">
                  <button className='btnSubm btn btn-success' id="btnRecor">Submit</button>	
                  <button onClick={handleCancel} className="btn btn-success" id="btnCancelAdd" >Cancel</button>
              </div>  
          </form>
        </div>		
    </div>
  )
}

export default CreateUser;