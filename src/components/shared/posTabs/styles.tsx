import { createStyles, Theme } from "@material-ui/core/styles";
import { colors, fontSize } from "../../../utils/Variables";

export default (theme: Theme) => {
  return createStyles({
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
    tabRoot: {
      minWidth: 'auto'
    },
    selected: {
      backgroundColor: colors.darkGrey,
      borderBottom: "3px solid red",
      color: colors.lightGrey
    }
  });
}
