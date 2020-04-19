import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ClassIcon from "@material-ui/icons/Class";
import AssessmentIcon from "@material-ui/icons/Assessment";

export const navbarLinks = [
    { link: "/dashboard", title: "POS", icon: <DashboardIcon/> },
    { link: "/product", title: "Product", icon: <CardGiftcardIcon/> },
    { link: "/sales", title: "Sales", icon: <LoyaltyIcon/> },
    { link: "/expense", title: "Expense", icon: <AttachMoneyIcon/> },
    { link: "/categories", title: "Categories", icon: <ClassIcon/> },
    { link: "/settings", title: "Settings", icon: <SettingsIcon/> },
    { link: "/reports", title: "Reports", icon: <AssessmentIcon/> }
  ];