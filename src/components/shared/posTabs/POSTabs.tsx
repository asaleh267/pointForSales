import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import HomeIcon from "@material-ui/icons/HomeOutlined";


function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export interface POSTabsProps {
  tabs: any[];
  value?: string;
  onChange?: (value: string) => void;
  add?: boolean;
  remove?: boolean;
  all?: boolean;
  onAddTab?: () => void;
  onRemoveTab?: () => void;
}
export const POSTabsComponent: React.FunctionComponent<
  POSTabsProps & WithStyles<typeof styles>
> = ({
  classes,
  tabs = [],
  value = "",
  children,
  onChange = () => {},
  add,
  remove,
  all,
  onAddTab: addTab = () => {},
  onRemoveTab: removeTab = () => {},
}) => {
  const [selectedTab, setSelectedTab] = React.useState<string>(value);

  const handleTabChange = (event: React.ChangeEvent<{}>, value: string) => {
    setSelectedTab(value);
    onChange(value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabContainer}>
        {tabs.length > 0 && (
          <Tabs value={selectedTab || false} onChange={handleTabChange}>
            {all && (
              <Tab
                value="all"
                classes={{
                  selected: classes.selected,
                  root: classes.tabRoot,
                }}
                key="all"
                className={classes.tab}
                icon={<HomeIcon />}
                {...a11yProps(0)}
              />
            )}
            {tabs.map((tab) => {
              if (tab !== "") {
                return (
                  <Tab
                    value={tab}
                    classes={{
                      selected: classes.selected,
                      root: classes.tabRoot,
                    }}
                    key={tab}
                    className={classes.tab}
                    label={tab}
                    {...a11yProps(0)}
                  />
                );
              } else return null;
            })}
          </Tabs>
        )}
        {(add || remove) && (
          <Tabs value="remove">
            {add && (
              <Tab
                value="add"
                classes={{
                  root: classes.tabRoot,
                }}
                className={classes.tab}
                label="+"
                {...a11yProps(0)}
                onClick={addTab}
              />
            )}
            {remove && (
              <Tab
                value="remove"
                className={classes.tab}
                classes={{
                  root: classes.tabRoot,
                }}
                label="-"
                {...a11yProps(0)}
                onClick={removeTab}
              />
            )}
          </Tabs>
        )}
      </div>
    </div>
  );
};

const StyledPOSTabs = withStyles(styles)(POSTabsComponent);
export { StyledPOSTabs as POSTabs };
