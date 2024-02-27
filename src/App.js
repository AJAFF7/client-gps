

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 

import Home from './pages/Home';
import Gallery from './pages/Gallery';
// import AboutUs from './pages/AboutUs';
import Research from './pages/Research';
import Article from './pages/Article'
import BlogUpdate from './pages/updateblogs';
import Contacts from './pages/Contacts';
import Publisher from './pages/Publisher'
import FormPost from './pages/formpost'
import DeleteAccount from './pages/deleteaccount';
import Login_auth from './pages/login-auth'
import Login_update from './pages/login-update'
import Auth_register from './pages/regis-auth'
import Blogs from './pages/blogs';
import ImageUploader from './pages/imageupload'
import Clock from './pages/Clock';
import News from './pages/news';
import Geolocations from './pages/geolocation'

// import { ContactUs } from './renderdpage/ContactUs';

// import Texthome from './Text-home';



 



function App() {
  // const navigate = useNavigate();

  // const [cookies, setCookies] = useCookies(["access_token"]);
  // const navigate = useNavigate();

  // const logout = () => {
  //   setCookies("access_token", "");
  //   window.localStorage.clear();
  //   navigate("/Auth");
  // };
  

//   const Logout = () => {
//     window.localStorage.removeItem("userID")
 
//     localStorage.clear();
//     navigate("/");
//  }





// const [isDarkMode, setIsDarkMode] = useState(false);

// const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
// };

const [darkModeColor, setDarkModeColor] = useState('dark-mode-default');

const toggleDarkMode = () => {
  // Toggle between different dark mode color schemes
  if (darkModeColor === 'dark-mode-default') {
    setDarkModeColor('dark-mode-alt1');
  } else if (darkModeColor === 'dark-mode-alt1') {
    setDarkModeColor('dark-mode-alt2');
  } else if (darkModeColor === 'dark-mode-alt2') {
    setDarkModeColor('dark-mode-alt3');
  } else if (darkModeColor === 'dark-mode-alt3'){
    setDarkModeColor('dark-mode-alt4');
  } else {
    setDarkModeColor('dark-mode-default');
  }
};


  return (

  
    //  <div className={`app-header ${isDarkMode ? 'on' : 'off'}`}>
    //   <div className="switch" onClick={toggleDarkMode}>
    //     <div className={`handle ${isDarkMode ? 'right on' : 'left'}`} />
    //   </div>
    //   <div>

    <div className={`app-header ${darkModeColor}`}>
      <div className="switch" onClick={toggleDarkMode}>
        <div className={`handle ${darkModeColor}`} />
      </div>
      <div>

   
 
     
     <Routes>
 
       {/* <Route path="/" element={<Login />} /> */}
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/gallery" element={<Gallery />}  />
       <Route path="/research" element={<Research />} />
       <Route path="/article" element={<Article />} />
       <Route path="/BlogUpdate" element={<BlogUpdate />} />
       <Route path="/contacts" element={< Contacts/>} />
       <Route path="/blogs" element={< Blogs/>} />
       <Route path="/formpost" element={<FormPost/>} />
       <Route path="/deleteAccount" element={<DeleteAccount/>} />
       <Route path="/login_auth" element={<Login_auth/>} />
       <Route path="/Clock" element={<Clock/>} />
       <Route path="/News" element={<News/>} />
       <Route path="/login_update" element={<Login_update/>} />
       <Route path="/auth_register" element={<Auth_register/>} />
       <Route path="/imageuploader" element={<ImageUploader/>} />
       <Route path="/Geolocations" element={<Geolocations/>} />
       <Route path="/publisher" element={< Publisher/>} />
     
     </Routes>
    
   {/* </header> 
   </div> */}

</div>
  
  </div>

  )
}
       




export default App;




