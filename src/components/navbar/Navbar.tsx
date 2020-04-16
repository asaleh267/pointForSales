import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import { colors, fontSize } from "../../utils/Variables";
import { ButtonNavbar } from "../buttonNavbar/ButtonNavbar";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../constants/navbarLinks";
import { WithStyles, withStyles } from "@material-ui/core";
import style from "./style";

export const NavbarComponent: React.FunctionComponent<WithStyles<
  typeof style
>> = props => {
  const { classes } = props;
  return (
    <AppBar
      elevation={0}
      position="static"
      className={classes.navbar}
      color="inherit"
    >
      <Toolbar className={classes.toolbar}>
        <div>
          {navbarLinks.map((e, index) => (
            <Link key={index} className={classes.link} to={e.link}>
              <ButtonNavbar title={e.title} icon={e.icon} />
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const StyledNavbar = withStyles(style)(NavbarComponent);
export { StyledNavbar as Navbar };
