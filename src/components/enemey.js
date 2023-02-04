import React, { useState, useEffect } from "react";

function Enemey() {
  const [left, setLeft] = useState(0);
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeft(prevLeft => prevLeft + 10);

      if (left > window.innerWidth - 50) {
        setLeft(0);
      }
    }, 100);
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
