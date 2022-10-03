import React from "react";
import header from "../images/bg_top_pc.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Header = (props) => {
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
        alt="Website header"
        src={header}
      />
      {/* This is the jankiest solution but then again, CSS is cancerous so whatever */}
      {/* Will display only one Typography per screensize breakpoint */}
      {/* For desktop/big screen screens */}
      <Typography
        variant="h1"
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
          },
          position: "absolute",
          top: "30%",
          left: "10%",
          height: "100%",
          width: "100%",
          color: "#FFF",
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
          transform: "translate(-10%, -10%)",
        }}
      >
        Dancerush Stardom Song Searcher
      </Typography>
      {/* Smaller monitors */}
      <Typography
        variant="h2"
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "none",
          },
          position: "absolute",
          top: "25%",
          left: "10%",
          height: "100%",
          width: "100%",
          color: "#FFF",
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
          transform: "translate(-10%, -10%)",
        }}
      >
        Dancerush Stardom Song Searcher
      </Typography>
      {/* Getting to tablet/mobile size */}
      <Typography
        variant="h3"
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "none",
            xl: "none",
          },
          position: "absolute",
          top: "20%",
          left: "10%",
          height: "100%",
          width: "100%",
          color: "#FFF",
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
          transform: "translate(-10%, -10%)",
        }}
      >
        Dancerush Stardom Song Searcher
      </Typography>
      {/* Small mobile screens */}
      <Typography
        variant="h4"
        sx={{
          display: {
            xs: "none",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          position: "absolute",
          top: "15%",
          left: "10%",
          height: "100%",
          width: "100%",
          color: "#FFF",
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
          transform: "translate(-10%, -10%)",
        }}
      >
        Dancerush Stardom Song Searcher
      </Typography>
      <Typography
        variant="h5"
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          },
          position: "absolute",
          top: "15%",
          left: "10%",
          height: "100%",
          width: "100%",
          color: "#FFF",
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
          transform: "translate(-10%, -10%)",
        }}
      >
        Dancerush Stardom Song Searcher
      </Typography>
    </Card>
  );
};

export default Header;
