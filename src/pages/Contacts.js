import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/images/home.jpg';
import emailjs from 'emailjs-com';
import Clock from './Clock';

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        window.alert("Message is Sent");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='app-header'>
      <ul>
        <nav className='navbar'>
          <Link to="/home"><img className='nav-home' src={home} alt='Home' /></Link>
          <Link to="/research" className='nav-item'>Research</Link>
          <Link to="/blogs" className='nav-item'>Blogs</Link>
          <Link to="/article" className='nav-item'>Article</Link>
          <Link to="/gallery" className='nav-item'>Gallery</Link>
        </nav>
      </ul>
      
      <Clock />
     
      <div>
        <form className="formi" ref={form} onSubmit={sendEmail}>
          <h3>Contact Me</h3>
          <label className='label'>Name</label>
          <input className='input' type="text" name="name" />
          <label className='label'>Email</label>
          <input className='input' type="email" name="email" />
          <label className='label'>Message</label>
          <textarea className='input' name="message" />
          <input className='submi' type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contacts;
