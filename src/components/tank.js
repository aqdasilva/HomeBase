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
      bullet: {
        position: 'absolute',
        top: '-20px',
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
      },
  });



function Tank() {
    const classes = useStyles();

    const [cursorX, setCursorX] = useState(0);
    const [bulletY, setBulletY] = useState(-20);
    const [isShooting, setIsShooting] = useState(false);
  
    const handleMouseMove = (event) => {
    setCursorX(event.clientX);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        setIsShooting(true);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    useEffect(() => {
    let animationFrameId;
    if (isShooting) {
      animationFrameId = requestAnimationFrame(() => {
        setBulletY(bulletY + 5);
      });
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isShooting, bulletY]);

  useEffect(() => {
    if (bulletY >= window.innerHeight) {
      setIsShooting(false);
      setBulletY(-20);
    }
  }, [bulletY]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.tank}   style={{ left: `${cursorX - 50}px` }}>
            </div>
            <div
                className={classes.bullet}
                style={{ top: `${bulletY}px`, left: `${cursorX - 5}px` }}
             />
            <div className={classes.cannon}  style={{ left: `${cursorX - 10}px` }}></div>
        </div>
    ) ;  
}

export default  Tank;