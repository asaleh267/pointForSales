import React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Stock } from "../../components/pos/stock/Stock";
import { Divider, Grid, Box } from "@material-ui/core";
import styles from "./styles";
import Cart from "../../components/pos/cart";

export const DashboardComponent: React.FunctionComponent<WithStyles<
  typeof styles
>> = props => {
  const { classes } = props;

  return (
    <Box px={2}>
      <Grid container spacing={0} className={classes.container}>
        <Grid item style={{ gridColumnEnd: "span 5" }}>
          <Paper className={classes.paper}>
            <Cart></Cart>
          </Paper>
        </Grid>
        <Grid item style={{ gridColumnEnd: "span 7" }}>
          <Paper className={classes.paper}>
            <Stock></Stock>
            <Divider></Divider>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const StyledDashboard = withStyles(styles)(DashboardComponent);
export { StyledDashboard as DashboardPage };
