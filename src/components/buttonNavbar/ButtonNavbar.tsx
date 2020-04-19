import * as React from "react";
import { colors, fontSize } from "../../utils/Variables";
import { makeStyles } from "@material-ui/styles";
import { Button, WithStyles, withStyles } from "@material-ui/core";
import style from "./style";

export interface ButtonNavbarProps {
  title: string;
  icon: JSX.Element;
}
// Component
export const ButtonNavbarComponent: React.FunctionComponent<ButtonNavbarProps &
  WithStyles<typeof style>> = props => {
  const { classes, title, icon, ...rest } = props;
  return (
    <Button {...rest} className={classes.button}>
      {icon}
      {title}
    </Button>
  );
};

const StyledButtonNavbarComponent = withStyles(style)(ButtonNavbarComponent);
export { StyledButtonNavbarComponent as ButtonNavbar };
