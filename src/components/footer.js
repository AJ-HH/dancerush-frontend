import React from "react";
import footer from "../images/bg_bottom_pc.png";
import discord from "../images/discord-icon.svg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

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
    <Card sx={{ border: "none", boxShadow: "none", position:"relative", }}>
      <Box>
        <IconButton href="https://github.com/AJ-HH/dancerush-frontend/" aria-label="Github link" size='large' sx={{transform: "scale(1.5)",color:"#000"}}>
          <GitHubIcon/>
        </IconButton>
        <IconButton href="https://discord.gg/dancerush" aria-label="Github link" size='large' sx={{padding:0, paddingTop:"8px",color:"#000"}}>
          <img alt="Link to Dancerush Discord server" src={discord}/>
        </IconButton>
      </Box>
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
