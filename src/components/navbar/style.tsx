import { createStyles, Theme } from "@material-ui/core/styles";
import { colors, fontSize } from "../../utils/Variables";

export default (theme: Theme) => {
  return createStyles({
    appBar: {
      fontSize: fontSize.normal,
      height: "80px",
      margin: "auto",
      width: "100%"
    },
    title: {
      fontSize: fontSize.large,
      fontWeight: "bold",
      color: colors.blue,
      marginRight: "16px",
      "&:hover": {
        cursor: "pointer"
      }
    },
    toolbar: {
      minHeight: "40px",
      height: "50px"
    },
    navbar: {
      boxShadow: "1px 1px 10px 0px #AAAABB"
    },
    link: {
        color: colors.darkGrey
    }
  });
}
