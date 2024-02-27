import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/images/home.jpg';
import heartattack from '../assets/images/heartattack.jpg';
import heartbeat from '../assets/images/heartbeat.jpg';
import Publisher from './Publisher';

function Article() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
   
     <>

     <div className='app-header'> 

      <ul>
        <nav className='navbar'>
          <Link to="/home"><b> <img className='nav-home' src={home} height='25' width='25' /> </b></Link>
          <Link to="/research" className='nav-item'><b>Research</b></Link>  
          <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
          <Link to="/article" className='nav-item'><b>Article</b></Link> 
          <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>  
        </nav>
      </ul>

      <div>
        <b>
          <p className='ptext'> <h1 className='ptext-h1'> Understanding Heart Attacks</h1>
            A heart attack, or myocardial infarction, occurs when
            the blood flow to a part of the heart muscle becomes blocked.
            This blockage can be caused by a buildup of cholesterol, fat
            and other substances, forming a plaque in the coronary arteries.
            Symptoms of a heart attack may include chest pain, shortness of breath,
            fatigue, and discomfort in the upper body. If you suspect a heart attack,
            seek emergency medical attention immediately.
          </p>
          <p className='ptext'>
            <img className='heartattack' width="400" height='400' src={heartattack} />
          </p>
        </b>

        <b>
          <p className='ptext'>
            <img className='career' width="270" src={heartbeat} data-aos="fade-up" />
          </p>
        </b>

        <b>
          <p className='ptext'>  <h1 className='ptext-h1'>Causes and Risk Factors</h1>
            <ul>
              <li>High blood pressure</li>
              <li>High cholesterol levels</li>
              <li>Smoking</li>
              <li>Obesity</li> 
              <li>Diabetes</li>
              <li>Family history of heart disease</li>
            </ul>
          </p>
        </b> 

        <div>  
          <b>
            <p className='Prevention'>  <h1 className='ptext-h1'>Prevention</h1>
              <p>
                Adopting a healthy lifestyle can significantly reduce the risk of heart
                attacks. This includes maintaining a balanced diet, engaging in regular 
                physical activity, managing stress, and avoiding smoking and excessive alcohol consumption.
                Immediate medical intervention is crucial in treating a heart attack. Treatment may involve medications,
                lifestyle changes, and, in severe cases, surgical procedures such as angioplasty or bypass surgery.
                It's important to attend regular check-ups with a healthcare professional to monitor and manage cardiovascular health.
              </p>
            </p>
          </b>   

          <b>
            <p className='ptext'>
            </p>
          </b>
        </div>

        <Publisher />
      </div>
      {/* </header> */}
    </div> 
    </>
  );
}

export default Article;
