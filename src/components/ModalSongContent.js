import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material";

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  // display: "inline",
  // textAlign: "left",
  // verticalAlign: "middle",
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
  color: "#5e5e5e",
}));

const CombinedText = ({ tag, value }) => {
  return (
    <Grid item xs={8} sm={6} md={6} lg={6} xl={6}>
      <span style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <SubText fontWeight="bold">{tag + ": "}</SubText>
        <SubText>{value}</SubText>
      </span>
    </Grid>
  );
};

const MainText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  textAlign: "left",
  fontSize: 28,
}));

const SongButton = styled(Button)(({ theme }) => ({
  width: "300px",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  fontWeight: 600,
  textAlign: "center",
  "@media (max-width: 400px)": {
    maxWidth: "300px",
    width: "100%",
  },
}));

const styles = {
  imageStyle: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 500px)": {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "16px",
    },
    "@media (min-width: 500px)": {
      paddingRight: "16px",
    },
  },
  headerStyle: {
    paddingBottom: "16px",
    "@media (min-width: 500px)": {
      display: "flex",
      flexDirection: "row",
    },
  },
  headerTextStyle: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 500px)": {
      justifyContent: "flex-end",
    },
  },
};

const ModalSongContent = ({ open, handleClose, modalSong }) => {
  const theme = useTheme();
  React.useEffect(() => {}, [modalSong]);
  return (
    <Modal open={open} onClose={handleClose} sx={{  height: "100vh", overflowY: "hidden"}}>
      <Box>
        <Card
          sx={{
            width: "90%",
            maxWidth: "760px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            overflowY: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
            padding: theme.spacing(4),
            "@media (max-width: 675px)": {
              maxHeight: "600px",
            },
          }}
        >
          <Box sx={styles.headerStyle}>
            <Box sx={styles.imageStyle}>
              <Box
                component="img"
                height="160px"
                width="160px"
                src={"images/" + modalSong.thumbnail}
                alt="song"
              />
            </Box>
            <Box sx={styles.headerTextStyle}>
              <MainText>{modalSong.song}</MainText>
              <SubText sx={{ paddingBottom: 0 }}>{modalSong.artist}</SubText>
            </Box>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <MainText>STATS</MainText>
            </Grid>
            <Grid container sx={{ padding: 0 }}>
              <CombinedText tag="Genre" value={modalSong.genre} />
              <CombinedText tag="BPM" value={modalSong.bpm} />
              <CombinedText tag="Easy" value={modalSong.easy} />
              <CombinedText tag="Normal" value={modalSong.normal} />
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <span
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <SubText fontWeight="bold">{"Unlocked by default: "}</SubText>
                  <SubText>
                    { modalSong.unlocked === true ? " yes" : " no"}
                  </SubText>
                </span>
              </Grid>
            </Grid>

            <Grid item>
              {/* eslint-disable-next-line */}
              {modalSong.chinalocked == 1 && (
                <div style={{ color: "red" }}> • Locked in China </div>
              )}
              {/* eslint-disable-next-line */}
              {modalSong.japanonly == 1 && (
                <div style={{ color: "red" }}> • Only available in Japan </div>
              )}
              {/* eslint-disable-next-line */}
              {modalSong.koreaonly == 1 && (
                <div style={{ color: "red" }}> • Only available in Korea </div>
              )}
            </Grid>
            <Grid item xs={12} sm={12} sx={{paddingTop: theme.spacing(2) }}>
              <MainText>YouTube Links</MainText>
            </Grid>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", padding: 0}}
            >
              <SongButton
                variant="outlined"
                href={"https://youtube.com/watch?v=" + modalSong.easyurl}
              >
                {modalSong.song} easy
              </SongButton>
              <SongButton
                variant="outlined"
                href={"https://youtube.com/watch?v=" + modalSong.normalurl}
              >
                {modalSong.song} normal
              </SongButton>
            </CardContent>
          </Grid>
        </Card>
      </Box>
    </Modal>
  );
};
export default ModalSongContent;
