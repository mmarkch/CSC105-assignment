import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function MediaCard() {
  return (
    <>
    <Grid container spacing={2} >
    <Grid item sm={6} xs={12}>
    <Card sx={{maxWidth:1000}}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8581dba71835db29/63ffbc8d685d6e1a80585317/garnacho-arms.jpg?quality=60&format=pjpg&auto=webp&width=1000"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Alejandro Garnacho
        </Typography>
        <Typography variant="body2" color="text.secondary">
        is a professional footballer who plays as a winger for Premier League club Manchester United. Garnacho joined United's youth system from Atlético Madrid in October 2020. He won the FA Youth Cup and the Jimmy Murphy Young Player of the Year award in May 2022. The month prior, he had made his first-team debut at the age of 17.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item md={6} sm={6} xs={12}>
    <Card sx={{maxWidth:1000}}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt70405c85c02bce6b/640af8f9a1b49031bd09d396/GOAL_-_Blank_WEB_-_Facebook.jpg?quality=60&format=pjpg&auto=webp&width=1000"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Marcus Rashford
        </Typography>
        <Typography variant="body2" color="text.secondary">
        is an English professional footballer who plays as a forward for Premier League club Manchester United and the England national team. Considered one of the best forwards in the world, he is known for his attacking, dribbling, composure, and athleticism.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item md={6} sm={6} xs={12}>
    <Card sx={{maxWidth:1000}}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://i.guim.co.uk/img/media/7947a424a20ad696d5567b6c8b6c0e3c73cd7c3f/0_247_5067_3040/master/5067.jpg?width=965&quality=45&dpr=2&s=none"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Carlos Henrique Casimiro
        </Typography>
        <Typography variant="body2" color="text.secondary">
        known as Casemiro, is a Brazilian professional footballer who plays as a defensive midfielder for Premier League club Manchester United and captains the Brazil national team. He is regarded as one of the best defensive midfielders of his generation
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </>
  );
}
