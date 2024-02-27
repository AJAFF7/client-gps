
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Clock from './Clock';
import { Link, useNavigate } from 'react-router-dom';
import home from '../assets/images/home.jpg';
import author from '../assets/images/author.jpg';

function Newses() {
  return (
    <div>
      <News />
    </div>
  );
}

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem('userID')) {
  //     navigate('/Login_auth');
  //   }
  // }, [navigate]);

   useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/home"); // Redirect to home if token is not present
    }
  }, [navigate]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // Change country as needed
            apiKey: 'fa77e80f65a4493cb91cd02ff6c8225f', // Replace with your NewsAPI key
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className='app-header'>
        <ul>
          <nav className='navbar'>
            <Link to="/home"><b> <img className='nav-home' src={home} height='25' width='25' alt="Home" /> </b></Link>
            <Link to="/research" className='nav-item'><b>Research</b></Link>
            <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
            <Link to="/article" className='nav-item'><b>Article</b></Link>
            <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>
            <Link to="/FormPost " ><b><img className='nav-author' src={author} height='25' width='25' /></b></Link>
          </nav>
        </ul>
        <Clock />
      
   
      <div className="news-container">
        
        <h1 className="news-heading">Latest News</h1>
        <div className="news-grid">
          {news.map((article, index) => (
            <div className="news-item" key={index}>
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <a className="news-link" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default News;
