import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  square: {
    width: "100px",
    height: "100px",
    display: "inline-block",
    position: "relative",
    margin: "10px auto",
  },
  redSquare: {
    backgroundColor: "red",
  },
  blueSquare: {
    backgroundColor: "blue",
  },
}));

const Tank = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">Tank {props.id}</Typography>
      <Typography>Health: {props.health}</Typography>
      <Typography>Attack: {props.attack}</Typography>
      <Button variant="contained" color="primary" onClick={props.attackHandler}>
        Attack
      </Button>
      <div
        className={`${classes.square} ${
          props.id === 1 ? classes.redSquare : classes.blueSquare
        }`}
        style={{ left: `${props.left}px`, top: `${props.top}px` }}
      ></div>
    </Paper>
  );
};

const Tankwars = () => {
  const classes = useStyles();
  const [tank1, setTank1] = useState({
    id: 1,
    health: 100,
    attack: 10,
    left: 0,
    top: 0,
  });
  const [tank2, setTank2] = useState({
    id: 2,
    health: 100,
    attack: 10,
    left: 0,
    top: 0,
  });

  const attackHandler = (attacker, defender) => {
    let newDefender = { ...defender };
    newDefender.health -= attacker.attack;
    if (attacker.id === 1) {
      setTank2(newDefender);
    } else {
      setTank1(newDefender);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      let newTank1 = { ...tank1 };
      let newTank2 = { ...tank2 };
      if (e.key === "ArrowLeft") {
        newTank1.left -= 10;
        setTank1(newTank1);
      }
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
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Tank
            id={tank1.id}
            health={tank1.health}
            attack={tank1.attack}
            left={tank1.left}
            top={tank1.top}
            attackHandler={() => attackHandler(tank1, tank2)}
          />
        </Grid>
        <Grid item xs={6}>
          <Tank
            id={tank2.id}
            health={tank2.health}
            attack={tank2.attack}
            left={tank2.left}
            top={tank2.top}
            attackHandler={() => attackHandler(tank2, tank1)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Tankwars;
