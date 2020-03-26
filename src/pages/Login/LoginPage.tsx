import * as React from "react";
import { Grid, withStyles, makeStyles } from "@material-ui/core";
import { Login } from "../../components/auth/Login";
import { styles } from "./Styles";

const useStyle = makeStyles(styles);

export const LoginPage: React.FC = props => {
  const classes = useStyle();

  return (
    <Grid container className={classes.page}>
      <Login />
    </Grid>
  );
};
export default withStyles(styles)(LoginPage);
