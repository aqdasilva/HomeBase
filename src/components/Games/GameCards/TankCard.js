import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GiTank } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 980,
    height: 250,
    border: '4px solid black',
    padding: theme.spacing(4),
    backgroundColor: '#1c88c7',
  },
}));

function GameLinks({ to, label, ...props }) {
    return (
      <Button component={RouterLink} to={to} {...props}>
        {label}
      </Button>
    );
  }


const TankCard = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tank Wars <GiTank style={{ fontSize: '40px' }}  />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click to go blow stuff up
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <GameLinks onClick={handleClose} to="/tankwars" label="Enter War" />
      </CardActions>
    </Card>
  );
}

export default TankCard;
