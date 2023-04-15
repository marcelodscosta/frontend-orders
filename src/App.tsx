import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRoutes } from './AppRoute';



const theme = createTheme();


export const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <AppRoutes />

    </ThemeProvider>
  )
}