import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import home from '../assets/images/home.jpg';
// import hama from '../assets/images/hama.jpg';
// import career from '../assets/images/career.jpg';
import author from '../assets/images/author.jpg';
import Publisher from './Publisher';
import Clock from './Clock';
import { useSpring, animated } from 'react-spring';

function Home() {

  const scaleIn = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 380, friction: 15 } // Adjust tension and friction as needed
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (!localStorage.getItem('userID')) {
      navigate('/');
    }
  }, [navigate]);



  return (
    <>
      <div className='app-header'>
        <ul>
          <nav className='navbar'>
            <Link to="/home"><b><img className='nav-home' src={home} height='25' width='25' alt="Home" /></b></Link>
            <Link to="/research" className='nav-item'><b>Research</b></Link>
            <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
            <Link to="/article" className='nav-item'><b>Article</b></Link>
            <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>
            <Link to="/contacts" className='nav-item'><b>Contacts</b></Link>
           
           

            <div className="dropdown" onClick={toggleDropdown}>
              <span className="dropdown-toggle">{isDropdownOpen ? 'Health Advice ▽' : 'Health Advice ▼'}</span>   
              {isDropdownOpen && (
                <div className="dropdown-content" onClick={closeDropdown}> <br />
                  <Link to="/health-advice" className='nav-item'><b>General</b></Link>
                  <Link to="/article" className='nav-item'><b>heart atc.</b></Link>
                  <Link to="/health-advice" className='nav-item'><b>kidney </b></Link>
                  <Link to="/health-advice" className='nav-item'><b>liver </b></Link>
                  <Link to="/health-advice" className='nav-item'><b>stomach</b></Link>
                </div>
              )}
            </div>
            <Link to="/login_auth" ><b><img className='nav-author' src={author} height='25' width='25' alt="Author" /></b></Link>
          </nav>
       
        </ul> 
        
        <div className="hama-container">
        <Clock />
          {/* <img src={hama} alt="hama" className="banner-image" /> */}
        </div>

        <div className="home-page">
     
        <animated.div style={scaleIn}>
        
            <h1 className='ptext-h1'>Professor Hamanejem Jaff</h1>
          </animated.div>
       
      <b>
      <p className='ptext'>Deploy and manage applications in an OpenShift environment.
            Collaborate with development teams to streamline the CI/CD
            pipeline.Monitor and troubleshoot the OpenShift cluster,
            ensuring high availability.Implement and maintain automation
            scripts for infrastructure as code.Manage container images and
            repositories.Ensure security best practices are followed in the
            OpenShift environment.Work with cloud providers (AWS, Azure, or GCP)
            to integrate OpenShift with cloud services.</p>
            </b>
    </div>
      
        {/* <div> <b>
          <p className='ptext'>
          <h1 className='ptext-h1'> Prof. Dr. Hama Najem Jaff</h1>
            Deploy and manage applications in an OpenShift environment.
            Collaborate with development teams to streamline the CI/CD
            pipeline.Monitor and troubleshoot the OpenShift cluster,
            ensuring high availability.Implement and maintain automation
            scripts for infrastructure as code.Manage container images and
            repositories.Ensure security best practices are followed in the
            OpenShift environment.Work with cloud providers (AWS, Azure, or GCP)
            to integrate OpenShift with cloud services.
           
          </p>
        </b>
        </div> */}
      {/* Main Content */}

  

      <main className="main-content">
     
        <section className="section">
          <h2>Career In Health</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p> */}
          <b>
          <p className=''>
       
         <ul className=''>
    
        <li>Doctor</li>
        <li>Member of Iraq Doctors Union</li>
        <li>Member of Kurdistan Doctors Union</li>
        <li>Researcher</li> 
        <li>Medical Author</li>
        </ul>
      
        </p>
        </b>
          {/* <Link to="/about" className="btn">Learn More</Link> */}
        </section>
        <section className="section">
          <h2>Deplom</h2>
          <b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscingelit.
             Nu llam at velit nec justo finibus volutpat.
             Nu llam at velit nec justo finibus volutpat
             Nu llam at velit nec justo finibus volutpat
             Nu llam at velit nec justo finibus volutpat
             Nu llam at velit nec justo finibus volutpat
         Lorem ipsum dolor sit amet, consectetur adipiscingelit.
             Nu llam at velit nec justo finibus volutpat.
             Nu llam at velit nec justo finibus volutpat
             Nu llam at velit nec justo finibus volutpat
             Nu llam at velit nec justo finibus volutpat
             Nu llam at velit nec justo finibus volutpat</p>
             </b>
          {/* <Link to="/services" className="btn">View Services</Link> */}
        </section>
        <section className="section">
          <h2>Deplom</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p>
          {/* <Link to="/contact" className="btn">Contact Now</Link> */}
        </section>
        <section className="section">
          <h2>Deplom</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p>
          {/* <Link to="/about" className="btn">Learn More</Link> */}
        </section>
        <section className="section">
          <h2>Deplom</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p>
          {/* <Link to="/services" className="btn">View Services</Link> */}
        </section>
        <section className="section">
          <h2>Deplom</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p>
          {/* <Link to="/contact" className="btn">Contact Now</Link> */}
        </section>
      </main>
      </div>
      <Publisher />
    </>
  );
}

