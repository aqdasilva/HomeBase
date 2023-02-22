import React, { useState, useRef, useEffect } from 'react';

//notes: need paddles to go all the way down and up, and when ball hits side of the screen game over

const PingPong = () => {
    const [ballPosition, setBallPosition] = useState({ x: 400, y: 250 });
    const [leftPaddlePosition, setLeftPaddlePosition] = useState(200);
    const [rightPaddlePosition, setRightPaddlePosition] = useState(200);
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
        } else if (event.key === "s" && leftPaddlePosition < 400) {
          setLeftPaddlePosition((position) => position + 10);
        } else if (event.key === "ArrowUp" && rightPaddlePosition > 0) {
          setRightPaddlePosition((position) => position - 10);
        } else if (event.key === "ArrowDown" && rightPaddlePosition < 400) {
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
        setBallVelocity({ ...ballVelocity, x: -ballVelocity.x });
      } else if (
        ballPosition.x > window.innerWidth - 40 &&
        ballPosition.y > rightPaddlePosition &&
        ballPosition.y < rightPaddlePosition + 100
      ) {
        // Ball collided with the right paddle
        setBallVelocity({ ...ballVelocity, x: -ballVelocity.x });
      }
  
      return () => cancelAnimationFrame(animationFrameId);
    }, [ballPosition, ballVelocity, leftPaddlePosition, rightPaddlePosition]);

  return (
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
  );
}

export default PingPong;
