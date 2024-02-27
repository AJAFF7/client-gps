import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import minimalist2 from '../assets/images/minimalist2.jpg';
import minimalist3 from '../assets/images/minimalist3.jpg';
// import { Link } from "react-router-dom";


const Auth_register  = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const [alertMessage, setAlertMessage] = useState(""); // State to manage alert message
  const [alertType, setAlertType] = useState(""); // State to manage alert type (e.g., success, error)



  
  const onSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await axios.post("/api/auth-regis", {
        username,
        password,
      });
    
    
    setAlertMessage(" Completed ∆");
    setAlertType("success");

  } catch (error) {
    setAlertMessage("User Already Exist");
    setAlertType("error");
    console.error(error);
  }


    
  };

  return (
    <div className='app-header'>

    <div className="data-container ">

      <img  className="useru-logo" src={minimalist2} alt="" /> 
      <img  className="userp-logo" src={minimalist3} alt="" /> 

      <form onSubmit={onSubmit}>
     
        <h4 className="register-name">Register</h4>
        <div className="form-group">
          {/* <label htmlFor="username">Username:</label> */}
         
          <input 
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password:</label> */}
          
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="submit" type="submit">Register</button>
        <Link to='/Login_auth' className="submit-regis" > <b>Login</b> </Link>
      </form>
      {/* <Link  className='navbutton' to="/login">Login</Link>  */}

      {alertMessage && (
        <div className={`alert-all ${alertType} slideIn `}>
          {alertMessage} <br />
          {/* <button className="" onClick={() => setAlertMessage(false)}></button> */}
        </div>
      )}

    </div>
    </div>
  );
};

export default Auth_register 