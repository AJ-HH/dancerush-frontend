import "./App.css";
import React from "react";
import Song from "./components/Song";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
  // Handles searching for the searchbar 
  // Will update the song value, everything else will stay the same as default
  const handleSearch = (e) => {
    setAdvSearch({
      song: e.target.value,
      artist: "",
      easy: [1, 10],
      normal: [1, 10],
      bpm: [92, 232],
      genre: [],
      default: false,
      offset: 0
    });
  };

  // advSearch is used as a placeholder to fill in search details before the call is sent to the API
  const [advSearch, setAdvSearch] = React.useState({
    song: "",
    artist: "",
    easy: [1, 10],
    normal: [1, 10],
    bpm: [92, 232],
    genre: [],
    default: false,
    offset: 0
  });

  // finalSearch is the final search results sent to the API
  const [finalSearch, setFinalSearch] = React.useState({
    song: "",
    artist: "",
    easy: [1, 10],
    normal: [1, 10],
    bpm: [92, 232],
    genre: [],
    default: false,
    offset:0
  });

  const [openSearch, setOpenSearch] = React.useState(false);
  // When advanced search is open, set advSearch to default values and shows the modal
  const handleOpenSearch = () => {
    setAdvSearch({
      song: "",
      artist: "",
      easy: [1, 10],
      normal: [1, 10],
      bpm: [92, 232],
      genre: [],
      default: false,
      offset: 0
    });
    setOpenSearch(true);
  };

  // When the search modal is closed, finalSearch is updated (and API is called through useEffect)
  const handleCloseSearch = () => {
    setFinalSearch(advSearch);
    setOpenSearch(false);
  };

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
    notesnormal: 0,
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

  const handleBack = () => {
    setFinalSearch({ ...finalSearch, offset: finalSearch.offset - 1 });
  }

  const handleForward = () => {
    setFinalSearch({ ...finalSearch, offset: finalSearch.offset + 1 });
  }

  // Getting the actual song data
  React.useEffect(() => {
    async function fetchSongs() {
      await fetch(process.env.REACT_APP_API_URL +
        "/advanced-search?" +
        new URLSearchParams({
          song: "",
          artist: "",
          genre: [],
          bpm: [92, 232],
          easy: [1, 10],
          normal: [1, 10],
          unlocked: false,
          offset: 0
        }),
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
        .then((res) => res.json())
        .then((songs) => setCurrSongs(songs.slice(0,10)))
        .catch((error) => {
          console.log(error);
        });
    }
    fetchSongs();
  }, []);

  // Re-renders whenever the search bar/advanced search is updated
  React.useEffect(() => {
    async function fetchSongs() {
      await fetch(
        process.env.REACT_APP_API_URL +
          "/advanced-search?" +
          new URLSearchParams({
            song: finalSearch.song,
            artist: finalSearch.artist,
            genre: finalSearch.genre,
            bpm: finalSearch.bpm,
            easy: finalSearch.easy,
            normal: finalSearch.normal,
            unlocked: finalSearch.default,
            offset: finalSearch.offset
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
  }, [finalSearch]);

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

      {/* Pagination buttons */}
      <Box
        sx={{
          alignItems: "center",
        }}
      >
        <IconButton disabled={finalSearch.offset === 0} onClick={handleBack} aria-label="back">
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton disabled={currSongs.length !== 10} onClick={handleForward} aria-label="forward">
          <ArrowForwardIosIcon />
        </IconButton>
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
