import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              {" "}
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    </div>
  );
}
