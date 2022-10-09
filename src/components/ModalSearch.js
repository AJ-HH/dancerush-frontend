import React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import SearchBar from "./searchBar";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Checkbox from '@mui/material/Checkbox';


const ModalSearch = ({ advSearch, setAdvSearch, setSearch }) => {
  const [opened, setOpened] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleAdvSearchSong = (e) => {
    setAdvSearch({ ...advSearch, song: e.target.value });
  };

  const handleAdvSearchArtist = (e) => {
    setAdvSearch({ ...advSearch, artist: e.target.value });
  };

  const handleAdvSearchDifficulty = (event, newValue) => {
    setAdvSearch({ ...advSearch, difficulty: newValue });
  };

  const handleAdvSearchGenre = (event, newValue) => {
    setAdvSearch({ ...advSearch, genre: newValue });
    console.log(advSearch.genre);
  };

  const handleAdvSearchBPM = (event, newValue) => {
    setAdvSearch({ ...advSearch, bpm: newValue });
  };

  const handleAdvSearchLocked = (event) => {
    setAdvSearch({ ...advSearch, locked: event.target.checked });
    console.log(advSearch.locked)
  };

  const handleToggle = (value) => () => {
    setOpened((prevState) =>
      prevState.map((item, index) => (index === value ? !item : item))
    );
  };

  const valuetextDifficulty = (value) => {
    return `${value}`;
  };
  const valuetextBPM = (value) => {
    return `${value} beats per minute`;
  };
  return (
    <Card
      sx={{
        minWidth: "365px",
        maxWidth: "720px",
        width: "90%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        maxHeight: "575px",
        overflowY: "auto",
      }}
    >
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Advanced Search Filters
          </ListSubheader>
        }
      >
        <MyListButton
          opened={opened}
          value={0}
          handleToggle={handleToggle}
          primary={"Song Name"}
        >
          <SearchBar
            search={advSearch.song}
            handleSearch={handleAdvSearchSong}
          />
        </MyListButton>
        <MyListButton
          opened={opened}
          value={1}
          handleToggle={handleToggle}
          primary={"Artist Name"}
        >
          <SearchBar
            search={advSearch.artist}
            handleSearch={handleAdvSearchArtist}
          />
        </MyListButton>
        <MyListButton
          opened={opened}
          value={2}
          handleToggle={handleToggle}
          primary={"Genre"}
        >
          <ToggleButtonGroup
            value={advSearch.genre}
            onChange={handleAdvSearchGenre}
            aria-label="genre selection"
          >
            <ToggleButton value="EDM/BEMANI" aria-label="EDM/BEMANI">
              EDM/BEMANI
            </ToggleButton>
            <ToggleButton value="EDM/S" aria-label="EDM/S">
              EDM/S
            </ToggleButton>
            <ToggleButton value="BEMANI" aria-label="BEMANI">
              BEMANI
            </ToggleButton>
            <ToggleButton value="POPS" aria-label="POPS">
              POPS
            </ToggleButton>
            <ToggleButton value="How To Play" aria-label="How To Play">
              How To Play
            </ToggleButton>
            <ToggleButton value="EDM" aria-label="EDM">
              EDM
            </ToggleButton>
            <ToggleButton value="POPS/BEMANI" aria-label="POPS/BEMANI">
              POPS/BEMANI
            </ToggleButton>
          </ToggleButtonGroup>
        </MyListButton>
        <MyListButton
          opened={opened}
          value={3}
          handleToggle={handleToggle}
          primary={"Difficulty"}
        >
          <Slider
            getAriaLabel={() => "Difficulty range"}
            value={advSearch.difficulty}
            onChange={handleAdvSearchDifficulty}
            valueLabelDisplay="auto"
            min={1}
            step={1}
            max={10}
            getAriaValueText={valuetextDifficulty}
          />
        </MyListButton>
        <MyListButton
          opened={opened}
          value={4}
          handleToggle={handleToggle}
          primary={"BPM"}
        >
          <Slider
            getAriaLabel={() => "BPM range"}
            value={advSearch.bpm}
            onChange={handleAdvSearchBPM}
            valueLabelDisplay="auto"
            min={92}
            step={1}
            max={232}
            getAriaValueText={valuetextBPM}
          />
        </MyListButton>
        <MyListButton
          opened={opened}
          value={5}
          handleToggle={handleToggle}
          primary={"Availability"}
        >
          <Checkbox
            checked={advSearch.locked}
            onChange={handleAdvSearchLocked}
            inputProps={{
              "aria-label": "Checkbox for song availability",
            }}
          />
        </MyListButton>
      </List>
    </Card>
  );
};

const MyListButton = ({ opened, value, handleToggle, primary, children }) => {
  return (
    <div>
      <ListItemButton onClick={handleToggle(value)}>
        <ListItemText
          primary={primary}
          primaryTypographyProps={{
            sx: { fontSize: "16px", fontWeight: "bold" },
          }}
        />
        {opened.at(value) ? <RemoveIcon /> : <AddIcon />}
      </ListItemButton>

      <Collapse in={opened.at(value)} timeout="auto" unmountOnExit>
        {children}
      </Collapse>

      <Divider />
    </div>
  );
};

export default ModalSearch;
