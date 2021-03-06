import { createMuiTheme, PaletteType } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

export const primaryBackgroud = indigo[50];
export const primaryColor = indigo[700];

let themeRaw = createMuiTheme({});

const lightTheme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      head: {
        color: "rgba(0, 0, 0, 0.5)",
      },
      root: {
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
  },
  palette: {
    primary: indigo,
    secondary: {
      light: indigo[100],
      main: indigo[200],
      dark: indigo[300],
      contrastText: "#FFFFFF",
    },
    type: "light",
  },
});

const darkTheme = createMuiTheme({
  overrides: {
    MuiPopover: {
      paper: {
        border: "1px solid rgba(255, 255, 255, 0.12)",
      },
    },
    MuiTableCell: {
      head: {
        color: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  palette: {
    primary: {
      light: indigo[200],
      main: indigo[300],
      dark: indigo[400],
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: indigo[100],
      main: indigo[200],
      dark: indigo[300],
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "#212121",
      default: "#121212",
    },
    type: "dark",
  },
});

export const theme = themeRaw;

export const getTheme = (themeColor: PaletteType) => {
  const themePalette = themeColor === "light" ? lightTheme : darkTheme;
  themeRaw.palette = themePalette.palette;
  themeRaw.overrides = themePalette.overrides;
  return {
    ...themeRaw,
    palette: {
      ...themePalette.palette,
    },
  };
};
