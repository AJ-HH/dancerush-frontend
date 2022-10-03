import React from "react";
import footer from "../images/bg_bottom_pc.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Footer = () => {
  return (
    <Card style={{ border: "none", boxShadow: "none" }}>
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
    </Card>
  );
};

export default Footer;
