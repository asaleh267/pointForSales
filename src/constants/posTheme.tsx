import { createMuiTheme, ThemeOptions } from "@material-ui/core";
interface MyPalette {
  darkGrey: string;
  lightGrey: string;
  darkGreen: string;
  lightGreen: string;
  blue: string;
  purple: string;
  orange: string;
  red: string;
  yellow: string;
  textColor: string;
  navy: string;
}
export interface POSTheme extends ThemeOptions {
  palette: ThemeOptions["palette"] & MyPalette
}
const posThemeOptions: POSTheme = {
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
        padding: '12px 8px',
      },
    },
    MuiButton: {
      iconSizeSmall: {
        margin: 0
      }
    }
  }
};

export const posTheme = createMuiTheme(posThemeOptions);
