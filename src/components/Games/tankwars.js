import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Tankwars = () => {
  const classes = useStyles();

  const [tank1, setTank1] = useState({
    id: 1,
    health: 100,
    attack: 10,
    left: 50,
    top: 50,
  });
  const [tank2, setTank2] = useState({
    id: 2,
    health: 100,
    attack: 10,
    left: 500,
    top: 50,
  });

  const [bullets, setBullets] = useState([]);

  const attackHandler = (attacker) => {
    const newBullets = [...bullets, attacker];
    setBullets(newBullets);
  };

  useEffect(() => {
    const handleKeyDown = id => event => {
      let newTank;
      if (id === 1) {
        newTank = { ...tank1 };
      } else {
        newTank = { ...tank2 };
      }
      switch (event.keyCode) {
        case 37:
          newTank.left -= 10;
          newTank.direction = "left";
          break;
        case 38:
          newTank.top -= 10;
          newTank.direction = "up";
          break;
        case 39:
          newTank.left += 10;
          newTank.direction = "right";
          break;
        case 40:
          newTank.top += 10;
          newTank.direction = "down";
          break;
        default:
          break;
      }
      if (id === 1) {
        setTank1(newTank);
      } else {
        setTank2(newTank);
      }
    };

    
    window.addEventListener("keydown", handleKeyDown(1));
    window.addEventListener("keydown", handleKeyDown(2));

    return () => {
      window.removeEventListener("keydown", handleKeyDown(1));
      window.removeEventListener("keydown", handleKeyDown(2));
    };
  }, []);

  useEffect(() => {
    let newTank1 = { ...tank1 };
    let newTank2 = { ...tank2 };

    const updateBullets = () => {
      const newBullets = [...bullets];
      newBullets.forEach((bullet) => {
        if (
          bullet.id === 1 &&
          bullet.left >= newTank2.left &&
          bullet.left <= newTank2.left + 50 &&
          bullet.top >= newTank2.top &&
          bullet.top <= newTank2.top + 50
        ) {
          newTank2.health -= bullet.attack;
          setTank2(newTank2);
        }
        if (
          bullet.id === 2 &&
          bullet.left >= newTank1.left &&
          bullet.left <= newTank1.left + 50 &&
          bullet.top >= newTank1.top &&
          bullet.top <= newTank1.top + 50
        ) {
          newTank1.health -= bullet.attack;
          setTank1(newTank1);
        }
        if (bullet.left > 1000) {
          newBullets.splice(newBullets.indexOf(bullet), 1);
        } else {
          bullet.left += bullet.id === 1 ? 20 : -20;
        }
      });
      setBullets(newBullets);
    };

    const interval = setInterval(updateBullets, 100);

    return () => {
      clearInterval(interval);
    };
  }, [bullets, tank1, tank2]);


  return (
    <div className={classes.root}>
      <Typography className={classes.gameTitle}>Tank Wars</Typography>
      <Grid container spacing={2}>
        <Paper>
          <div className={classes.playerScore1}>Player 1: {tank1.health}</div>
        </Paper>
        <Paper>
          <div className={classes.playerScore2}>Player 2: {tank2.health}</div>
        </Paper>
      </Grid>

      <div className={classes.tanks}>
        <div
          className={classes.tank1}
          style={{ left: tank1.left, top: tank1.top }}
        >
        <div
          style={{
            position: "absolute",
            left: 25 - 5,
            top: 25 - 30,
            width: 10,
            height: 30,
            backgroundColor: "black",
            transform:
              tank1.direction === "right"
                ? "rotate(0deg)"
                : tank1.direction === "left"
                ? "rotate(180deg)"
                : tank1.direction === "down"
                ? "rotate(90deg)"
                : tank1.direction === "up"
                ? "rotate(-90deg)"
                : ""
          }}
        />
        </div>
        <div
          className={classes.tank2}
          style={{ left: tank2.left, top: tank2.top }}
        >
           <div
          style={{
            position: "absolute",
            left: 25 - 5,
            top: 25 - 30,
            width: 10,
            height: 30,
            backgroundColor: "black",
            transform:
              tank2.direction === "right"
                ? "rotate(0deg)"
                : tank2.direction === "left"
                ? "rotate(180deg)"
                : tank2.direction === "down"
                ? "rotate(90deg)"
                : tank2.direction === "up"
                ? "rotate(-90deg)"
                : ""
          }}
        />
      </div>
      {bullets.map((bullet, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: bullet.left,
            top: bullet.top,
            width: 10,
            height: 10,
            backgroundColor: "orange"
          }}
        />
      ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  gameTitle: {
    display: 'inline-block',
    border: '1px solid red',
    padding: '1rem 1rem',
    position: 'fixed',
    top: 0,
    justifyContent: "center",
    fontSize: '80px',
  },
  score: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  playerScore1: {
    display: 'inline-block',
    border: '1px solid red',
    padding: '1rem 1rem',
    position: 'fixed',
    top: 0,
    left: 200,
    fontSize: '40px',
  },
  cannon1: {
    position: 'absolute',
    top: '20px',
    left: '60px',
    width: '10px',
    height: '30px',
    backgroundColor: 'black',
  },
  cannon2: {
    position: 'absolute',
    top: '20px',
    left: '60px',
    width: '10px',
    height: '30px',
    backgroundColor: 'black',
  },
  playerScore2: {
    display: 'inline-block',
    border: '1px solid red',
    padding: '1rem 1rem',
    position: 'fixed',
    top: 0,
    right: 200,
    fontSize: '40px',
  },
  tanks: {
    position: "relative",
    width: "1000px",
    height: "100px",
  },
  tank1: {
    position: "absolute",
    width: "50px",
    height: "50px",
    backgroundColor: "red",
  },
  tank2: {
    position: "absolute",
    width: "50px",
    height: "50px",
    backgroundColor: "blue",
  },
  bullet: {
    position: "absolute",
    width: "10px",
    height: "10px",
    backgroundColor: "orange",
    borderRadius: "50%",
  },
});

export default Tankwars;