import React, { useState } from 'react';

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
    <div>
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
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.date.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
