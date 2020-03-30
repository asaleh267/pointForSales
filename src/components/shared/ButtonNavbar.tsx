import * as React from "react";
import { colors, fontSize } from "../../utils/Variables";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  button: {
    background: "inherit",
    fontSize: fontSize.normal,
    color: colors.darkGrey,
    transition: "0.1s",
    fontWeight: 300,
    textTransform: "none",
    textDecoration: "none",
    "&:hover": {
      background: "inherit",
      color: colors.blue
    }
  }
}));

export const ButtonNavbar: React.FC<{
  title: string;
  icon: JSX.Element;
}> = ({ title, icon, ...rest }) => {
  const classes = useStyle();
  return (
    <Button {...rest} className={classes.button}>
      {icon}
      {title}
    </Button>
  );
};
