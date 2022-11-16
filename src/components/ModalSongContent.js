import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const ModalSongContent = ({ open, handleClose, modalSong }) => {
  const [easyClicked, setEasyClicked] = React.useState(false);
  const [normalClicked, setNormalClicked] = React.useState(false);
  const handleEasyClick = () => {
    setEasyClicked(!easyClicked);
  };
  const handleNormalClick = () => {
    setNormalClicked(!normalClicked);
  };
  React.useEffect(()=>{
  },[modalSong]);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <Card
          sx={{
            minWidth: "350px",
            maxWidth: "720px",
            width: "90%",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            maxHeight: "575px",
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              paddingRight: "100px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <span>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                  fontWeight="bold"
                >
                  GENRE:
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                >
                  {" " + modalSong.genre}
                </Typography>
              </span>
              <span>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  display="inline"
                  sx={{ fontWeight: "800" }}
                >
                  Song:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  display="inline"
                  sx={{ fontWeight: "bold" }}
                >
                  {" " + modalSong.song}
                </Typography>
              </span>
              <span>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                  fontWeight="bold"
                >
                  Artist:
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                >
                  {" " + modalSong.artist}
                </Typography>
              </span>
            </CardContent>
            <Box
              component="img"
              height="82px"
              width="82px"
              src={"images/" + modalSong.thumbnail}
              alt="song"
              padding="16px"
            />
          </div>
          <CardContent sx={{ paddingBottom: 0, paddingTop: "4px" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "700" }}>
              STATS
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              paddingTop: "8px",
              paddingBottom: 0,
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <span style={{ width: "100%" }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                  fontWeight="bold"
                >
                  BPM:
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                >
                  {" " + modalSong.bpm}
                </Typography>
              </span>
              <span style={{ width: "100%" }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                  fontWeight="bold"
                >
                  Unlocked by default:
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                >
                  {/* eslint-disable-next-line*/}
                  {" " + modalSong.unlocked == 1 ? " yes" : " no"}
                </Typography>
              </span>
            </div>
          </CardContent>
          <CardContent
            sx={{
              paddingTop: "8px",
              paddingBottom: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span style={{ width: "100%" }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                  fontWeight="bold"
                >
                  Easy
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                >
                  {" " + modalSong.easy}
                </Typography>
              </span>

              <span style={{ width: "100%" }}>
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                  fontWeight="bold"
                >
                  Normal:
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
                >
                  {" " + modalSong.normal}
                </Typography>
              </span>
            </div>
          </CardContent>
          <CardContent>
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
          </CardContent>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", paddingTop: 0 }}
          >
            <Button
              variant={easyClicked ? "contained" : "outlined"}
              sx={{ width: "125px", marginBottom: "8px" }}
              onClick={handleEasyClick}
            >
              Easy Video
            </Button>

            {easyClicked && (
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  height: 0,
                }}
              >
                <iframe
                  id="easy"
                  title="easyvideo"
                  src={"https://youtube.com/embed/" + modalSong.easyurl}
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            )}

            <Button
              variant={normalClicked ? "contained" : "outlined"}
              sx={{ width: "150px", marginTop: "8px", marginBottom: "8px" }}
              onClick={handleNormalClick}
            >
              Normal Video
            </Button>

            {normalClicked && (
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  height: 0,
                }}
              >
                <iframe
                  id="normal"
                  title="normalvideo"
                  src={"https://youtube.com/embed/" + modalSong.normalurl}
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>
        
      </Box>
    </Modal>
  );
};
export default ModalSongContent;
