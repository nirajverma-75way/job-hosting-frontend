import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  FormLabel,
  Typography,
} from "@mui/material";
import SearchBox from "../../component/search-box";
import ComponeyCard from "../../component/componey-card";
import MotionButton from "../../component/motion-button";
import PostingPamplete from "../../component/posting-pamplete";
import CompanyList from "../../component/company-list";
import MotionBlock from "../../component/motion-block";

export default function Company() {
  const recomandedCompanies = [
    {
      name: "Nomad",
      icon: "https://www.svgrepo.com/show/448241/nomad.svg",
      job: 2,
      bio: "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
      tag: ["Bussiness Service"],
    },
    {
      name: "Discord",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-color-icon.png",
      job: 3,
      bio: "We'd love to work with someone like you. We care about creating a delightful experience.",
      tag: ["Bussiness Service"],
    },
    {
      name: "Maze",
      icon: "https://www.datocms-assets.com/38511/1627404461-publisherlogo.jpg",
      job: 3,
      bio: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
      tag: ["Bussiness Service"],
    },
    {
      name: "Udacity",
      icon: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1456467107/nbygauewgh0ezwnbcmcx.png",
      job: 3,
      bio: "Udacity is a new type of online university that teaches the actual programming skills.",
      tag: ["Bussiness Service"],
    },
    {
      name: "Webflow",
      icon: "https://img.icons8.com/color/512/webflow.png",
      job: 3,
      bio: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
      tag: ["Bussiness Service", "Technology"],
    },
    {
      name: "Foundation",
      icon: "https://img.icons8.com/color/512/webflow.png",
      job: 3,
      bio: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
      tag: ["Bussiness Service", "Crypto"],
    },
  ];
  return (
    <Container>
      <MotionBlock>
        <Box component="section" sx={{ placeItems: "center", padding: "60px 0" }}>
          <Box sx={{ display: "flex", padding: "10px 0", flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
            <Typography component="h2" variant="h4">
              Find Your
            </Typography>
            <Box>
            <Typography component="h2" sx={{ color: "#26A4FF" }} variant="h4">
              {" "}
              dream Companies
        
            </Typography>  <img
            src="/public/DreamLine.svg"
            width="20rem"
          />
            </Box>
          </Box>
          <Typography py={2} fontWeight={500}>
            Find dream companies, you dream work for
          </Typography>
          <SearchBox />

          <Typography
            fontWeight={300}
            sx={{ margin: "10px 0", justifySelf: "left" }}
          >
            Popular : Twitter, Microsoft, Apple, Facebook
          </Typography>
        </Box>
      </MotionBlock>

      <MotionBlock>
        <Box sx={{ marginTop: "10rem" }}>
          <Typography variant="h4" fontWeight={500}>
            Recomanded Companies
          </Typography>
          <Typography fontWeight={300}>
            Based on your profile, company preferences, and recent activity
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              placeContent: "center",
              padding: "30px 0",
              justifyContent: "space-evenly",
              gap: "2rem",
            }}
          >
            {recomandedCompanies.map((data, index) => (
              <ComponeyCard data={data} key={index} />
            ))}
          </Box>
        </Box>
      </MotionBlock>

      <PostingPamplete />
      <MotionBlock>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          {recomandedCompanies.map((data, index) => (
            <CompanyList data={data} key={index} />
          ))}
        </Box>
      </MotionBlock>
    </Container>
  );
}
