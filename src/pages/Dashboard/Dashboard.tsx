import React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Stock } from "../../components/pos/stock/Stock";
import { Divider } from "@material-ui/core";
import styles from "./styles";

export const DashboardComponent: React.FunctionComponent<WithStyles<typeof styles>> = props => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: "span 5" }}>
          <Paper className={classes.paper}>Cart Section</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 7" }}>
          <Paper className={classes.paper}>
            <Stock></Stock>
            <Divider></Divider>
          </Paper>
        </div>
      </div>
    </div>
  );
}


const StyledDashboard = withStyles(styles)(DashboardComponent);
export { StyledDashboard as DashboardPage };
