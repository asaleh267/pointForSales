import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => {
  return createStyles({
    button: {
      color: "red",
    },
    tableContainer: {
      maxHeight: "300px",
    },
    table: { 
      borderSpacing: "0 8px" 
    },
  });
};
