import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stock from "../../components/pos/stock/Stock";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    margin: 8
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

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
