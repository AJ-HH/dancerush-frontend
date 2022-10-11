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
import SearchBar from "./SearchBar";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const ModalSearch = ({ advSearch, setAdvSearch, setSearch }) => {
  const [opened, setOpened] = React.useState([
    false,
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

  const handleAdvSearchEasy = (event, newValue) => {
    setAdvSearch({ ...advSearch, easy: newValue });
  };

  const handleAdvSearchNormal = (event, newValue) => {
    setAdvSearch({ ...advSearch, normal: newValue });
  };

  const handleAdvSearchGenre = (event, newValue) => {
    setAdvSearch({ ...advSearch, genre: newValue });
  };

  const handleAdvSearchBPM = (event, newValue) => {
    setAdvSearch({ ...advSearch, bpm: newValue });
  };

  const handleAdvSearchDefault = (event) => {
    setAdvSearch({ ...advSearch, default: event.target.checked });
  };

  const handleToggle = (value) => () => {
    setOpened((prevState) =>
      prevState.map((item, index) => (index === value ? !item : item))
    );
  };

  const valuetextNormal = (value) => {
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
            label="Search for song..."
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
            label="Search for artist..."
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
            sx={{ flexWrap: "wrap", marginTop: "16px" }}
          >
            <ToggleButton
              color="primary"
              value="EDM/BEMANI"
              aria-label="EDM/BEMANI"
            >
              EDM/BEMANI
            </ToggleButton>
            <ToggleButton color="primary" value="EDM/S" aria-label="EDM/S">
              EDM/S
            </ToggleButton>
            <ToggleButton color="primary" value="BEMANI" aria-label="BEMANI">
              BEMANI
            </ToggleButton>
            <ToggleButton color="primary" value="POPS" aria-label="POPS">
              POPS
            </ToggleButton>
            <ToggleButton
              color="primary"
              value="How To Play"
              aria-label="How To Play"
            >
              How To Play
            </ToggleButton>
            <ToggleButton color="primary" value="EDM" aria-label="EDM">
              EDM
            </ToggleButton>
            <ToggleButton
              color="primary"
              value="POPS/BEMANI"
              aria-label="POPS/BEMANI"
            >
              POPS/BEMANI
            </ToggleButton>
          </ToggleButtonGroup>
        </MyListButton>
        <MyListButton
          opened={opened}
          value={3}
          handleToggle={handleToggle}
          primary={"Easy Difficulty"}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Slider
              getAriaLabel={() => "Easy difficulty range"}
              value={advSearch.easy}
              onChange={handleAdvSearchEasy}
              valueLabelDisplay="on"
              min={1}
              step={1}
              max={10}
              getAriaValueText={valuetextNormal}
              sx={{ width: "97.5%", marginTop: "40px" }}
            />
          </div>
        </MyListButton>
        <MyListButton
          opened={opened}
          value={4}
          handleToggle={handleToggle}
          primary={"Normal Difficulty"}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Slider
              getAriaLabel={() => "Normal difficulty range"}
              value={advSearch.normal}
              onChange={handleAdvSearchNormal}
              valueLabelDisplay="on"
              min={1}
              step={1}
              max={10}
              getAriaValueText={valuetextNormal}
              sx={{ width: "97.5%", marginTop: "40px" }}
            />
          </div>
        </MyListButton>
        <MyListButton
          opened={opened}
          value={5}
          handleToggle={handleToggle}
          primary={"BPM"}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Slider
              getAriaLabel={() => "BPM range"}
              value={advSearch.bpm}
              onChange={handleAdvSearchBPM}
              valueLabelDisplay="on"
              min={92}
              step={1}
              max={232}
              getAriaValueText={valuetextBPM}
              sx={{ width: "97.5%", marginTop: "40px" }}
              marks={[
                { value: 100, label: "100" },
                { value: 200, label: "200" },
              ]}
            />
          </div>
        </MyListButton>
        <MyListButton
          opened={opened}
          value={6}
          handleToggle={handleToggle}
          primary={"Availability"}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={advSearch.default}
                onChange={handleAdvSearchDefault}
                inputProps={{
                  "aria-label": "Checkbox for song availability",
                }}
              />
            }
            label="Only songs available by default"
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

      <Collapse
        in={opened.at(value)}
        timeout="auto"
        unmountOnExit
        sx={{
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "16px",
        }}
      >
        {children}
      </Collapse>

      <Divider />
    </div>
  );
};

export default ModalSearch;
