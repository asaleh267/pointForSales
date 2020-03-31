import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import { colors, fontSize } from "../../utils/Variables";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ClassIcon from "@material-ui/icons/Class";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { ButtonNavbar } from "./ButtonNavbar";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  appBar: {
    fontSize: fontSize.normal,
    height: "50px",
    margin: "auto",
    width: "100%"
  },
  title: {
    fontSize: fontSize.large,
    fontWeight: "bold",
    color: colors.blue,
    marginRight: "16px",
    "&:hover": {
      cursor: "pointer"
    }
  },
  toolbar: {
    minHeight: "40px",
    height: "50px"
  },
  navbar: {
    boxShadow: "1px 1px 10px 0px #AAAABB"
  },
  link: {
      color: colors.darkGrey
  }
});

export const Navbar: React.FC<{}> = () => {
  const classes = useStyle();
  const navbarLinks = [
    { link: "/dashboard", title: "POS", icon: <DashboardIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/product", title: "Product", icon: <CardGiftcardIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/sales", title: "Sales", icon: <LoyaltyIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/expense", title: "Expense", icon: <AttachMoneyIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/categories", title: "Categories", icon: <ClassIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/settings", title: "Settings", icon: <SettingsIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/reports", title: "Reports", icon: <AssessmentIcon style={{ fontSize: 15, paddingRight: 4 }}/> }
  ];

  return (
    <AppBar
      elevation={0}
      position="static"
      className={classes.navbar}
      color="inherit"
    >
      <Toolbar className={classes.toolbar}>
        <div>
          {navbarLinks.map(e => (
            <Link className={classes.link} to={e.link}>
              <ButtonNavbar
                title={e.title}
                icon={e.icon}
              />
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};
