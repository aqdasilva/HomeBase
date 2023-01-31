import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        animation: '$move-tank 8s linear infinite',
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
        left: '40px',
        width: '10px',
        height: '30px',
        backgroundColor: 'black',
        animation: '$move-tank 8s linear infinite',
      },
  });



function Tank() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.tank}>
                <div className={classes.star}></div>
            </div>
            <div className={classes.explostion}></div>
            <div className={classes.cannon}></div>
            <div className={classes.bottom}>
                <ul className={classes.wheels}>
                </ul>
            </div>
        </div>
    ) ;  
}

export default  Tank;