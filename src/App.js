import "./App.css";
import React from "react";
import Song from "./components/song";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/searchBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModalSongContent from "./components/ModalSongContent";
import ModalSearch from "./components/ModalSearch";

// TODO add searching functionality
// TODO add advanced search functionality
// TODO How to use search functionality (?) button
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

  const [advSearch, setAdvSearch] = React.useState({
    song: "",
    artist: "",
    difficulty: [1, 10],
    bpm: [92, 232],
    genre: [],
    locked: false,
  });

  const [openSearch, setOpenSearch] = React.useState(false);
  const handleOpenSearch = () => setOpenSearch(true);
  const handleCloseSearch = () => setOpenSearch(false);

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

  // Getting the actual song data
  React.useEffect(() => {
    fetch("final_songs_test.json")
      .then((res) => res.json())
      .then((songs) => setAllSongs(songs));
    setCurrSongs(allSongs);
  }, [allSongs]);

  // Re-renders whenever the search bar/advanced search is updated
  React.useEffect(() => {
    const lower = search.toLowerCase();
    setCurrSongs(
      allSongs.filter((s) => {
        if (s.alias == null) return s.song.toLowerCase().includes(lower);
        else
          return (
            s.song.toLowerCase().includes(lower) ||
            s.alias.filter((s) => {
              return s.toLowerCase().includes(lower);
            }).length > 0
          );
      })
    );
  }, [search, allSongs]);

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
          display: "flex",
          width: "85%",
          alignItems: "flex-start",
          paddingTop: "4px",
        }}
      >
        <Button
          sx={{ textAlign: "left", fontSize: "16px", fontWeight: "bold" }}
          size="small"
          onClick={handleOpenSearch}
        >
          Advanced search
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          position: "relative",
          minHeight: "600px",
          height: "100%",
          width: "85%",
          backgroundColor: "#FFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* eslint-disable-next-line */}
        {currSongs.map((song, key) => {
          if (key < 20)
            return (
              <Song handleOpen={handleOpen} key={song.id} song={song}></Song>
            );
        })}
      </Box>
      {/* Modal Song content */}
      <Modal open={open} onClose={handleClose}>
        <ModalSongContent modalSong={modalSong}></ModalSongContent>
      </Modal>
      {/* Modal for Advanced Search */}
      <Modal open={openSearch} onClose={handleCloseSearch}>
        <ModalSearch
          advSearch={advSearch}
          setAdvSearch={setAdvSearch}
          setSearch={setSearch}
        ></ModalSearch>
      </Modal>
    </Box>
  );
};

export default App;
