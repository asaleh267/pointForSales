import { createMuiTheme } from "@material-ui/core";

export const posTheme = createMuiTheme({
  palette: {
    darkGrey: '#34495e',
    lightGrey: '#e2e2e2',
    darkGreen: '#1abc9c',
    lightGreen: '#2ecc71',
    blue: '#3498db',
    purple: '#9b59b6',
    orange: '#e67e22',
    red: '#e74c3c',
    yellow: '#f1c512',
    textColor: '#ecf0f1',
    navy: '#18293d'
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: '8px',
      },
    },
  }
});
