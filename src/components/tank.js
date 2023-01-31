import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    bottom: {
        width: '100%',
        height: '10px',
        backgroundColor: '#199c1d',
    },
    tank: {
        position: 'absolute',
        top: '-20px',
        width: '100px',
        height: '50px',
        backgroundColor: 'gray',
      },
      '@keyframes move-tank': {
        '0%': {
          transform: 'translateX(0%)',
        },
        '100%': {
          transform: 'translateX(1800px)',
        },
      },
      cannon: {
        position: 'absolute',
        top: '20px',
        left: '60px',
        width: '10px',
        height: '30px',
        backgroundColor: 'black',
      },
  });



function Tank() {
    const classes = useStyles();

    const [cursorX, setCursorX] = useState(0);
  
    const handleMouseMove = (event) => {
    setCursorX(event.clientX);
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

    return (
        <div className={classes.wrapper}>
            <div className={classes.tank}  style={{ left: `${cursorX - 50}px` }}>
                <div className={classes.star}></div>
            </div>
            <div className={classes.explostion}></div>
            <div className={classes.cannon}  style={{ left: `${cursorX - 10}px` }}></div>
            <div className={classes.bottom}>
                <ul className={classes.wheels}>
                </ul>
            </div>
        </div>
    ) ;  
}

export default  Tank;