export default Home;










// import React, { useEffect, useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css';

// // import Extra from '../renderdpage/Extra';
// // import Ptext from '../renderdpage/Ptext';
// import home from '../assets/images/home.jpg'
// import hama from '../assets/images/hama.jpg';
// import career from '../assets/images/career.jpg';
// import author from '../assets/images/author.jpg'
// import Publisher from './Publisher'
// import Clock from './Clock';
// // import Ptext1 from '../renderdpage/Ptext1';

// // import Login from './Login';




// function Home() {
 

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };



//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem('userID')) {
//       navigate('/');
//     }

//   }, []);

  
// //   const Logout = () => {
// //     window.localStorage.removeItem("userID")
 
// //     localStorage.clear();
// //     navigate("/");
// //  }



// // 

  

//   return (

//           <>
//           {/* <div className={`app-header ${isDarkMode ? 'on' : 'off'}`}>
//         <div className="switch" onClick={toggleDarkMode}>
//           <div className={`handle ${isDarkMode ? 'right' : 'left'}`} />
//         </div>
//       </div> */}
      

//       {/* <div className='App'>

//        <header className="App-header"> */}



//        <div>  
//           <ul>
//             <nav className='navbar'>
            
//                 <Link to="/home" ><b> <img className='nav-home' src={home} height='25' width='25' /> </b></Link>
//                 <Link to="/research" className='nav-item'><b>Research</b></Link>
//                 <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
//                 <Link to="/article" className='nav-item'><b>Article</b></Link>
//                 <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>
//                 <Link to="/contacts" className='nav-item'><b>Contacts</b></Link>
                
//                 {/* <Link to="/ImageUploader" className='nav-item'><b>Image</b></Link> */}
//                 <div className="dropdown" onClick={toggleDropdown}>
//                   <span className="dropdown-toggle">{isDropdownOpen ? 'Health Advice ▽' : 'Health Advice ▼'}</span>
//                   {isDropdownOpen && (
//                     <div className="dropdown-content" onClick={closeDropdown}>
//                       <Link to="/health-advice" className='nav-item'><b>General info</b></Link>
//                       <Link to="/article" className='nav-item'><b>heart attack</b></Link>
//                       <Link to="/health-advice" className='nav-item'><b>kidney failure</b></Link>
//                       <Link to="/health-advice" className='nav-item'><b>liver problem</b></Link>
//                       <Link to="/health-advice" className='nav-item'><b>stomach issues</b></Link>
                    
//                     </div>
                 
//                 )}
//               </div>
//                  <Link to="/login_auth" ><b><img className='nav-author' src={author} height='30' width='30' /></b></Link>
//                </nav>
//              </ul>
//           </div>
 
//        {/* <Clock /> */}

       
//        <div>
           
           
//        {/* <img className='allon ' width="50"  src={img10} />   */}
//        <img className='hama ' width="300" height='300'  src={hama} />  
         
       
//          </div>
           

       
     
//         <b>
//         <p className='ptext'> <h1 className='ptext-h1'> Professor Doctor Hama Najem Jaff</h1>

   
//         Deploy and manage applications in an OpenShift environment.
//         Collaborate with development teams to streamline the CI/CD
//          pipeline.Monitor and troubleshoot the OpenShift cluster, 
//          ensuring high availability.Implement and maintain automation
//          scripts for infrastructure as code.Manage container images and 
//          repositories.Ensure security best practices arefollowed in the 
//          OpenShift environment.Work with cloud providers (AWS, Azure, or GCP)
//           to integrate OpenShift with cloud services.

         
//         </p>
//             </b>

            
         
         
     

      

