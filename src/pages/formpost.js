

// import React, { useState, useEffect } from 'react';
// import {  Link, useNavigate } from 'react-router-dom';
// import home from '../assets/images/home.jpg'
// import logout from '../assets/images/logout.jpg';
// import DeleteAccount from './deleteaccount';
// import axios from 'axios';







// const FormPost = () => {
//   const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

//   const [alertMessage, setAlertMessage] = useState(""); 
//   const [alertType, setAlertType] = useState(""); 
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
//   };

//   const handleAddPost = async () => {
//     try {
//       // Add a new post to the API
//       const response = await axios.post('/api/blogs', newPost);
//       console.log('Post added successfully:', response.data);
//       setNewPost({ title: '', content: '', author: '' });

//       setAlertMessage(" Data TranSsferred"); //Successfully 
//       setAlertType("success");

//     } catch (error) {
//       console.error('Error adding post:', error);

//       setAlertMessage("Error Transferring ");
//       setAlertType("error");
//       console.error(error);

//     }
//   };

//   const navigate = useNavigate();
//   const Logout = () => {
//     window.localStorage.removeItem("userID")
  
//     localStorage.clear();
//     navigate("/Login_auth ");
//   }


//   useEffect(() => {
//     if (!localStorage.getItem('userID')) {
//       navigate('/Login_auth');
//     }

//   }, [navigate]);


//   useEffect(() => {

//     if (alertMessage) {
//       const timeout = setTimeout(() => {
//         setAlertMessage('');
//       }, 4000); 

//       return () => clearTimeout(timeout);
//     }
//   }, [alertMessage]);

//   return (
//    <>
//     <div className='app-header'>

//           {/* <header className="App-header"> */}


//         <ul>
//             <nav className='navbar'>

              
//             {/* <Link to="/home" className='active'><b>Home</b></Link>   */}

//             <Link to="/home"><b> <img className='nav-home' src={home} height='25' width='25' alt="Home" /> </b></Link>
//               <Link to="/research" className='nav-item'><b>Research</b></Link>  
//               <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
//               <Link to="/article" className='nav-item'><b>Article</b></Link> 
//               <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>  


//               <div className="dropdown" onClick={toggleDropdown}> 
      
//               <span className="dropdown-toggle">{isDropdownOpen ? 'General ▽' : 'General ▼'}</span> 
//               {isDropdownOpen && (
              
//                 <div className="dropdown-content" onClick={closeDropdown}> <br /> 
//                   <Link to="/blogupdate" className='nav-item'><b>blogUpdate</b></Link>
//                   <Link to="/news" className='nav-item'><b>News</b></Link>
//                   <DeleteAccount />
//                 </div>
//               )}
             
//               </div>
           
          

//               <button className='nav-logout' onClick={() => Logout()}> <img className='nav-logout' src={logout} height='28' width='28' alt="logout" /> </button>
          
//             </nav>
//           </ul>
    
        


//    <div className="blog-form-container">
//       <h1>Weekly Blog App</h1>
//       <div className="form-container">
//         <h2>Add a New Post</h2>
//         <form>
//           <label>
//             Title:
//             <input type="text" name="title" value={newPost.title} onChange={handleInputChange} />
//           </label>
//           <label>
//             Content:
//             <textarea name="content" value={newPost.content} onChange={handleInputChange} />
//           </label>
//           <label>
//             Author:
//             <input type="text" name="author" value={newPost.author} onChange={handleInputChange} />
//           </label>
//           <button type="button" onClick={handleAddPost}>
//             Add Post
//           </button>


         

//         </form>
//       </div>
//       {alertMessage && (
//         <div className={`alert-all ${alertType} slideIn `}>
//           {alertMessage} <br />
//           {/* <button onClick={() => setAlertMessage(false)}>Close</button> */}
//         </div>
//       )}
//     </div>
    
//     </div>
   
//     </>
//   );
// };

