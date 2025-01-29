import {
    Divider,
    Box,
    FormControl,
    Select,
    MenuItem,
    FilledInput,
  } from "@mui/material";
  import MotionButton from "./motion-button";
  import SearchIcon from "@material-ui/icons/Search";
  import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
  import MotionBlock from "./motion-block";
  
  export default function SearchBox() {
    return (
      <MotionBlock>
        <Box
          sx={{
            marginTop: "1rem",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "0 1.5rem",
            boxShadow: "0rem 0.375rem 0.4375rem 0.1875rem #80808066",
          }}
        >
          <Box
            sx={{
              width: "100%",
              gap: "0.3125rem",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <SearchIcon
              style={{ fill: "#25324B", fontSize: "2.5rem", fontWeight: 100 }}
            />
            <FilledInput
              sx={{ width: "100%", background: "#fff" }}
              placeholder="Company Name or Keyword"
            />
          </Box>
          <Divider
            sx={{ height: "3rem", alignSelf:"center", borderColor: "#0000005c" }}
            orientation="vertical"
          />
          <Box
            sx={{
              width: "100%",
              gap: "0.5rem",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <FormControl
              variant="standard"
              sx={{
                my: 2,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                background: "#fff",
              }}
            >
              <LocationOnOutlinedIcon
                style={{ fill: "#25324B", fontSize: "2.5rem", fontWeight: 100 }}
              />
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                sx={{ width: "100%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <MotionButton>Search</MotionButton>
        </Box>
      </MotionBlock>
    );
  }
  