
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import home from '../assets/images/home.jpg';
import Publisher from './Publisher';
import like from '../assets/images/like.jpg'


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogList = () => {



  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blogs'); // https://server-kthc.onrender.com/api/blogs
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`/api/blogs/${postId}/like`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to like the post');
      }
      // Update the posts array with the updated like count
      const updatedPosts = posts.map(post => {
        if (post._id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return  <p className='loading-ani-server'></p>
    // <p>Loading...</p>;
  }

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

          </nav>
        </ul>
   
      

        <div className="blog-list">
          <h1>Blog Posts</h1>
        
          <div className="blog-cards">    
            {posts.map((post) => (
              <div key={post._id} className="blog-card">


                <div className="like-section">
                  {/* <button onClick={() => handleLike(post._id)}>Like</button> */}

                  <p>{post.likes} Likes</p>
                  <button className='like' onClick={() => handleLike(post._id)}> <img className='like' src={like} height='65' width='65' alt="Home" /></button> 
           
                </div>
                <h2>{post.title}</h2>





                <p className="blog-content">{post.content}</p>
                <div className="blog-meta">
                  <p className="blog-author">Author: {post.author}</p>
                  <p className="blog-date">Date: {formatDate(post.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
          <Publisher />
        </div>

        </div>

   </>
  );
};

export default BlogList;





