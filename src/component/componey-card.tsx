import {
  Card,
  CardContent,
  Box,
  CardMedia,
  Typography,
  CardActions,
  Chip,
} from "@mui/material";

export default function ComponeyCard({ data }) {
  return (
    <Card
      sx={{ width: { xs: "15rem", sm: "17rem", md: "25rem", lg: "22rem" } }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardMedia
            sx={{ height: 80, width: 80, borderRadius: "50%" }}
            image={data.icon}
            title={data.name}
          />
          <Typography
            color="#4640DE"
            fontWeight={300}
            fontSize={12}
            sx={{
              background: "#F8F8FD",
              height: "fit-content",
              padding: "3px 8px",
            }}
          >
            {data.job + " jobs"}
          </Typography>
        </Box>

        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.bio}
        </Typography>
      </CardContent>
      <CardActions>
        {data.tag.map((d: string, i: number) => (
          <Chip
            label={d}
            color={i === 0 ? "primary" : "warning"}
            variant="outlined"
          />
        ))}
      </CardActions>
    </Card>
  );
}
