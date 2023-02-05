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

const MyListItem = ({ primary, children }) => {
  return (
    <div>
      <ListItemText
        primary={primary}
        primaryTypographyProps={{
          sx: {
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "16px",
          },
        }}
      />

      <Box sx={{ width: "100%", alignItems: "center" }}>{children}</Box>
      <Divider />
    </div>
  );
};

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
          maxHeight: "600px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          overflowY: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
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
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "black",
                zIndex: 2,
                paddingLeft: "16px",
                borderBottom: "solid rgba(0, 0, 0, 0.05)",
              }}
            >
              Advanced Search Filters
            </ListSubheader>
          }
        >
          <Box sx={{ paddingRight: "16px", paddingLeft: "16px" }}>
            <MyListItem primary={"Song Name"}>
              <SearchBar
                label="Search for song..."
                search={advSearch.song}
                handleSearch={handleAdvSearchSong}
              />
            </MyListItem>
            <MyListItem primary={"Artist Name"}>
              <SearchBar
                sx={{ marginRight: 0 }}
                label="Search for artist..."
                search={advSearch.artist}
                handleSearch={handleAdvSearchArtist}
              />
            </MyListItem>
            <MyListItem primary={"Genre"}>
              <ToggleButtonGroup
                value={advSearch.genre}
                onChange={handleAdvSearchGenre}
                aria-label="genre selection"
                sx={{
                  flexWrap: "wrap",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
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
                <ToggleButton
                  color="primary"
                  value="BEMANI"
                  aria-label="BEMANI"
                >
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
            </MyListItem>
            <MyListItem primary={"Easy Difficulty"}>
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
            </MyListItem>
            <MyListItem primary={"Normal Difficulty"}>
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
            </MyListItem>
            <MyListItem primary={"BPM"}>
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
            </MyListItem>
            <MyListItem primary={"Availability"}>
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
            </MyListItem>
          </Box>
        </List>
      </Card>
    </Modal>
  );
};

export default ModalSearch;
