import React, { useState, useRef, useEffect } from 'react';

const PingPong = () => {
  const [ballPosition, setBallPosition] = useState({ x: 400, y: 250 });
  const [leftPaddlePosition, setLeftPaddlePosition] = useState(200);
  const [rightPaddlePosition, setRightPaddlePosition] = useState(200);
  const [score, setScore] = useState({ left: 0, right: 0 });
  const [direction, setDirection] = useState(
    Math.random() < 0.5 ? 'left' : 'right'
  );
  const ballRef = useRef(null);
  const leftPaddleRef = useRef(null);
  const rightPaddleRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'w' && leftPaddlePosition > 0) {
        setLeftPaddlePosition((position) => position - 10);
      } else if (event.key === 's' && leftPaddlePosition < 400) {
        setLeftPaddlePosition((position) => position + 10);
      } else if (event.key === 'ArrowUp' && rightPaddlePosition > 0) {
        setRightPaddlePosition((position) => position - 10);
      } else if (event.key === 'ArrowDown' && rightPaddlePosition < 400) {
        setRightPaddlePosition((position) => position + 10);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [leftPaddlePosition, rightPaddlePosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition((position) => {
        let x = position.x;
        let y = position.y;

        if (direction === 'left') {
          x -= 5;
        } else {
          x += 5;
        }

        if (y < 0 || y > 480) {
          direction === 'left'
            ? setScore((score) => ({ ...score, right: score.right + 1 }))
            : setScore((score) => ({ ...score, left: score.left + 1 }));
          x = 400;
          y = 250;
          setDirection(Math.random() < 0.5 ? 'left' : 'right');
        }

        if (
          (x < 20 &&
            y >= leftPaddlePosition &&
            y <= leftPaddlePosition + 100) ||
          (x > 770 &&
            y >= rightPaddlePosition &&
            y <= rightPaddlePosition + 100)
        ) {
          direction = direction === 'left' ? 'right' : 'left';
        }

        return { x, y };
      });
    }, 25);

    return () => {
      clearInterval(interval);
    };
  }, [leftPaddlePosition, rightPaddlePosition, direction]);

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
        ref={ballRef}
        style={{
          position: 'absolute',
          top: ballPosition.y,
          left: ballPosition.x,
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: 'red',
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
            backgroundColor: 'green',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
          }}
        >
          <p>Left: {score.left}</p>
          <p>Right: {score.right}</p>
        </div>
      </div>
    );
  };
  
  export default PingPong;
  
