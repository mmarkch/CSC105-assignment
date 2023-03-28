import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MediaCard from "./MediaCard";

function Content() {
  return (
    <>
      <Grid >
        <h1>Manchester United</h1>
        <p>
        FOUNDED IN 1878 AS NEWTON HEATH L&YR FOOTBALL CLUB, OUR CLUB HAS OPERATED FOR OVER 140 YEARS. THE TEAM FIRST ENTERED THE ENGLISH FIRST DIVISION, THEN THE HIGHEST LEAGUE IN ENGLISH FOOTBALL, FOR THE START OF THE 1892-93 SEASON. OUR CLUB NAME CHANGED TO MANCHESTER UNITED FOOTBALL CLUB IN 1902, AND WE WON THE FIRST OF OUR 20 ENGLISH LEAGUE TITLES IN 1908. IN 1910, WE MOVED TO OLD TRAFFORD, OUR CURRENT STADIUM.
        </p>
      </Grid>
      <Grid>
        <MediaCard />
      </Grid>
      {/* </Grid> */}
    </>
  );
}

export default Content;