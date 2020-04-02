import * as React from "react";
import { Grid, withStyles, WithStyles } from "@material-ui/core";
import { LoginComponent } from "../../components/auth/Login";
import styles from "./style";

export const LoginPageComponent: React.FunctionComponent<WithStyles<
  typeof styles
>> = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.page}>
      <LoginComponent />
    </Grid>
  );
};

const StyledLogin = withStyles(styles)(LoginPageComponent);
export { StyledLogin as LoginPage };
