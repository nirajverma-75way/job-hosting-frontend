import { Box, Typography } from "@mui/material";
import React from "react";
import MotionButton from "./motion-button";
import MotionBlock from "./motion-block";

export default function PostingPamplete() {
  return (
    <MotionBlock>
      <Box
        style={{
          width: "100%",
          margin: "5rem 0",
          height: "22rem",
          backgroundColor: "#4640DE",
          clipPath:
            "polygon(15% 0%, 100% 0%, 100% 80%, 85% 100%, 0% 100%, 0% 20%)",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ alignContent: "end", padding: "20px 0" }}>
          <Typography variant="h2" component="h1" fontWeight={500} color="#fff">
            Start posting
          </Typography>
          <Typography variant="h2" component="h1" fontWeight={500} color="#fff">
            jobs today
          </Typography>
          <Typography
            fontWeight={300}
            sx={{ padding: "1.2rem 0" }}
            color="#fff"
          >
            Start posting jobs for only $10
          </Typography>
          <MotionButton dark={true}>Sign Up for Free</MotionButton>
        </Box>
        <img
          src="/public/Dashboard.svg"
          style={{ placeSelf: "end", height: "17rem" }}
        />
      </Box>
    </MotionBlock>
  );
}
