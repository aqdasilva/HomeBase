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
        top: '0%',
        left: '0%',
        transform: 'translate(-50%, -50%)',
        width: '150px',
        height: 'auto',
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
            <div className={classes.middle}></div>
            <div className={classes.bottom}>
                <ul className={classes.wheels}>
                </ul>
            </div>
        </div>
    ) ;  
}

export default  Tank;