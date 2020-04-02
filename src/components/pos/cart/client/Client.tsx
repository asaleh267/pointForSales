import * as React from "react";
import {
  WithStyles,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  Typography
} from "@material-ui/core";
import { getClients } from "../../../../api/server";

import styles from "./styles";

export interface IProps {}
// Component
export const ClientComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    getClients().then((res: { data: any }) => {
      setClients(Object.values(res.data));
    });
  }, []);

  return (
    <>
      <Typography className={classes.title} variant="h5">
        Choose a client
      </Typography>
      <FormControl className={classes.inputField} variant="outlined">
        <Select native>
          {clients.map((element, index) => (
            <option value={element}>{element}</option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

const StyledClientComponent = withStyles(styles)(ClientComponent);
export { StyledClientComponent as Client };