//        <b>
      //  <p className='ptext'>
      //     <h1 className='ptext-h1 '>Career In Health</h1> 
      //    <ul className='ptext'>
    
      //   <li>Doctor</li>
      //   <li>Member of Iraq Doctors Union</li>
      //   <li>Member of Kurdistan Doctors Union</li>
      //   <li>Researcher</li> 
      //   <li>Medical Author</li>
      //   </ul>
      
      //   </p>
   
//         </b>

// {/*           
//          <div className='career'>
      
//          <img className='career ' width="270"  src={career}  data-aos="fade-up"/> 

//         </div> */}
 

       
          

//              <Publisher />

  
    
  

 
//     {/* </header>

     
//     </div> */}
//     </>

//   );
    
 
// }

// export default Home








// // import React, { useEffect, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import '../App.css';
// // import home from '../assets/images/home.jpg';
// // import hama from '../assets/images/hama.jpg';
// // import career from '../assets/images/career.jpg';
// // import author from '../assets/images/author.jpg';
// // import Publisher from './Publisher';

// // function Home() {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isDarkMode, setIsDarkMode] = useState(false);
// //   const navigate = useNavigate();

// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   const closeDropdown = () => {
// //     setIsDropdownOpen(false);
// //   };

// //   const toggleDarkMode = () => {
// //     setIsDarkMode(!isDarkMode);
// //   };

// //   useEffect(() => {
// //     if (!localStorage.getItem('userID')) {
// //       navigate('/');
// //     }
// //   }, [navigate]);

// //   return (
// //     <div className={`App-header ${isDarkMode ? 'dark-mode' : ''}`}>
// //       <div className='app-header'>
// //         <div className='switch' onClick={toggleDarkMode}>
// //           <div className={`handle ${isDarkMode ? 'right' : 'left'}`} />
// //         </div>
// //       </div>

// //       <header className='App-header'>
// //         <div>
// //           <ul>
// //             <nav className='navbar'>
// //               <Link to='/home'>
// //                 <b> <img className='nav-home' src={home} alt='Home' height='35' width='35' /> </b>
// //               </Link>
// //               <Link to="/research" className='nav-item'><b>Research</b></Link>
// //               <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
// //               <Link to="/article" className='nav-item'><b>Article</b></Link>
// //               <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>
// //               <Link to="/contacts" className='nav-item'><b>Contacts</b></Link>
      
// //             {/* <Link to="/ImageUploader" className='nav-item'><b>Image</b></Link> */}
// //             <div className="dropdown" onClick={toggleDropdown}>
// //               <span className="dropdown-toggle">{isDropdownOpen ? 'Health Advice ▽' : 'Health Advice ▼'}</span>
// //               {isDropdownOpen && (
// //                 <div className="dropdown-content" onClick={closeDropdown}>
// //                   <Link to="/health-advice" className='nav-item'><b>General info</b></Link>
// //                   <Link to="/article" className='nav-item'><b>heart attack</b></Link>
// //                   <Link to="/health-advice" className='nav-item'><b>kidney failure</b></Link>
// //                   <Link to="/health-advice" className='nav-item'><b>liver problem</b></Link>
// //                   <Link to="/health-advice" className='nav-item'><b>stomach issues</b></Link>
                
// //                 </div>
       
// //       )}
// //     </div>

// //             <Link to="/login_auth" ><b><img className='nav-author' src={author} height='40' width='40' /></b></Link>
// //             </nav>
// //           </ul>
// //         </div>

// //         <div>
// //           <b>
// //             <p className='ptext'> <h1 className='ptext-h1'> Professor Doctor Hama Najem Jaff</h1>
// //             Deploy and manage applications in an OpenShift environment.
// //             Collaborate with development teams to streamline the CI/CD
// //             pipeline.Monitor and troubleshoot the OpenShift cluster,
// //             ensuring high availability.Implement and maintain automation
// //             scripts for infrastructure as code.Manage container images and
// //             repositories.Ensure security best practices are followed in the
// //             OpenShift environment.Work with cloud providers (AWS, Azure, or GCP)
// //             to integrate OpenShift with cloud services.
// //             </p>
// //           </b>
// //           <b>
// //             <p className='ptext'>
// //               <img className='hama' width="300" height='300' src={hama} alt="Hama" />
// //             </p>
// //           </b>
// //           <b>
// //             <p className='ptext'>
// //               <img className='career' width="270" src={career} alt="Career" data-aos="fade-up" />
// //             </p>
// //           </b>
// //           <b className=''>
// //             <p className='ptext'>  <h1 className='ptext-h1'>Career In Health</h1>
// //               <ul className=''>
// //                 <li>Doctor</li>
// //                 <li>Member of Iraq Doctors Union</li>
// //                 <li>Member of Kurdistan Doctors Union</li>
// //                 <li>Researcher</li>
// //                 <li>Medical Author</li>
// //               </ul>
// //             </p>
// //           </b>
// //           <b>
// //             <p className='ptext5'>  <h1> My Experience In Popular Technologies </h1>
// //               {/* Add your experience here */}
// //             </p>
// //           </b>
// //           <Publisher />
// //         </div>
// //       </header>
// //     </div>
// //   );
// // }

