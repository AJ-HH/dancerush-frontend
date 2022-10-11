import "./App.css";
import React from "react";
import Song from "./components/Song";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
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
    setAdvSearch({ ...advSearch, song: e.target.value });
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

  const [openSearch, setOpenSearch] = React.useState(false);
  const handleOpenSearch = () => setOpenSearch(true);
  const handleCloseSearch = () => {
    setOpenSearch(false);
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

  // Getting the actual song data
  React.useEffect(() => {
    fetch("final_songs.json")
      .then((res) => res.json())
      .then((songs) => setAllSongs(songs));
    setCurrSongs(allSongs);
  }, [allSongs]);

  // Re-renders whenever the search bar/advanced search is updated
  React.useEffect(() => {
    let result = [];
    let lower = advSearch.song.toLowerCase();
    if (lower === "") {
      result = allSongs;
    } else {
      result = allSongs.filter((s) => {
        if (s.alias == null) return s.song.toLowerCase().includes(lower);
        else
          return (
            s.song.toLowerCase().includes(lower) ||
            s.alias.filter((s) => {
              return s.toLowerCase().includes(lower);
            }).length > 0
          );
      });
    }

    if (advSearch.artist !== "") {
      lower = advSearch.artist.toLowerCase();
      result = result.filter((s) => {
        if (s.artistalias == null)
          return s.artist.toLowerCase().includes(lower);
        else
          return (
            s.artist.toLowerCase().includes(lower) ||
            s.artistalias.filter((s) => {
              return s.toLowerCase().includes(lower);
            }).length > 0
          );
      });
    }

    if (advSearch.genre.length > 0) {
      result = result.filter((s) => {
        return advSearch.genre.includes(s.genre);
      });
    }
    let low = advSearch.easy.at(0);
    let high = advSearch.easy.at(1); 
    if (low !== 1 || high !== 10){
      result = result.filter((s) => {
        return s.easy >= low &&  s.easy <= high
      });
    }

    low = advSearch.normal.at(0);
    high = advSearch.normal.at(1); 
    if (low !== 1 || high !== 10){
      result = result.filter((s) => {
        return s.normal >= low && s.normal <= high
      });
    }

    low = advSearch.bpm.at(0);
    high = advSearch.bpm.at(1); 
    if (low !== 92 || high !== 232){
      result = result.filter((s) => {
        return s.bpm >= low && s.bpm <= high
      });
    }
    // eslint-disable-next-line
    if (advSearch.default == true){
      result = result.filter((s) => {
        // eslint-disable-next-line
        return s.unlocked == true
      });
    }

    setCurrSongs(result);
  }, [advSearch, allSongs]);

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
        ></ModalSearch>
      </Modal>
    </Box>
  );
};

export default App;
