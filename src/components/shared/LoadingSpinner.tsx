import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

export const LoadingSpinner = (props: { msg: string }) => (
  <Grid>
    <CircularProgress color="secondary" />{" "}
    <Typography variant="body1">{props.msg}</Typography>
  </Grid>
);
