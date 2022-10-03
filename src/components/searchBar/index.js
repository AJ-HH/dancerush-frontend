import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = (props) => {
  const style = {
    background: "#B3E3FF",
    width: "85%",
    position: "relative",
    top: "1rem",
    marginBottom: "16px",
  };
  return (
    <TextField
      id="filled-search"
      label="Search for song..."
      type="search"
      value={props.search}
      onChange={props.handleSearch}
      style={style}
    />
  );
};

export default SearchBar;