// // export default Home;




// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css';
// import home from '../assets/images/home.jpg';
// import hama from '../assets/images/hama.jpg';
// import career from '../assets/images/career.jpg';
// import author from '../assets/images/author.jpg';
// import Publisher from './Publisher';
// import Clock from './Clock';

// function Home() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   useEffect(() => {
//     if (!localStorage.getItem('userID')) {
//       navigate('/');
//     }
//   }, [navigate]);

//   return (
//     <>
//          <div className='app-header'>
//         <ul>
//           <nav className='navbar'>
//             <Link to="/home"><b><img className='nav-home' src={home} height='25' width='25' alt="Home" /></b></Link>
//             <Link to="/research" className='nav-item'><b>Research</b></Link>
//             <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
//             <Link to="/article" className='nav-item'><b>Article</b></Link>
//             <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>
//             <Link to="/contacts" className='nav-item'><b>Contacts</b></Link>
//             <div className="dropdown" onClick={toggleDropdown}>
//               <span className="dropdown-toggle">{isDropdownOpen ? 'Health Advice ▽' : 'Health Advice ▼'}</span>
//               {isDropdownOpen && (
//                 <div className="dropdown-content" onClick={closeDropdown}>
//                   <Link to="/health-advice" className='nav-item'><b>General info</b></Link>
//                   <Link to="/article" className='nav-item'><b>heart attack</b></Link>
//                   <Link to="/health-advice" className='nav-item'><b>kidney failure</b></Link>
//                   <Link to="/health-advice" className='nav-item'><b>liver problem</b></Link>
//                   <Link to="/health-advice" className='nav-item'><b>stomach issues</b></Link>
//                 </div>
//               )}
//             </div>
//             <Link to="/login_auth" ><b><img className='nav-author' src={author} height='25' width='25' alt="Author" /></b></Link>
//           </nav>
        
//         </ul>
     
        

    

      

// {/* <div>
   
      
       

        

//         <b>
//           <p className='ptext'>
            // <h1 className='ptext-h1'> Professor Doctor Hama Najem Jaff</h1>
            // Deploy and manage applications in an OpenShift environment.
            // Collaborate with development teams to streamline the CI/CD
            // pipeline.Monitor and troubleshoot the OpenShift cluster,
            // ensuring high availability.Implement and maintain automation
            // scripts for infrastructure as code.Manage container images and
            // repositories.Ensure security best practices are followed in the
            // OpenShift environment.Work with cloud providers (AWS, Azure, or GCP)
            // to integrate OpenShift with cloud services.
//           </p>
//         </b>
        
        
// </div>

{/* <div className='career-ul'>
               
            
            <p className='career-ul'>
            <h1 className='career-h1'>Career In Health</h1>
            <ul className=''>
              <li>Doctor</li>
              <li>Member of Iraq Doctors Union</li>
              <li>Member of Kurdistan Doctors Union</li>
              <li>Researcher</li>
              <li>Medical Author</li>
            </ul>
          </p>
                 
</div> */}
//         */}
      

//        <div>
//        <img src={hama} alt="hama" className="banner-image" />
//       </div>



//       {/* Main Content */}
//       <main className="main-content">
//         <section className="section">
//           <h2>About Us</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p>
//           <Link to="/about" className="btn">Learn More</Link>
//         </section>

//         <section className="section">
//           <h2>Our Services</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p>
//           <Link to="/services" className="btn">View Services</Link>
//         </section>

//         <section className="section">
//           <h2>Contact Us</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit nec justo finibus volutpat.</p>
//           <Link to="/contact" className="btn">Contact Now</Link>
//         </section>
//       </main>








//         {/* <Publisher /> */}
      
//       </div> 
      
//     </>
//   );
// }

// export default Home;








