import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "/public/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      style={{ backgroundColor: "#202430", color: "#ccc", padding: "40px 0" }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              color="white"
              display="flex"
              alignItems="center"
              gap={1}
              fontWeight={600}
            >
              <img src="/public/logo.svg" /> JobHuntly
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Great platform for the job seeker that is passionate about
              startups. Find your dream job easier.
            </Typography>
          </Grid>
          {/* About Section */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              color="white"
              fontWeight={500}
              gutterBottom
            >
              About
            </Typography>
            {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map(
              (text) => (
                <Typography
                  key={text}
                  variant="body2"
                  component={Link}
                  to="#"
                  sx={{
                    display: "block",
                    color: "#ccc",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {text}
                </Typography>
              )
            )}
          </Grid>
          {/* Resources Section */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              color="white"
              fontWeight={500}
              gutterBottom
            >
              Resources
            </Typography>
            {["Help Docs", "Guide", "Updates", "Contact Us"].map((text) => (
              <Typography
                key={text}
                variant="body2"
                component={Link}
                to="#"
                sx={{
                  display: "block",
                  color: "#ccc",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid>
          {/* Newsletter Section */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              color="white"
              fontWeight={500}
              gutterBottom
            >
              Get job notifications
            </Typography>
            <Typography variant="body2">
              The latest job news, articles, sent to your inbox weekly.
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: 2 }}>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Email Address"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 0,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="contained" sx={{ height: "100%" }}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "#444", marginY: 4 }} />
        {/* Footer Bottom */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            2021 @ JobHuntly. All rights reserved.
          </Typography>
          <Grid
            
            gap={2}
            alignItems="center"
            sx={{ display: "flex"}}
          >
            <Grid item>
              <img src="/public/Facebook.svg" alt="Facebook" />
            </Grid>
            <Grid item>
              <img src="/public/Instagram.svg" alt="Instagram" />
            </Grid>
            <Grid item>
              <img src="/public/Dribbble.svg" alt="Dribbble" />
            </Grid>
            <Grid item>
              <img src="/public/LinkedIn.svg" alt="LinkedIn" />
            </Grid>
            <Grid item>
              <img src="/public/Twitter.svg" alt="Twitter" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
