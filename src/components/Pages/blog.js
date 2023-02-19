import React, { useState } from 'react';

const Blog = () => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (postContent.trim() !== '') {
      const newPost = {
        content: postContent.trim(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      };
      setPosts([...posts, newPost]);
      setPostContent('');
    }
  };

  return (
    <div>
      <h1>Updates</h1>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={postContent}
          onChange={(event) => setPostContent(event.target.value)}
          placeholder="Enter your blog post here..."
        />
        <button type="submit">Post</button>
      </form>
      <hr />
      <h2>Previous Posts:</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <div>{post.content}</div>
            <div>Posted on {post.date} at {post.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
