import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { fontSize, colors } from "../../utils/Variables";

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

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  tab: {
    textTransform: "uppercase",
    width: "auto",
    height: "auto",
    fontWeight: 500,
    fontSize: fontSize.normal,
    color: colors.darkGrey,
    backgroundColor: colors.lightGrey,
    borderBottom: "3px solid green",
    margin: "0 4px",
    "&:hover": {
      backgroundColor: colors.darkGrey,
      color: colors.lightGrey
    }
  },
  selected: {
    backgroundColor: colors.darkGrey,
    borderBottom: "3px solid red",
    color: colors.lightGrey
  }
}));

export const POSTabs: React.FC<{
  tabs: string[];
  value: number;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}> = ({ tabs = [], value = 0, children, onChange = () => {} }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Tabs value={value} onChange={onChange}>
          {tabs.map(e => {
            if (e !== "") {
              return (
                <Tab
                  classes={{
                    selected: classes.selected
                  }}
                  key={e}
                  className={classes.tab}
                  label={e}
                  {...a11yProps(0)}
                />
              );
            } else return null;
          })}
        </Tabs>
      </div>
      {children && Array.isArray(children) ? (
        children.map((child, index) => (
          <TabPanel key={index} value={value} index={index}>
            {child}
          </TabPanel>
        ))
      ) : (
        <TabPanel>{children}</TabPanel>
      )}
    </div>
  );
};
