import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "../../../../../../constants/variables";

export default (theme: Theme) => {
  return createStyles({
    actions: {
      display: 'flex',
      width: '100%'
    },
    cancelButton: {
      backgroundColor: colors.red,
      color: colors.white,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      flex: 1,
      margin: 8,
      marginLeft: 0
    },
    paymentButton: {
      backgroundColor: colors.darkGreen,
      color: colors.white,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      flex: 1,
      margin: 8,
      marginRight: 0

    }
  });
}
