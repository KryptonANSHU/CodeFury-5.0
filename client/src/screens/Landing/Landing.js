import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./none.png";

function Landing() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container sx={{ width: "100vw", height: `calc(100vh - 75px)` }}>
        <Grid item xl={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontWeigh9t: 700,
              fontSize: "50px",
              letterSpacing: "2px",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Confused Which Hospital to Go?",
                  "We will help you decide,",
                  "Search for Any disease or Hospital.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Grid>
        <Grid item xl={6} sx={{ display: "inline", justifyContent: "center" }}>
          <div
            style={{
              height: "80%",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;
