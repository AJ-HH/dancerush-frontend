import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = (props) => {
  const style = {
    background: "#B3E3FF",
    width: "100%",
    position: "relative",
    top: "1rem",
    marginBottom: "16px",
  };
  return (
    <TextField
      id="filled-search"
      label={props.label}
      type="search"
      value={props.search}
      onChange={props.handleSearch}
      style={style}
      sx={props.sx}
      onBlur={props.onBlur}
    />
  );
};

export default SearchBar;
