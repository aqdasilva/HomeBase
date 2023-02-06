import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useScroll } from 'framer-motion';
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
      square: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        animation: '$move-square 2s ease-in-out infinite alternate',
    },
    '@keyframes move-square': {
        '0%': {
            transform: 'translateX(0%)',
        },
        '100%': {
            transform: 'translateX(90%)',
        },
      }
  });

  function Tank() {
    const classes = useStyles();

    const [cursorX, setCursorX] = useState(0);
    const [bulletY, setBulletY] = useState(-20);
    const [isShooting, setIsShooting] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [squareX, setSquareX] = useState(0);
    const [ squareY, setSquareY] = useState(0);
    const [squareWidth, setSquareWidth] = useState(false);
    const [ squareHeight, setsquareHeight] = useState(false);


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
  
      if (bulletY >= squareY && bulletY >= squareX && bulletY <= squareX + squareWidth) {
          setIsGameOver(true);
      }
  }, [bulletY, squareY, squareX, squareWidth]);
  
  return (
      <div className={classes.wrapper}>
          <div className={classes.tank} style={{ left: `${cursorX - 50}px` }} />
          <div
              className={classes.bullet}
              style={{ top: `${bulletY}px`, left: `${cursorX - 5}px` }}
          />
          <div className={classes.cannon} style={{ left: `${cursorX - 10}px` }} />
          <div
              className={classes.square}
              style={{ top: `${squareY}px`, left: `${squareX}px`, width: `${squareWidth}px`, height: `${squareHeight}px` }}
          />
          {isGameOver && <div className={classes.gameOver}>Game Over</div>}
      </div>
  );
  }
  
  export default  Tank;