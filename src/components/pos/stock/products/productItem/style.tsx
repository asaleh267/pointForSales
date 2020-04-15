import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "../../../../../constants/variables";

export default (theme: Theme) => {
  return createStyles({
    productContainer: {
        width: 120,
        height: 120,
        margin: "8px auto",
        borderRadius: theme.spacing(2),
        position: "relative",
        cursor: "pointer"
    },
    productName: {
      paddingTop: theme.spacing(2),
      color: colors.white,
      textTransform: "uppercase",
      position: "absolute",
      width: "100%",
      zIndex: 99,
      whiteSpace: "normal"
    },
    mask: {
      position: "absolute",
      backgroundColor: colors.darkGrey,
      display: "block",
      width: "100%",
      height: "100%",
      top: 0,
      opacity: "0.5",
      borderRadius: theme.spacing(2)
    }
  });
}
