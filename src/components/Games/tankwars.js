import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MyLoader from "../MyLoader";


const Tankwars = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

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
    const handleKeyDown = (e) => {
      let newTank1 = { ...tank1 };
      let newTank2 = { ...tank2 };
      if (e.key === "ArrowLeft") {
        newTank1.left -= 10;
        setTank1(newTank1);
      }
      if (e.key === "ArrowRight") {
        newTank1.left += 10;
        setTank1(newTank1);
      }
      if (e.key === "ArrowUp") {
        newTank1.top -= 10;
        setTank1(newTank1);
      }
      if (e.key === "ArrowDown") {
        newTank1.top += 10;
        setTank1(newTank1);
      }
      if (e.key === "a") {
        newTank2.left -= 10;
        setTank2(newTank2);
      }
      if (e.key === "d") {
        newTank2.left += 10;
        setTank2(newTank2);
      }
      if (e.key === "w") {
        newTank2.top -= 10;
        setTank2(newTank2);
      }
      if (e.key === "s") {
        newTank2.top += 10;
        setTank2(newTank2);
      }
      if (e.key === " ") {
        attackHandler(newTank1);
      }
      if (e.key === "Enter") {
        attackHandler(newTank2);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

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
    <div className={classes.root}>
      <Typography className={classes.gameTitle}>Tank Wars</Typography>
      <div className={classes.field}>
        <Grid container spacing={2}>
          <Paper>
            <div className={classes.playerScore1}>Player 1: {tank1.health}</div>
          </Paper>
          <Paper>
             <div className={classes.playerScore2}>Player 2: {tank2.health}</div>
          </Paper>
        </Grid>
      </div>
      <div className={classes.tanks}>
        <div
          className={classes.tank1}
          style={{ left: tank1.left, top: tank1.top }}
        />
        <div
          className={classes.tank2}
          style={{ left: tank2.left, top: tank2.top }}
        />
        {bullets.map((bullet, index) => (
          <div
            key={index}
            className={classes.bullet}
            style={{ left: bullet.left, top: bullet.top }}
          />
        ))}
      </div>
    </div>
     )}
     </>
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
  score: {
    display: "flex",
    justifyContent: "center",
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
  playerScore1: {
        display: 'inline-block',
        border: '1px solid red',
        padding: '1rem 1rem',
        position: 'fixed',
        top: 0,
        left: 200,
        fontSize: '40px',
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
  gameTitle: {
        display: 'inline-block',
        border: '1px solid red',
        padding: '1rem 1rem',
        position: 'fixed',
        top: 0,
        justifyContent: "center",
        fontSize: '80px',
      },
 field: {
        position: "absolute",
        width: 2600,
        height: 900,
        backgroundColor: "green",
      },
      loader: {
        marginTop: '180px',
        textAlign: 'center',
      },
});

export default Tankwars;