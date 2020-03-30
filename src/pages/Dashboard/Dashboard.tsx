import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { POSTabs } from "../../components/shared/POSTabs";

export const DashoardPage: React.FC = props => {
  const tabs = ["Drinks", "Sweets", "Food", "Deserts"];
  const value = 1;
  return (
    <Grid container>
      <h2>Hello Aseel Here's the dashboard</h2>
      <POSTabs tabs={tabs} value={value}>
        <Typography style={{ color: "black", opacity: 0.6 }}>
          No article found... yet
        </Typography>
      </POSTabs>
    </Grid>
  );
};
export default DashoardPage;
