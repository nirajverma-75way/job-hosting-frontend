import { Box, Theme, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { createStyles } from "@mui/styles";
import Header from "../component/header";
import Footer from "../component/footer";

const useStyle = (theme: Theme) => createStyles({
  root: {
    backgroundColor: "white",
    height: '100vh',
    width: '100vw',
  },
});

const Basic = () => {
  const theme = useTheme();
  const styles = useStyle(theme);
  return (
    <Box sx={styles.root}>
      <Header />
   <Outlet /> 
    <Footer />
      
    </Box>
  );
};

export default Basic;
