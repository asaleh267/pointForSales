import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "../../../../../constants/variables";

export default (theme: Theme) => {
  return createStyles({
    row: {
      borderSpacing: '0 8px',
      backgroundColor: colors.lightGrey
    },
    button :{
      width: 28,
      height: 28,
      minWidth: 28
    },
    quantityContainer: {
      display: "flex",
      alignItems: "stretch",
      justifyContent: "space-between",
      width: 100,
    },
    input: {
      width: 28,
      textAlign: "center"
    },
    deleteButton: {
      borderRadius: "50%",
      width: 28,
      height: 28,
      minWidth: 28
    },
    deleteIcon: {}
  });
}
