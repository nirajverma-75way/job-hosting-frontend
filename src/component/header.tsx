import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  logo: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  typoHover: {
    fontWeight: "700",
    "&:hover": {
      fontWeight: "300",
      cursor: "pointer",
      scale: "1.02",
      transition: "all 0.2s ease-in-out",
    },
  },
  logoText: {
    fontWeight: "700",
    marginLeft: 8,
    fontSize: "1.5rem",
  },
  navLinks: {
    marginLeft: "auto",
    display: "flex",
    gap: 20,
  },
});

const Header: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box className={classes.logo}>
          <img src="/public/logo.svg" alt="JobHuntly" width={30} height={30} />
          <Typography variant="h6" className={classes.logoText} ml={1}>
            JobHuntly
          </Typography>
          <Box
            display={"flex"}
            gap={"1rem"}
            ml={"2rem"}
            fontWeight={"500"}
            fontSize={"1rem"}
          >
            <Typography className={classes.typoHover}>Find Jobs</Typography>
            <Typography className={classes.typoHover}>
              Browse Companies
            </Typography>
          </Box>
        </Box>
        <Box className={classes.navLinks}>
          <Button color="inherit">Login</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                scale: "1.02",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
