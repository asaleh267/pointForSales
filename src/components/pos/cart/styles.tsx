import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => {
  return createStyles({
    cartContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    divider: {
      margin: theme.spacing(1)
    }
  });
}
