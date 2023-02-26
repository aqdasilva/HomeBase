import React, { useState, useRef, useEffect } from 'react';
import MyLoader from "../MyLoader";
import { makeStyles } from "@material-ui/core/styles";
//notes: add speed everytime the ball is hit by both players

const useStyles = makeStyles({
      loader: {
        marginTop: '180px',
        textAlign: 'center',
      },
});

const PingPong = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [ballPosition, setBallPosition] = useState({ x: 400, y: 250 });
    const [leftPaddlePosition, setLeftPaddlePosition] = useState(200);
    const [rightPaddlePosition, setRightPaddlePosition] = useState(200);
    const [winner, setWinner] = useState("");
    const [ballVelocity, setBallVelocity] = useState({
      x: Math.random() * 4 - 2,
      y: Math.random() * 4 - 2,
    });
    const [score, setScore] = useState({ left: 0, right: 0 });
    const [direction, setDirection] = useState(
      Math.random() < 0.5 ? "left" : "right"
    );
    const ballRef = useRef(null);
    const leftPaddleRef = useRef(null);
    const rightPaddleRef = useRef(null);
  
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === "w" && leftPaddlePosition > 0) {
          setLeftPaddlePosition((position) => position - 10);
        } else if (event.key === "s" && leftPaddlePosition < window.innerHeight - 100) {
          setLeftPaddlePosition((position) => position + 10);
        } else if (event.key === "ArrowUp" && rightPaddlePosition > 0) {
          setRightPaddlePosition((position) => position - 10);
        } else if (event.key === "ArrowDown" && rightPaddlePosition < window.innerHeight - 100) {
          setRightPaddlePosition((position) => position + 10);
        }
      };
  
      document.addEventListener("keydown", handleKeyPress);
  
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [leftPaddlePosition, rightPaddlePosition]);
  
    useEffect(() => {
      // Move the ball
      const animationFrameId = requestAnimationFrame(() => {
        const newBallPosition = {
          x: ballPosition.x + ballVelocity.x,
          y: ballPosition.y + ballVelocity.y,
        };
        setBallPosition(newBallPosition);
      });
    
      // Check for collisions with the walls or paddles
      if (ballPosition.y < 0 || ballPosition.y > window.innerHeight - 20) {
        // Ball collided with the top or bottom walls
        setBallVelocity({ ...ballVelocity, y: -ballVelocity.y });
      } else if (
        ballPosition.x < 20 &&
        ballPosition.y > leftPaddlePosition &&
        ballPosition.y < leftPaddlePosition + 100
      ) {
        // Ball collided with the left paddle
        setBallVelocity({ x: -ballVelocity.x, y: -ballVelocity.y });
        // setScore((prevScore) => ({ ...prevScore, right: prevScore.right + 1 }));
      } else if (
        ballPosition.x > window.innerWidth - 40 &&
        ballPosition.y > rightPaddlePosition &&
        ballPosition.y < rightPaddlePosition + 100
      ) {
        // Ball collided with the right paddle
        setBallVelocity({ x: -ballVelocity.x, y: -ballVelocity.y });
        // setScore((prevScore) => ({ ...prevScore, left: prevScore.left + 1 }));
      } else if (ballPosition.x <= 0) {
        // Ball hit the left side of the screen
        setBallPosition({ x: 400, y: 250 });
        setBallVelocity({
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2,
        });
        setScore((prevScore) => ({ ...prevScore, right: prevScore.right + 1 }));
      } else if (ballPosition.x >= window.innerWidth - 20) {
        // Ball hit the right side of the screen
        setBallPosition({ x: 400, y: 250 });
        setBallVelocity({
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2,
        });
        setScore((prevScore) => ({ ...prevScore, left: prevScore.left + 1 }));
      }
    
      return () => cancelAnimationFrame(animationFrameId);
    }, [ballPosition, ballVelocity, leftPaddlePosition, rightPaddlePosition]);

    useEffect(() => {
      if (score.left === 11) {
        setWinner("left");
      } else if (score.right === 11) {
        setWinner("right");
      }
    },[score]);
  
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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div
        ref={leftPaddleRef}
        style={{
          position: 'absolute',
          top: leftPaddlePosition,
          left: 0,
          width: 20,
          height: 100,
          backgroundColor: 'blue',
        }}
      />
      <div
        ref={rightPaddleRef}
        style={{
          position: 'absolute',
          top: rightPaddlePosition,
          right: 0,
          width: 20,
          height: 100,
          backgroundColor: 'red',
        }}
      />
      <div
        ref={ballRef}
        style={{
          position: 'absolute',
          top: ballPosition.y,
          left: ballPosition.x,
          width: 20,
          height: 20,
          backgroundColor: 'green',
          borderRadius: '50%',
        }}
      />
        <div>
          <p>Left Score: {score.left}</p>
          <p>Right Score: {score.right}</p>
        </div>
      </div>
      )}
    </>
  );
}

export default PingPong;
