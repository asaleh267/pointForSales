import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ClassIcon from "@material-ui/icons/Class";
import AssessmentIcon from "@material-ui/icons/Assessment";

export const navbarLinks = [
    { link: "/dashboard", title: "POS", icon: <DashboardIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/product", title: "Product", icon: <CardGiftcardIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/sales", title: "Sales", icon: <LoyaltyIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/expense", title: "Expense", icon: <AttachMoneyIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/categories", title: "Categories", icon: <ClassIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/settings", title: "Settings", icon: <SettingsIcon style={{ fontSize: 15, paddingRight: 4 }}/> },
    { link: "/reports", title: "Reports", icon: <AssessmentIcon style={{ fontSize: 15, paddingRight: 4 }}/> }
  ];