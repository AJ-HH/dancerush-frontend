import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material";

const SearchBar = (props) => {
  const theme = useTheme();
  const style = {
    background: theme.palette.main.light,
    width: "100%",
    position: "relative",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
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
