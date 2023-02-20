import { Paper } from '@material-ui/core';
import React, { useState } from 'react';
import glassHacker from '../../images/glassHacker.png';

const Blog = () => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: event.target.title.value,
      content: event.target.content.value,
      date: new Date()
    };
    setPosts([...posts, newPost]);
    event.target.reset();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '40px'}}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <img src={glassHacker} alt="Logo" />
      </div>
      <div style={{ width: '80%', maxWidth: '800px' }}>
        <h1>Blog</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input id="title" name="title" type="text" />
          <br />
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" />
          <br />
          <button type="submit">Add Post</button>
        </form>
        {posts.map((post, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
            <div style={{ backgroundColor: "red", width: "20px", height: "20px", borderRadius: "50%", marginRight: "10px" }}></div>
            <div>
              <Paper style={{border: '8px solid black'}}>
                <h2 style={{textDecoration: 'underline'}}>{post.title}</h2>
                <p>{post.content}</p>
                <p>{post.date.toLocaleString()}</p>
              </Paper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
