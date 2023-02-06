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
    const [left, setLeft] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [direction, setDirection] = useState(1);
    const [right, setRight] = useState(window.innerWidth);



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

  useEffect(() => {
    setRight(window.innerWidth);
    const interval = setInterval(() => {
      setLeft(prevLeft => {
        if (prevLeft >= right - 50) {
            setDirection(-1);
          } else if (prevLeft <= 0) {
            setDirection(1);
          }
          return prevLeft + 10 * direction;
        });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  
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
              style={{ position: "fixed", left: `${left}px`,bottom: `${bottom}px`,
               width:  "50px", height: "50px", backgroundColor: "blue" }}
          />
          {isGameOver && <div className={classes.gameOver}>Game Over</div>}
      </div>
  );
  }
  
  export default  Tank;