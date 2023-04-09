import SignIn from "./components/SignIn";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  )
}