import { createStyles, Theme } from "@material-ui/core/styles";
import { colors, fontSize } from "../../utils/Variables";

export default (theme: Theme) => {
  return createStyles({
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
  });
};
