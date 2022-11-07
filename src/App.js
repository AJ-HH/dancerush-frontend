import "./App.css";
import React from "react";
import Song from "./components/Song";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ModalSongContent from "./components/ModalSongContent";
import ModalSearch from "./components/ModalSearch";

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
  const handleSearch = (e) => {
    setAdvSearch({
      song: e.target.value,
      artist: "",
      easy: [1, 10],
      normal: [1, 10],
      bpm: [92, 232],
      genre: [],
      default: false,
    });
  };

  const [advSearch, setAdvSearch] = React.useState({
    song: "",
    artist: "",
    easy: [1, 10],
    normal: [1, 10],
    bpm: [92, 232],
    genre: [],
    default: false,
  });

  const [finalSearch, setFinalSearch] = React.useState({
    song: "",
    artist: "",
    easy: [1, 10],
    normal: [1, 10],
    bpm: [92, 232],
    genre: [],
    default: false,
  });

  const [openSearch, setOpenSearch] = React.useState(false);
  const handleOpenSearch = () => {
    setAdvSearch({
      song: "",
      artist: "",
      easy: [1, 10],
      normal: [1, 10],
      bpm: [92, 232],
      genre: [],
      default: false,
    });
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setFinalSearch(advSearch);
    setOpenSearch(false);
  };

  // allSongs - not modified, currSongs is modified based on allSongs when searching for songs
  const [allSongs, setAllSongs] = React.useState([]);
  const [currSongs, setCurrSongs] = React.useState([]);

  // States necessary for displaying the song that will be displayed on the modal
  const [modalSong, setModalSong] = React.useState({
    artist: "",
    bpm: 0,
    chinalocked: false,
    easy: 1,
    easyurl: "",
    genre: "",
    japanonly: false,
    koreaonly: false,
    normal: 10,
    normalurl: "",
    noteseasy: 0,
    notesnomral: 0,
    song: "",
    thumbnail: "",
    unlocked: true,
  });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // Using the id that has been passed in when the song card is clicked, it will
  // access the data from that song in dancerush_songs.json
  const handleOpen = (id) => {
    setOpen(true);
    setModalSong(currSongs.at(id));
  };

  // Getting the actual song data
  React.useEffect(() => {
    async function fetchSongs() {
      await fetch("https://dancerush.fly.dev/songlist/all-songs", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((songs) => setAllSongs(songs))
        .catch((error) => {
          console.log(error);
        });
    }
    fetchSongs();
    setCurrSongs(allSongs);
  }, []);

  // Re-renders whenever the search bar/advanced search is updated
  React.useEffect(() => {
    async function fetchSongs() {
      await fetch(
        "https://dancerush.fly.dev/songlist/advanced-search?" +
          new URLSearchParams({
            song: finalSearch.song,
            artist: finalSearch.artist,
            genre: finalSearch.genre,
            bpm: finalSearch.bpm,
            easy: finalSearch.easy,
            normal: finalSearch.normal,
            unlocked: finalSearch.default,
          }),
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((songs) => setCurrSongs(songs))
        .catch((error) => {
          console.log(error);
        });
    }
    fetchSongs();
  }, [finalSearch, allSongs]);

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
      <div style={{ width: "85%" }}>
        <SearchBar
          label="Search for song by name..."
          search={advSearch.song}
          handleSearch={handleSearch}
          onBlur={() => {
            setFinalSearch(advSearch);
          }}
        />
      </div>
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
          return (
            <Song handleOpen={handleOpen} id={key} key={key} song={song}></Song>
          );
        })}
      </Box>
      {/* Modal Song content */}

      <ModalSongContent
        open={open}
        handleClose={handleClose}
        modalSong={modalSong}
      ></ModalSongContent>

      {/* Modal for Advanced Search */}

      <ModalSearch
        openSearch={openSearch}
        handleCloseSearch={handleCloseSearch}
        advSearch={advSearch}
        setAdvSearch={setAdvSearch}
      ></ModalSearch>
    </Box>
  );
};

export default App;
