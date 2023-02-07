import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@material-ui/core';
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { FaDiscord, FaPlaystation,} from "react-icons/fa";
import html2canvas from 'html2canvas';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
});

const Contacts = () => {
  const cardRef = useRef(null);

  const handleSave = async () => {
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.download = 'card.pdf';
    link.href = canvas.toDataURL('application/pdf');
    link.click();
  };


  return (
    <div ref={cardRef}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          src="https://i.ibb.co/qMqz8vy/red-knight.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{ fontSize: '63px' }} component="div">
            My Contact Information
          </Typography>
          <Typography variant="subtitle1" style={{ fontSize: '45px' }} color="text.secondary">
            Boston, MA
          </Typography>
          <GoogleIcon style={{ width: '40px', height: '40px' }} className={classNames.icon}/>
          <Typography variant="body3" style={{ fontSize: '36px', color:'blue' }} color="text.secondary">
            Antqdasilva@gmail.com
          </Typography>
          <br />
          <FaDiscord style={{ width: '40px', height: '40px' }} className={classNames.icon} />        
          <Typography variant="body4" style={{ fontSize: '36px', color: 'purple' }} color="text.secondary">
             Discord: Azowr#4520
          </Typography>
          <br />
          <GitHubIcon style={{ width: '40px', height: '40px' }} className={classNames.icon}/>
          <Typography variant="body5" style={{ fontSize: '36px' }} color="text.secondary">
            GitHub: Aqdasilva
          </Typography>
          <br />
          <FaPlaystation style={{ width: '40px', height: '40px' }} className={classNames.icon} />
          <Typography variant="body6" style={{ fontSize: '36px' }} color="text.secondary">
            Playstation: BiigRedAnt
          </Typography>
          <br />
          <CardActions>
            <Button onClick={handleSave} size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </CardContent>
       </CardActionArea>
      </Card>

    </div>
  )
}

export default Contacts;