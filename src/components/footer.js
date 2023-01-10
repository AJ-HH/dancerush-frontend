import React from "react";
import footer from "../images/bg_bottom_pc.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <Card style={{ border: "none", boxShadow: "none", position:"relative" }}>
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
      <Typography
        variant="h6"
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
          position: "absolute",
          bottom: "0",
          width: "100%",
          color: "#000",
          background:"transparent",
          zIndex: "1"
        }}
      >
        Thanks to Michael Lawrence Dee/michael888#0082 on Discord for the
        thumbnail images, aliases and links to the songs.
      </Typography>
      <Typography
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          position: "absolute",
          bottom: "0",
          width: "100%",
          color: "#000",
          background:"transparent",
          fontSize: "14px",
          textAlign: "left",
          zIndex: "1"
        }}
      >
        Thanks to Michael Lawrence Dee/michael888#0082 on Discord for the
        thumbnail images, aliases and links to the songs!
      </Typography>
    </Card>
  );
};

export default Footer;
