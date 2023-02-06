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
          <Typography gutterBottom variant="h5" component="div">
            My Contact Information
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Boston, MA (Willing to relocate for the right position)
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Antqdasilva@gmail.com
          </Typography>
          <br />
          <Typography variant="body4" color="text.secondary">
            Discord: Azowr#4520
          </Typography>
          <br />
          <Typography variant="body5" color="text.secondary">
            GitHub: Aqdasilva
          </Typography>
          <br />
          <Typography variant="body6" color="text.secondary">
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