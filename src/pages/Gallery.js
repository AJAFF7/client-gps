

import {  Link } from 'react-router-dom';
// import React, { useEffect} from 'react';
import kurdistan1 from '../assets/images/kurdistan1.jpg'
import kurdistan2 from '../assets/images/kurdistan2.jpg'
import kurdistan3 from '../assets/images/kurdistan3.jpg'
import kurdistan4 from '../assets/images/kurdistan4.jpg'
import kurdistan5 from '../assets/images/kurdistan5.jpg'
import kurdistan6 from '../assets/images/kurdistan6.jpg'
import kurdistan7 from '../assets/images/kurdistan7.jpg'
import home from '../assets/images/home.jpg'
import Publisher from './Publisher';






function Gallery() {


  

  return (
<>

<div className='app-header'>

{/* <header className="App-header"> */}
  
  
        <ul>
           <nav className='navbar'>
          
           {/* <Link to="/home" className='active'><b>Home</b></Link>   */}

           <Link to="/home"><b> <img className='nav-home' src={home} height='25' width='25' alt="Home" /> </b></Link>
            <Link to="/research" className='nav-item'><b>Research</b></Link>  
            <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
            <Link to="/article" className='nav-item'><b>Article</b></Link> 
            <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>  
          
         
           </nav>
        </ul>

        
              
          <div className='allimages'>  
          
              <Link to=""> 
                <img  className='kurdistan1' src={kurdistan1}   alt="kurdistan 1" />
              </Link>
              <Link to=""> 
                <img  className='kurdistan1' src={kurdistan1}   alt="kurdistan 1" />
              </Link>

              <Link to=""> 
                <img className='kurdistan2' src={kurdistan2}  alt="kurdistan 2" />
              </Link>

              <Link to=""> 
                <img className='kurdistan3' src={kurdistan3}   alt="kurdistan 3" /> 
                
              </Link>
              <Link to=""> 
                <img className='kurdistan4' src={kurdistan4}  alt="kurdistan 4" />
                
            
              </Link>
              <Link to=""> 
              <img className='kurdistan5' src={kurdistan5}  alt="kurdistan5" />
            
              </Link>
              <Link to=""> 
                <img className='kurdistan6' src={kurdistan6}  alt="kurdistan6" />
              </Link>

              <Link to=""> 
                <img className='kurdistan7' src={kurdistan7}  alt="kurdistan7" />
              </Link>

             
              
              </div>
     
             
      
              
              
     

     

      </div>
      <Publisher />
      </>
     

      
       
    
       
  )
}

export default Gallery






