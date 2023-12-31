import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "10px 0px 0px 20px",
    width: "320px",
    "& .MuiOutlinedInput-input": {
      height: "40px",
      padding: "0 14px",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#f1f1f1",
      borderRadius: "50px",
    },
  },
});

function SearchBar() {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      variant="outlined"
      placeholder="Search anything"
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
    />
  );
}

export default SearchBar;
