// import red from "@material-ui/core/colors/red";
// import purple from "@material-ui/core/colors/purple";

export const dark = {
  name:'custDark',
  typography: {
    fontFamily: ["Roboto"],
    // fontSize:12
  },
  status: {
    danger: "#000000",

  },
  palette: {
    text:{primary:'#000000'},
    primary: { main: "#202023", light: "#202023", dark: "#19191b",contrastText:'#79797a'},
    secondary: { main: "#808080", light: "#d4d4d4", dark: "#68686e",contrastText:'#79797a' },
  },
  tableRowsOdd:"#c4c4c4"
};

export const light = {
  name:'custLight',
  status: {
    danger: "#3f48cc",
  },
  palette: {
    text:{primary:'#3f48cc'},
    primary: { main: "#007acc", light: "#007acc", dark: "#0075ff",contrastText:'#e7ecfa'},
    secondary: { main: "#f3f3f3", light: "#bfd6ed", dark: "#67bcf5",contrastText:'#e7ecfa' },
  },
  tableRowsOdd:"#bfd6ff"
};


