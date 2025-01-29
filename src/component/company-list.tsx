import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function CompanyList({ data }) {
  return (
    <Card sx={{ minWidth: "200px", justifyItems: "center" }}>
      <CardContent>
        <CardMedia
          sx={{ height: 80, width: 80 }}
          image={data.icon}
          title={data.name}
        />
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography
          color="#4640DE"
          fontWeight={300}
          fontSize={12}
          sx={{
            background: "#F8F8FD",
            height: "fit-content",
            padding: "3px 8px",
            width: "max-content",
            justifySelf: "center",
          }}
        >
          {data.job + " jobs"}
        </Typography>
      </CardContent>
    </Card>
  );
}
