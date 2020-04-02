import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => {
  return createStyles({
    gridContainer: {
      padding: "16px",
      minWidth: "400px"
    },
    title: {
      //fontSize: fontSize.large,
      opacity: 0.9,
      textAlign: "center"
    },
    input: {
      width: "100%",
      backgroundColor: "none",
      marginTop: "16px"
    },
    button: {
      textTransform: "none",
      color: "white",
      //fontSize: fontSize.normal,
     // background: colors.darkGreen,
      padding: 8,
      width: "100%"
    },
    cardActions: {
      padding: 0,
      marginTop: 16
    }
  });
}
