import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Rightbar() {
  return (
    <Box display={{xs: "none", md:"block"}}>
      <Box display="flex" flexDirection="column">   
        <ImageList cols={2} rowHeight={250} >
          <ImageListItem>
            <img src="https://i2-prod.mirror.co.uk/incoming/article29300937.ece/ALTERNATES/s1200d/0_Manchester-United-v-FC-Barcelona-Knockout-Round-Play-Off-Leg-Two-UEFA-Europa-League.jpg" alt="Image 1" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt27a385d0b2b0d9e7/6409ee17d092762976c52e13/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-09T143230.837.png" alt="Image 2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i2-prod.football.london/incoming/article26433503.ece/ALTERNATES/s810/0_GettyImages-1247533725.jpg" alt="Image 3" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article26536821.ece/ALTERNATES/s810/0_eriksen.jpg" alt="Image 4" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );    
}

export default Rightbar;