import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "../../../../../constants/variables";

export default (theme: Theme) => {
  return createStyles({
    title: {
      backgroundColor: "#f5f5f5",
      fontWeight: "bold",
      color: colors.darkGrey,
      padding: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    tableCell: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    greyBackground: { backgroundColor: "#f5f5f5" },
  });
};