// export default FormPost;




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import home from "../assets/images/home.jpg";
// import logout from "../assets/images/logout.jpg";
// import DeleteAccount from "./deleteaccount";
// import axios from "axios";

// const FormPost = () => {
//   const [newPost, setNewPost] = useState({
//     title: "",
//     content: "",
//     author: "",
//   });

//   const [alertMessage, setAlertMessage] = useState("");
//   const [alertType, setAlertType] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
//   };

//   const handleAddPost = async () => {
//     try {
//       // Add a new post to the API
//       const response = await axios.post(
//         "http://localhost:7272/api/blogs",
//         newPost,
//       );
//       console.log("Post added successfully:", response.data);
//       setNewPost({ title: "", content: "", author: "" });

//       setAlertMessage(" Data TranSsferred"); //Successfully
//       setAlertType("success");
//     } catch (error) {
//       console.error("Error adding post:", error);

//       setAlertMessage("Error Transferring ");
//       setAlertType("error");
//       console.error(error);
//     }
//   };

//   const navigate = useNavigate();
//   const Logout = async () => {
//     window.localStorage.removeItem("userID");
//     try {
//       await axios.post("http://localhost:7070/api/logout");
//       // Clear token from local storage
//       localStorage.removeItem("token"); 
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//     navigate("/Login_auth");
//   };

//   useEffect(() => {
//     if (!localStorage.getItem("userID")) {
//       navigate("/Login_auth");
//     }
//   }, [navigate]);

//   useEffect(() => {
//     if (alertMessage) {
//       const timeout = setTimeout(() => {
//         setAlertMessage("");
//       }, 4000);

//       return () => clearTimeout(timeout);
//     }
//   }, [alertMessage]);

//   return (
//     <>
//       <div className="app-header">
//         <ul>
//           <nav className="navbar">
//             <Link to="/home">
//               <b>
//                 {" "}
//                 <img
//                   className="nav-home"
//                   src={home}
//                   height="25"
//                   width="25"
//                   alt="Home"
//                 />{" "}
//               </b>
//             </Link>
//             <Link to="/research" className="nav-item">
//               <b>Research</b>
//             </Link>
//             <Link to="/blogs" className="nav-item">
//               <b>Blogs</b>
//             </Link>
//             <Link to="/article" className="nav-item">
//               <b>Article</b>
//             </Link>
//             <Link to="/gallery" className="nav-item">
//               <b>Gallery</b>
//             </Link>

//             <div className="dropdown" onClick={toggleDropdown}>
//               <span className="dropdown-toggle">
//                 {isDropdownOpen ? "General ▽" : "General ▼"}
//               </span>
//               {isDropdownOpen && (
//                 <div className="dropdown-content" onClick={closeDropdown}>
//                   {" "}
//                   <br />
//                   <Link to="/blogupdate" className="nav-item">
//                     <b>blogUpdate</b>
//                   </Link>
//                   <Link to="/news" className="nav-item">
//                     <b>News</b>
//                   </Link>
//                   <DeleteAccount />
//                 </div>
//               )}
//             </div>

//             <button className="nav-logout" onClick={Logout}>
//               {" "}
//               <img
//                 className="nav-logout"
//                 src={logout}
//                 height="28"
//                 width="28"
//                 alt="logout"
//               />{" "}
//             </button>
//           </nav>
//         </ul>

//         <div className="blog-form-container">
//           <h1>Weekly Blog App</h1>
//           <div className="form-container">
//             <h2>Add a New Post</h2>
//             <form>
//               <label>
//                 Title:
//                 <input
//                   type="text"
//                   name="title"
//                   value={newPost.title}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Content:
//                 <textarea
//                   name="content"
//                   value={newPost.content}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Author:
//                 <input
//                   type="text"
//                   name="author"
//                   value={newPost.author}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <button type="button" onClick={handleAddPost}>
//                 Add Post
//               </button>
//             </form>
//           </div>
//           {alertMessage && (
//             <div className={`alert-all ${alertType} slideIn `}>
//               {alertMessage} <br />
//               {/* <button onClick={() => setAlertMessage(false)}>Close</button> */}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FormPost;





