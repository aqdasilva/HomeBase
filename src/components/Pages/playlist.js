import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyLoader from '../MyLoader';

const useStyles = makeStyles((theme) => ({
  loader: {
    marginTop: '180px',
    textAlign: 'center',
  }
}));

const Playlist = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

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

    <div  className={classes.App}>
      Playlist
      <iframe src="https://www.youtube.com/watch?v=76jVr9QVBtQ&list=PLRkzzmAU28v1019winvNaXIQ5-wb2aUPE" width="100%" height="600"></iframe>
    </div>
     )}
     </>
  );
}

export default Playlist;
//need to add a youtube api