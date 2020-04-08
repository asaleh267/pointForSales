import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "./styles";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      style={{ padding: 0 }}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export interface POSTabsIProps { 
  tabs: any[];
  value: number;
  onChange?: (value: any) => void;
}
export const POSTabsComponent: React.FunctionComponent<POSTabsIProps &
  WithStyles<typeof styles>> = ({ classes, tabs = [], value = 0, children, onChange = () => {} }) => {  
  const [selectedTab, setSelectedTab] = React.useState(value);

  const handleTabChange = (event: React.ChangeEvent<{}>, value: any) => {
    setSelectedTab(value);
    onChange(value);
  };
  return (
    <div className={classes.root}>
      <div>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          {tabs.map((e, index )=> {
            if (e !== "") {
              return (
                <Tab
                  classes={{
                    selected: classes.selected,
                    root: classes.tabRoot
                  }}
                  key={index}
                  className={classes.tab}
                  label={e}
                  {...a11yProps(0)}
                />
              );
            } else return null;
          })}
        </Tabs>
      </div>
    </div>
  );
};

const StyledPOSTabs = withStyles(styles)(POSTabsComponent);
export { StyledPOSTabs as POSTabs };
