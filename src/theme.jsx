import { createTheme } from '@mui/material';

const colorGreen = "#94B49F";
const colorBisque = "#ECB390";

export const theme = createTheme({
  palette: {
    common: {
      green: `${colorGreen}`,
      bisque: `${colorBisque}`,
    },
    primary: {
      main: `${colorGreen}`
    },
    secondary: {
      main: `${colorBisque}`,
    }
  }
})