import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../assets/images/home.jpg";
import logout from "../assets/images/logout.jpg";
import DeleteAccount from "./deleteaccount";
import axios from "axios";

const FormPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleAddPost = async () => {
    try {
      // Add a new post to the API
      const response = await axios.post(
        "/api/blogs",
        newPost,
      );
      console.log("Post added successfully:", response.data);
      setNewPost({ title: "", content: "", author: "" });

      setAlertMessage(" Data TranSsferred"); //Successfully
      setAlertType("success");
    } catch (error) {
      console.error("Error adding post:", error);

      setAlertMessage("Error Transferring ");
      setAlertType("error");
      console.error(error);
    }
  };

  //const Logout = async () => {
    //window.localStorage.removeItem("userID");
    //try {
      //await axios.post("http://localhost:7070/api/logout");
      // Clear token from local storage
      //localStorage.removeItem("token"); 
    //} catch (error) {
      //console.error("Error logging out:", error);
    //}
    //navigate("/Login_auth");
  //};
  
   const handleLogout = async () => {
    try {
      const response = await axios.post("https://hama.ajaf.my.id/api/logout");
      console.log(response.data); // Optional: log the response
      // Handle successful logout, e.g., redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout failure
    }
    navigate("/Login_auth");
  };

  useEffect(() => {
    if (!localStorage.getItem("userID")) {
      navigate("/Login_auth");
    }
  }, [navigate]);

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/home"); // Redirect to home if token is not present
  //   }
  // }, [navigate]);

  useEffect(() => {
    if (alertMessage) {
      const timeout = setTimeout(() => {
        setAlertMessage("");
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [alertMessage]);

  return (
    <>
      <div className="app-header">
        <ul>
          <nav className="navbar">
            <Link to="/home">
              <b>
                {" "}
                <img
                  className="nav-home"
                  src={home}
                  height="25"
                  width="25"
                  alt="Home"
                />{" "}
              </b>
            </Link>
            <Link to="/research" className="nav-item">
              <b>Research</b>
            </Link>
            <Link to="/blogs" className="nav-item">
              <b>Blogs</b>
            </Link>
            <Link to="/article" className="nav-item">
              <b>Article</b>
            </Link>
            <Link to="/gallery" className="nav-item">
              <b>Gallery</b>
            </Link>

            <div className="dropdown" onClick={toggleDropdown}>
              <span className="dropdown-toggle">
                {isDropdownOpen ? "General ▽" : "General ▼"}
              </span>
              {isDropdownOpen && (
                <div className="dropdown-content" onClick={closeDropdown}>
                  {" "}
                  <br />
                  <Link to="/blogupdate" className="nav-item">
                    <b>blogUpdate</b>
                  </Link>
                  <Link to="/news" className="nav-item">
                    <b>News</b>
                  </Link>
                  
                  <Link to="/Geolocations" className='nav-item'><b>Geolocations</b></Link>
                  
                  <DeleteAccount />
                </div>
              )}
            </div>

            
            <button className="nav-logout" onClick={handleLogout}>
              {" "}
              <img
                className="nav-logout"
                src={logout}
                height="28"
                width="28"
                alt="logout"
              />{" "}
            </button>
          </nav>
        </ul>

        <div className="blog-form-container">
          <h1>Weekly Blog App</h1>
          <div className="form-container">
            <h2>Add a New Post</h2>
            <form>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Content:
                <textarea
                  name="content"
                  value={newPost.content}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  name="author"
                  value={newPost.author}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" onClick={handleAddPost}>
                Add Post
              </button>
            </form>
          </div>
          {alertMessage && (
            <div className={`alert-all ${alertType} slideIn `}>
              {alertMessage} <br />
              {/* <button onClick={() => setAlertMessage(false)}>Close</button> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormPost;


