// import React, { useState } from "react";
// import axios from "axios";

// //import { useCookies } from "react-cookie";
// //import { useNavigate } from "react-router-dom";

// export const Auth = () => {
//   return (
//     <div className="auth">
//     <Login />
//       <Register />
      
//     </div>
//   );
// };

// const Login = () => {
//   //const [_, setCookies] = useCookies(["access_token"]);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");




//   //const navigate = useNavigate();

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const result = await axios.post("http://localhost:8282/auth/login", {
//         username,
//         password,
//       });

//      // setCookies("access_token", result.data.token);
//       window.localStorage.setItem("userID", result.data.userID);
//       //navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };




//   return (
//     <div className="auth-container">
//       <form onSubmit={onSubmit}>
//         <h2 className="lgin">Login</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
          
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <button className="submit" type="submit">Login</button>
//       </form>
   
//     </div>
//   );
// };


// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");



  
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:8282/auth/register", {
//         username,
//         password,
//       });
//       alert("Registration Completed! Now login.");
//     } catch (error) {
//       console.error(error);
//     }
//     alert("Username already exists");
//   };

//   return (
    
//     <div className="auth-container">
//       <form onSubmit={onSubmit}>
//         <h2 className="lgin">Register</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <button className="submit" type="submit">Register</button>  <span />
        
       
//       </form>
//     </div>
   
//   );
// };


// export default Auth