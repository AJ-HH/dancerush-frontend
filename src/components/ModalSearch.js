import React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SearchBar from "./SearchBar";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const ModalSearch = ({
  openSearch,
  handleCloseSearch,
  advSearch,
  setAdvSearch,
}) => {
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

  const valuetextNormal = (value) => {
    return `${value}`;
  };
  const valuetextBPM = (value) => {
    return `${value} beats per minute`;
  };

  return (
    <Modal open={openSearch} onClose={handleCloseSearch}>
      <Card
        sx={{
          minWidth: "330px",
          maxWidth: "720px",
          width: "90%",
          height: "100%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          overflowY: "scroll",
        }}
      >
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ fontWeight: "bold" }}
            >
              Advanced Search Filters
            </ListSubheader>
          }
        >
          <MyListButton primary={"Song Name"}>
            <SearchBar
              sx={{ marginLeft: "16px", marginRight: "16px" }}
              label="Search for song..."
              search={advSearch.song}
              handleSearch={handleAdvSearchSong}
            />
          </MyListButton>
          <MyListButton primary={"Artist Name"}>
            <SearchBar
              sx={{ marginLeft: "16px", marginRight: "16px" }}
              label="Search for artist..."
              search={advSearch.artist}
              handleSearch={handleAdvSearchArtist}
            />
          </MyListButton>
          <MyListButton primary={"Genre"}>
            <ToggleButtonGroup
              value={advSearch.genre}
              onChange={handleAdvSearchGenre}
              aria-label="genre selection"
              sx={{ flexWrap: "wrap", marginTop: "16px", marginLeft: "16px" }}
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
          <MyListButton primary={"Easy Difficulty"}>
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
                sx={{ width: "97.5%", marginTop: "40px", marginLeft: "20px" }}
              />
            </div>
          </MyListButton>
          <MyListButton primary={"Normal Difficulty"}>
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
                sx={{ width: "97.5%", marginTop: "40px", marginLeft: "20px" }}
              />
            </div>
          </MyListButton>
          <MyListButton primary={"BPM"}>
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
                sx={{ width: "97.5%", marginTop: "40px", marginLeft: "20px" }}
                marks={[
                  { value: 100, label: "100" },
                  { value: 200, label: "200" },
                ]}
              />
            </div>
          </MyListButton>
          <MyListButton primary={"Availability"}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={advSearch.default}
                  onChange={handleAdvSearchDefault}
                  inputProps={{
                    "aria-label": "Checkbox for song availability",
                  }}
                  sx={{ marginLeft: "16px" }}
                />
              }
              label="Only songs available by default"
            />
          </MyListButton>
        </List>
      </Card>
    </Modal>
  );
};

const MyListButton = ({ primary, children }) => {
  return (
    <div>
      <ListItemText
        primary={primary}
        primaryTypographyProps={{
          sx: {
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "16px",
            marginLeft: "16px",
          },
        }}
      />

      <Box sx={{ width: "calc(100% - 32px)", alignItems: "center" }}>
        {children}
      </Box>

      <Divider sx={{ marginTop: "16px" }} />
    </div>
  );
};

export default ModalSearch;
