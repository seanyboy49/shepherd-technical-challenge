import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ee7682",
      light: "#fcb936",
    },
    secondary: {
      main: "#25262b",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
