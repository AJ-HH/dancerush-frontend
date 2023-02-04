import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  textAlign: "left",
  verticalAlign: "middle",
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2)

  // marginTop: theme.spacing(1),
  // marginBottom: theme.spacing(1),

}));

const ColoredSquare = styled(Box)(({ theme }) => ({
  width: "56px",
  height: "56px",
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: "56px",
  fontSize: "26px",
  fontWeight: "bold",
  color: "#FFF",
}));

const Song = ({ handleOpen, song, id }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height:"100%",
        width: "100%",
        margin: theme.spacing(4),
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <CardActionArea
        sx={{ height:"100%", cursor: "pointer", display:"flex", flexDirection:"column", justifyContent: "space-between", alignItems: "space-between", }}
        onClick={() => {
          handleOpen(id);
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            padding:theme.spacing(4)
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding:0
            }}
          >
            <SubText color="text.secondary">
              {song.genre}
            </SubText>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold",   textAlign: "left", }}
            >
              {song.song}
            </Typography>
            <SubText color="text.secondary">
              {song.artist}
            </SubText>
          </CardContent>
          <Box
            component="img"
            height="112px"
            width="112px"
            src={"images/" + song.thumbnail}
            alt="song"
          />
        </Box>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: theme.spacing(4),
            paddingTop: 0
          }}
        >
          <SubText sx={{fontSize: "20px", lineHeight: "40px",color: theme.palette.main.primary}}>
            SHOW MORE...
          </SubText>
          <div style={{ display: "flex", flexDirection: "row",  }}>
            <ColoredSquare sx={{ backgroundColor: theme.palette.easy.main }}>
              {song.easy}
            </ColoredSquare>
            <ColoredSquare sx={{ backgroundColor: theme.palette.normal.main }}>
              {song.normal}
            </ColoredSquare>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default Song;
