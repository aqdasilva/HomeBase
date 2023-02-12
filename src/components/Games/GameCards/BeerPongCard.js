import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BiBeer } from "react-icons/bi";

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


const BeerCard = () => {
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
            Beer Pong <BiBeer style={{ fontSize: '40px' }}  />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Enter: Frat Boy Heaven
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <GameLinks onClick={handleClose} to="/beerpong" label="House Rules" />
      </CardActions>
    </Card>
  );
}

export default BeerCard;
