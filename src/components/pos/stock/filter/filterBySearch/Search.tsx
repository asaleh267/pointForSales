import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";

// Component
export const Search: React.FunctionComponent = props => {
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
};
