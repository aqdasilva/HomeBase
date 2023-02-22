import React, { useState, useRef, useEffect } from 'react';

const PingPong = () => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [paddlePosition, setPaddlePosition] = useState(0);
  const [score, setScore] = useState(0);
  const ballRef = useRef(null);
  const paddleRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp') {
        setPaddlePosition((position) => position - 10);
      } else if (event.key === 'ArrowDown') {
        setPaddlePosition((position) => position + 10);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition((position) => ({
        x: position.x + 5,
        y: position.y + 5,
      }));
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const ball = ballRef.current.getBoundingClientRect();
    const paddle = paddleRef.current.getBoundingClientRect();

    if (
      ball.x >= paddle.x &&
      ball.x <= paddle.x + paddle.width &&
      ball.y >= paddle.y &&
      ball.y <= paddle.y + paddle.height
    ) {
      setScore((score) => score + 1);
      setBallPosition({ x: 0, y: 0 });
    }
  }, [ballPosition]);

  return (
    <div>
      <div
        ref={ballRef}
        style={{
          position: 'absolute',
          top: ballPosition.y,
          left: ballPosition.x,
          width: 20,
          height: 20,
          backgroundColor: 'red',
          borderRadius: '50%',
        }}
      />
      <div
        ref={paddleRef}
        style={{
          position: 'absolute',
          top: paddlePosition,
          left: 0,
          width: 20,
          height: 100,
          backgroundColor: 'blue',
        }}
      />
      <div>Score: {score}</div>
    </div>
  );
};

export default PingPong;
