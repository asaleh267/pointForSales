import * as React from "react";
import { POSDialog } from "../../components/shared/POSDialog";
import { Grid, Button } from "@material-ui/core";

export const DashoardPage: React.FC = props => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid>
      <POSDialog open={open} title="Test">
        <p>Testing Dialog</p>
      </POSDialog>
      <Button onClick={handleOpen}>Open</Button>
    </Grid>
  );
};
export default DashoardPage;
