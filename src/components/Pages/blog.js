import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyLoader from '../MyLoader';

const useStyles = makeStyles((theme) => ({
    loader: {
      marginTop: '180px',
      textAlign: 'center',
    }
  }));

const Blog = () => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (postContent.trim() !== '') {
      setPosts([...posts, postContent.trim()]);
      setPostContent('');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    {loading ? (
      <div className={classes.loader}>
        <MyLoader />
      </div>
    ) : (

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
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
     )}
     </>
  );
};

export default Blog;
