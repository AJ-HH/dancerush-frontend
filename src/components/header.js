import React from "react";
import header from "../images/bg_top_pc.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from '@mui/material/styles';

const Title = styled(Typography)(({theme}) => ({
  position: "absolute",
  top: "35%",
  left: "50%",
  color: "#FFF",
  width:"85%",
  textShadow: "0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black",
  transform: "translate(-50%, -50%)",
  
  [theme.breakpoints.up('xs')]: {
    fontSize:"1.5rem"
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:"2rem"
  },
  [theme.breakpoints.up('md')]: {
    fontSize:"3rem"
  },
  [theme.breakpoints.up('lg')]: {
    fontSize:"3.5rem"
  },
  [theme.breakpoints.up('xl')]: {
    fontSize:"5rem"
  },



}))

const Header = (props) => {
  return (
    <Card sx={{ border: "none", boxShadow: "none", position:"relative" }}>
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
      <Title>
        Dancerush Stardom Song Searcher
      </Title>
    </Card>
  );
};

export default Header;
