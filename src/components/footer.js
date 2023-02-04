import React from "react";
import footer from "../images/bg_bottom_pc.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const FooterText = styled(Typography)(({theme}) => ({
  position: "absolute",
  bottom: 20,
  left:"50%",
  margin: theme.spacing(4),
  width: "85%",
  color: "#FFF",
  textShadow: "0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black",
  transform: "translate(-50%, -10%)",
  fontWeight: 500,
  zIndex: "1",
  [theme.breakpoints.up('xs')]: {
    fontSize:"1rem",
    margin: 0,
  },
  [theme.breakpoints.up('md')]: {
    fontSize:"1.5rem"
  },
}))

const Footer = () => {
  return (
    <Card style={{ border: "none", boxShadow: "none", position:"relative", }}>
      <CardMedia
        component="img"
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#FFF",
          minHeight: "200px",
        }}
        alt="Website footer"
        src={footer}
      />
      <FooterText >
        Thanks to Michael Lawrence Dee/michael888#0082 on Discord for the
        thumbnail images, aliases and links to the songs!
      </FooterText>
    </Card>
  );
};

export default Footer;
