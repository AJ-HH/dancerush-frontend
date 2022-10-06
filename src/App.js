import "./App.css";
import React from "react";
import Song from "./components/song";
import Header from "./components/header";
import Footer from "./components/footer";
import SearchBar from "./components/searchBar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalContent from "./components/modalContent";

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

  // States necessary for displaying the song that will be displayed on the modal
  const [modalSong, setModalSong] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (id) => {
    // Using the id that has been passed in when the song card is clicked, it will
    // access the data from that song in dancerush_songs.json
    const currData = currSongs.find((song) => {
      return song.id === id;
    });
    setModalSong(currData);
    setOpen(true);
  };

  React.useEffect(() => {
    fetch("final_songs_test.json")
      .then((res) => res.json())
      .then((songs) => setAllSongs(songs));
    setCurrSongs(allSongs);
  }, [allSongs]);

  return (
    <Box
      component="span"
      sx={{
        width: "100%",
        position: "relative",
        top: "-75px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
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
        <ModalContent modalSong={modalSong}></ModalContent>
      </Modal>
    </Box>
  );
};

export default App;
