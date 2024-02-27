import '../App.css';

import { Link } from 'react-router-dom';
import React from 'react'; // Import React
import Ptext3 from '../renderdpage/Ptext3';
import covid from '../assets/images/covid.jpg';
import covid1 from '../assets/images/covid1.jpg';
import home from '../assets/images/home.jpg';
import Publisher from './Publisher';

function Research() {
  return (
  <div>
      <div className='app-header'>
        <ul>
          <nav className='navbar'>
            <Link to="/home"><b><img className='nav-home' src={home} alt="home" height='25' width='25' /></b></Link>
            <Link to="/research" className='nav-item'><b>Research</b></Link>
            <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
            <Link to="/article" className='nav-item'><b>Article</b></Link>
            <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>
          </nav>
        </ul>
      

      <div>
        <b>
          <p className='ptext'>
          <h1 className='ptext-h1'>My thoughts about COVID-19</h1>
            Designed and maintained Kubernetes clusters and OpenShift environments
            to ensure high availability and scalability. Managed containerized
            applications across various cloud providers, automating deployment
            and scaling processes. Collaborated with development and operations
            teams to ensure smooth CI/CD pipeline integration and the adoption
            of best practices. Implemented monitoring, logging, and alerting solutions
            to maintain application health and diagnose issues proactively.
            Evaluated security best practices for containerized workloads
           
          </p>
        </b>
        <b>
          <p className='ptext'>
            <img className='covid' width="400" height='400' src={covid} alt="covid" />
          </p>
        </b>

        <b>
          <p className='ptext'>
            <img className='covid1' width="400" src={covid1} alt="covid1" />
          </p>
        </b>

        <b>
          <p className='ptext'>
            <h1 className='ptext-h1'>New coronavirus variant JN.1</h1>
            as a natural lead-in to additional content. This
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This
          </p>
        </b>
        <Ptext3 />
        <Publisher />
      </div>
    </div>
    </div>
  )
}

export default Research;
