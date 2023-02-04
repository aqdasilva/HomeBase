import React, { useState, useEffect } from "react";

function Enemey() {
  const [left, setLeft] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [direction, setDirection] = useState(1);
  const [right, setRight] = useState(window.innerWidth);

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
    <div
      style={{
        position: "fixed",
        left: `${left}px`,
        bottom: `${bottom}px`,
        width: "50px",
        height: "50px",
        backgroundColor: "red"
      }}
    />
  );
}

export default Enemey;
