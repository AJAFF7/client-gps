// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import { useCookies } from "react-cookie";
// import { useNavigate, Link } from "react-router-dom";
// import home from '../assets/images/home.jpg'
// import minimalist2 from '../assets/images/minimalist2.jpg';
// import minimalist3 from '../assets/images/minimalist3.jpg';
// // import Auth_register from './regis-auth'







// function Loginto  () {

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!localStorage.getItem('userID')) {
//           navigate('/Login_auth');
//         }
    
//       }, []);


//   return (
//  <>

//     <div className='App'>

//     {/* <header className="App-header"> */}
      
    
//       <ul>
//         <nav className='navbar'>
//           <Link to="/home"><b> <img className='nav-item active' src={home} height='25' width='25' alt="Home" /> </b></Link>
//           <Link to="/research" className='nav-item'><b>Research</b></Link>  
//           <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
//           <Link to="/article" className='nav-item'><b>Article</b></Link> 
//           <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>  
//           <Link to="/general" className='nav-item'><b>General</b></Link>
//         </nav>
//       </ul>

//       </div>

//     <div >
//       {/* <Auth_register /> */}
//       <Login_update />
//       {/* <Register /> */}


    

//     </div>
//     </>
//   );
// };

// const Login_update = () => {
//     // const [_, setCookies] = useCookies(["access_token"]);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [alertMessage, setAlertMessage] = useState(""); 
//   const [alertType, setAlertType] = useState(""); 

// const navigate = useNavigate();

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const result = await axios.post("/api/auth-login", {
//         username,
//         password,
//       });

//     //  setCookies("access_token", result.data.token);
//       window.localStorage.setItem("userID", result.data.userID); //, result.data.userID
     
//       navigate("/Blogs"); //Fetchalldata1proc

//       setAlertMessage("logged in success");
//       setAlertType("success");

//     } catch (error) {
//       setAlertMessage("Incorrect Credentials");
//       setAlertType("error");
//       console.error(error);
//     }

//   };


 

//   useEffect(() => {
//       if (!localStorage.getItem('userID')) {
//         navigate('/');
//       }
  
//     }, []);

 


//   return (

  
//     <>
   
        

//     <div className="data-container ">
   

//     <img  className="useru-logo" src={minimalist2} alt="" /> 
//     <img  className="userp-logo" src={minimalist3} alt="" /> 
//       <form onSubmit={onSubmit}>
      
//         <h4 className="login-name" >Personal 1</h4>
        
//         <div className="form-group">
              
//           <input 
//             type="text"
//             id="username "
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           {/* <label htmlFor="password">Password:</label> */}
          
//           <input 
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <button className="submit" type="submit">Login</button>
//       </form>
//       {/* <Link  className='navbutton' to="/register">Register</Link>  */}
      
      


// {/* Custom styled alert */}
// {alertMessage && (
//         <div className={`alert-all ${alertType} slideIn `}>
//           {alertMessage} <br />
//           <button className="close" onClick={() => setAlertMessage(false)}>Close</button>
//         </div>
//       )}
// </div>
// {/* <p className='loading-ani-loginpage'></p> */}

// {/* </header> */}


    


   
// </>


//   );
// };


// export default Loginto


