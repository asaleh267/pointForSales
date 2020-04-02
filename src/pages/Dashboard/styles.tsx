import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => {
  return createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3)
    },
    paper: {
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
