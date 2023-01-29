import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  }));



function Tank() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <div className={classes.star}></div>
            </div>
            <div className={classes.explostion}></div>
            <div className={classes.middle}></div>
            <div className={classes.bottom}>
                <ul className={classes.wheels}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    ) ;  
}

export default  Tank;