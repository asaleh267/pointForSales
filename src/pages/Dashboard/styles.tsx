import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => {
  return createStyles({
    dashboardPaper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
      margin: 8
    },
    divider: {
      margin: theme.spacing(2, 0)
    }
  });
}
