import "./App.css";
import React from "react";
import Song from "./components/song";
import Header from "./components/header";
import Footer from "./components/footer";
import SearchBar from "./components/searchBar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main></Main>

      <Footer />
    </div>
  );
};

const Main = () => {
  const [search, setSearch] = React.useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // allSongs - not modified, currSongs is modified based on allSongs when searching for songs
  const [allSongs, setAllSongs] = React.useState([]);
  const [currSongs, setCurrSongs] = React.useState([]);
  // songData is from songs_data.json which contains extra data
  // Necessary for the youtube url and getting the jacket image that is shown in the modal
  const [songData, setSongData] = React.useState([]);

  // States necessary for displaying the song that will be displayed on the modal
  // Accesses data from songData (which contains the jacket and url and sets them)
  const [modalSong, setModalSong] = React.useState({});
  const [jacket, setJacket] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (id) => {
    // Using the id that has been passed in when the song card is clicked, it will
    // access the data from that song in dancerush_songs.json
    const currData = currSongs.find((song) => {
      return song.id === id;
    });
    setModalSong(currData);

    // Using the title from the currData (which is now the song in the modal), get the additional info
    const currSongData = songData.find((item) => {
      return item.title === currData.song;
    });
    setUrl("https://www.youtube.com/watch?v=" + currSongData.normalurl);
    setJacket(currSongData.thumbnail);
    setOpen(true);
  };

  React.useEffect(() => {
    fetch("drs_songs_test.json")
      .then((res) => res.json())
      .then((songs) => setAllSongs(songs));
    fetch("botsjson_test.json")
      .then((res) => res.json())
      .then((songs) => setSongData(songs));
    setCurrSongs(allSongs);
  }, [allSongs]);

  return (
    <Box
      component="span"
      sx={{
        minHeight: "800px",
        height: "100%",
        width: "100%",
        position: "relative",
        top: "-75px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SearchBar search={search} handleSearch={handleSearch} />
      <Box
        component="div"
        sx={{
          position: "relative",
          minHeight: "600px",
          height: "100%",
          width: "85%",
          backgroundColor: "#FFF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {currSongs.map((song) => {
          return (
            <Song handleOpen={handleOpen} key={song.id} song={song}></Song>
          );
        })}
      </Box>
      {/* Modal content */}
      <Modal open={open} onClose={handleClose}>
        <Card
          sx={{
            minWidth: 320,
            width: "90%",
            position: "absolute",
            height: 400,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
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
              <span>
                {" "}
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  display="inline"
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
                </Typography>{" "}
              </span>

              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {modalSong.song}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {modalSong.artist}
              </Typography>
            </CardContent>
            <Box
              component="img"
              height="82px"
              width="82px"
              src={"images/" + jacket}
              alt="song"
              padding="16px"
            />
          </div>
        </Card>
      </Modal>
    </Box>
  );
};

export default App;
