import { createStyles, Theme } from "@material-ui/core/styles";
import Background from "../../assets/images/pos-bg.jpg";

export default (theme: Theme) => {
  return createStyles({
    page: {
      margin: "auto",
      minWidth: 500,
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  });
};
