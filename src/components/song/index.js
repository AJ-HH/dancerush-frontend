import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Song = (props) => {
  return (
    <Card
      sx={{
        minWidth: 318.75,
        width: "100%",
        margin: "20px",
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <CardActionArea
        onClick={() => {
          props.handleOpen(props.song.id);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.song.genre}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              style={{ fontWeight: "bold", textAlign: "left" }}
            >
              {props.song.song}
            </Typography>
            <Typography
              sx={{ fontSize: 14, textAlign: "left" }}
              color="text.secondary"
            >
              {props.song.artist}
            </Typography>
          </CardContent>
          <Box
            component="img"
            height="82px"
            width="82px"
            src={"images/" + props.song.thumbnail}
            alt="song"
            padding="16px"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              color: "#1976d2",
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "41px",
              margin: "16px",
            }}
            color="text.secondary"
          >
            SHOW MORE...
          </Typography>

          <div
            style={{ display: "flex", flexDirection: "row", margin: "16px" }}
          >
            <div
              style={{
                backgroundColor: "#1DAD16",
                width: "41px",
                height: "41px",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "41px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#FFF",
              }}
            >
              {props.song.easy}
            </div>
            <div
              style={{
                backgroundColor: "#FFA200",
                width: "41px",
                height: "41px",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "41px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#FFF",
              }}
            >
              {props.song.normal}
            </div>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default Song;
