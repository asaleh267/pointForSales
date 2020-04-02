import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { Grid, WithStyles, withStyles } from "@material-ui/core";
import style from "./style";

export interface IProps {
  msg: string;
}

export const LoadingSpinnerComponent : React.FunctionComponent<IProps &
WithStyles<typeof style>> = (props) => (
  <Grid>
    <CircularProgress color="secondary" />{" "}
    <Typography variant="body1">{props.msg}</Typography>
  </Grid>
);


const StyledLoadingSpinner = withStyles(style)(LoadingSpinnerComponent);
export { StyledLoadingSpinner as LoadingSpinner };
