import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@material-ui/core';
import React from 'react'

const Contacts = () => {
  return (
    <div>
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
            Boston, MA (Willing to relocate for the right position)
          </Typography>
          <Typography variant="body3" style={{ fontSize: '36px' }} color="text.secondary">
            Antqdasilva@gmail.com
          </Typography>
          <br />
          <Typography variant="body4" style={{ fontSize: '36px' }} color="text.secondary">
            Discord: Azowr#4520
          </Typography>
          <br />
          <Typography variant="body5" style={{ fontSize: '36px' }} color="text.secondary">
            GitHub: Aqdasilva
          </Typography>
          <br />
          <Typography variant="body6" style={{ fontSize: '36px' }} color="text.secondary">
            Playstation: BiigRedAnt
          </Typography>
          <br />
          <CardActions>
            <Button size="small" color="primary">
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