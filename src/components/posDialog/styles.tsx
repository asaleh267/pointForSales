import { createStyles, Theme } from "@material-ui/core/styles";
import { colors, fontSize } from "../../utils/Variables";

export default (theme: Theme) => {
  return createStyles({
    dialog: {
      minWidth: 720
    },
    dialogTitle: {
      backgroundColor: colors.navy,
      padding: '16px',
      textAlign: 'left',
      color: '#ffffff'
    },
    modalContent: {
      backgroundColor: '#ffffff'   
    }
  });
}
