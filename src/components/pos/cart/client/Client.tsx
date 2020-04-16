import * as React from "react";
import {
  WithStyles,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import { getClients } from "../../../../api/server";

import styles from "./styles";

export interface IProps {
  onChange: (value: string) => void;
}
// Component
export const ClientComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, onChange = () => {} } = props;
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    getClients().then((res: { data: any }) => {
      setClients(Object.values(res.data));
    });
  }, []);

  const handleSelectChange = (event: any) => {
    onChange(event.target.value)
  };
  return (
    <>
      <Typography className={classes.title} variant="h5">
        Choose a client
      </Typography>
      <FormControl fullWidth variant="outlined">
        <Select native onChange={handleSelectChange}>
          {clients.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

const StyledClientComponent = withStyles(styles)(ClientComponent);
export { StyledClientComponent as Client };
