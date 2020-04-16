import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";

export interface IProps {
  value: string;
  onChange?: (value: string) => void;
}
// Component
export const Search: React.FunctionComponent<IProps>  = ({
  value = "",
  onChange = () => {},
}) => {

  const handleSearchChange = (event: any) => {
    onChange(event.target.value);
  }
    return (
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          onChange={handleSearchChange}
          labelWidth={60}
          value={value}
        />
      </FormControl>
  );
};
