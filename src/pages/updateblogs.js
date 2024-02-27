
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate} from 'react-router-dom';
// import home from '../assets/images/home.jpg';
// import trash from '../assets/images/trash.jpg';
// import author from '../assets/images/author.jpg'

// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };


// const BlogList = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [modifiedPosts, setModifiedPosts] = useState([]);


//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem('userID')) {
//       navigate('/Login_auth');
//     }
//   }, [navigate]);



//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('/api/blogs');
//         if (!response.data) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = response.data;
//         setPosts(data);
//         setModifiedPosts(data.map((post) => ({ ...post, isEditing: false })));
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleEditToggle = (postId) => {
//     setModifiedPosts((prevPosts) =>
//       prevPosts.map((post) => (post._id === postId ? { ...post, isEditing: !post.isEditing } : post))
//     );
//   };

//   const handleInputChange = (postId, field, value) => {
//     setModifiedPosts((prevPosts) =>
//       prevPosts.map((post) => (post._id === postId ? { ...post, [field]: value } : post))
//     );
//   };

//   const handleSave = async (postId) => {
//     try {
//       const modifiedPost = modifiedPosts.find((post) => post._id === postId);
//       const response = await axios.patch(`/api/blogs/${postId}`, modifiedPost);

//       if (!response.data) {
//         throw new Error('No data received from the server');
//       }

//       const updatedPosts = posts.map((post) =>
//         post._id === postId ? { ...post, ...response.data.data } : post
//       );

//       setPosts(updatedPosts);
//       setModifiedPosts((prevPosts) =>
//         prevPosts.map((post) => (post._id === postId ? { ...post, isEditing: false } : post))
//       );

//       console.log('Post updated successfully:', response.data.message);
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

//   const handleDelete = async (postId) => {
//     try {
//       console.log('Deleting post with ID:', postId);

//       const response = await axios.delete(`/api/blogs/${postId}`);

//       if (!response.data || response.data.status !== 'success') {
//         throw new Error('Failed to delete post');
//       }

//       const updatedPosts = posts.filter((post) => post._id !== postId);

//       setPosts(updatedPosts);
//       setModifiedPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));

//       console.log('Post deleted successfully:', response.data.message);
//     } catch (error) {
//       console.error('Error deleting post:', error.message);
//     }
//   };

//   const confirmDelete = (postId) => {
//     if (window.confirm('Are you sure you want to delete this post?')) {
//       handleDelete(postId);
//     }
//   };

//   if (loading) {
//     return <p className='loading-ani-server'></p>

//     // <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }


//   return (
//     <>
    
//     <div className='app-header'>

    
//         <ul>
//           <nav className='navbar'>
//             <Link to="/home"><b> <img className='nav-home' src={home} height='25' width='25' alt="Home" /> </b></Link>
//             <Link to="/research" className='nav-item'><b>Research</b></Link>  
//             <Link to="/blogs" className='nav-item'><b>Blogs</b></Link>
//             <Link to="/article" className='nav-item'><b>Article</b></Link> 
//             <Link to="/gallery" className='nav-item'><b>Gallery</b></Link>  
//             <Link to="/FormPost " ><b><img className='nav-author' src={author} height='25' width='25' /></b></Link>
//           </nav>
//         </ul>
        
//         <div className="blog-list">
//           <h1>Modified Blog Posts</h1>
//           <div className="blog-cards">
//             {modifiedPosts.map((post) => (
//               <div key={post._id} className="blog-card">

//                 <div className="like-section">
//                   <p>{post.likes} Likes</p>
//                 </div>

//                 <h2>
//                   {post.isEditing ? (
//                     <input
//                       type="text"
//                       value={post.title}
//                       onChange={(e) => handleInputChange(post._id, 'title', e.target.value)}
//                     />
//                   ) : (
//                     post.title
//                   )}
//                 </h2>
//                 <p className="blog-content">
//                   {post.isEditing ? (
//                     <textarea
//                       value={post.content}
//                       onChange={(e) => handleInputChange(post._id, 'content', e.target.value)}
//                     />
//                   ) : (
//                     post.content
//                   )}
//                 </p>
//                 <div className="blog-meta">
//                   <p className="blog-author">
//                     Author:{' '}
//                     {post.isEditing ? (
//                       <input
//                         type="text"
//                         value={post.author}
//                         onChange={(e) => handleInputChange(post._id, 'author', e.target.value)}
//                       />
//                     ) : (
//                       post.author
//                     )}
//                   </p>
//                   <p className="blog-date">Date: {formatDate(post.timestamp)}</p>
//                 </div>
//                 {post.isEditing ? (
//                   <>
//                     <button onClick={() => handleSave(post._id)}>Save</button>
//                     <button className='delete' onClick={() => confirmDelete(post._id)}> <img src={trash} height='40' width='40' /></button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleEditToggle(post._id)}>Edit</button>
//                     <button className='delete' onClick={() => confirmDelete(post._id)}> <img  src={trash} height='40' width='40' /></button>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
     
// </div>
// </>
//   );
// };

// export default BlogList;










import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import home from '../assets/images/home.jpg';
import trash from '../assets/images/trash.jpg';
import author from '../assets/images/author.jpg';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modifiedPosts, setModifiedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('userID')) {
      navigate('/Login_auth');
    }
  }, [navigate]);


  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/home"); // Redirect to home if token is not present
  //   }
  // }, [navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/blogs');
        if (!response.data) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = response.data;
        setPosts(data);
        setModifiedPosts(data.map((post) => ({ ...post, isEditing: false })));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handlePostChange = () => {
      // Reload the page when modifiedPosts state changes
      window.location.reload();
    };

    setModifiedPosts(posts.map((post) => ({ ...post, isEditing: false })));
    return () => {
      // Cleanup function
      setModifiedPosts([]);
    };
  }, [posts]);

  const handleEditToggle = (postId) => {
    setModifiedPosts((prevPosts) =>
      prevPosts.map((post) => (post._id === postId ? { ...post, isEditing: !post.isEditing } : post))
    );
  };

  const handleInputChange = (postId, field, value) => {
    setModifiedPosts((prevPosts) =>
      prevPosts.map((post) => (post._id === postId ? { ...post, [field]: value } : post))
    );
  };

  const handleSave = async (postId) => {
    try {
      const modifiedPost = modifiedPosts.find((post) => post._id === postId);
      const response = await axios.patch(`/api/blogs/${postId}`, modifiedPost);

      if (!response.data) {
        throw new Error('No data received from the server');
      }

      const updatedPosts = posts.map((post) =>
        post._id === postId ? { ...post, ...response.data.data } : post
      );

      setPosts(updatedPosts);
      setModifiedPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? { ...post, isEditing: false } : post))
      );

      console.log('Post updated successfully:', response.data.message);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      console.log('Deleting post with ID:', postId);

      const response = await axios.delete(`/api/blogs/${postId}`);

      if (!response.data || response.data.status !== 'success') {
        throw new Error('Failed to delete post');
      }

      const updatedPosts = posts.filter((post) => post._id !== postId);

      setPosts(updatedPosts);
      setModifiedPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));

      console.log('Post deleted successfully:', response.data.message);
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const confirmDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      handleDelete(postId);
    }
  };

  if (loading) {
    return <p className='loading-ani-server'></p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
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
            <Link to="/FormPost " ><b><img className='nav-author' src={author} height='25' width='25' /></b></Link>
          </nav>
        </ul>
        <div className="blog-list">
          <h1>Modified Blog Posts</h1>
          <div className="blog-cards">
            {modifiedPosts.map((post) => (
              <div key={post._id} className="blog-card">
                <div className="like-section">
                  <p>{post.likes} Likes</p>
                </div>
                <h2>
                  {post.isEditing ? (
                    <input
                      type="text"
                      value={post.title}
                      onChange={(e) => handleInputChange(post._id, 'title', e.target.value)}
                    />
                  ) : (
                    post.title
                  )}
                </h2>
                <p className="blog-content">
                  {post.isEditing ? (
                    <textarea
                      value={post.content}
                      onChange={(e) => handleInputChange(post._id, 'content', e.target.value)}
                    />
                  ) : (
                    post.content
                  )}
                </p>
                <div className="blog-meta">
                  <p className="blog-author">
                    Author:{' '}
                    {post.isEditing ? (
                      <input
                        type="text"
                        value={post.author}
                        onChange={(e) => handleInputChange(post._id, 'author', e.target.value)}
                      />
                    ) : (
                      post.author
                    )}
                  </p>
                  <p className="blog-date">Date: {formatDate(post.timestamp)}</p>
                </div>
                {post.isEditing ? (
                  <>
                    <button onClick={() => handleSave(post._id)}>Save</button>
                    <button className='delete' onClick={() => confirmDelete(post._id)}> <img src={trash} height='40' width='40' /></button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditToggle(post._id)}>Edit</button>
                    <button className='delete' onClick={() => confirmDelete(post._id)}> <img  src={trash} height='40' width='40' /></button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;



