import './App.css';
import * as React from 'react';
import { RouterProvider, createBrowserRouter, useRoutes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import Router from './routes/Router';

 
const theme = createTheme({
  palette: {
    
    primary: {
      light: '#DCE5F3', 
      main: '#1D88ED', 
      dark: '#1D88ED', 
      grey: '#5D5D5D',
      contrastText: '#fff', // Text color to use on top of the primary color
    },
    secondary: {
      light: '#a5d6a7', // Lighter secondary green
      main: '#81c784', // Secondary green color
      dark: '#519657', // Darker secondary green
      contrastText: '#000', // Text color to use on top of the secondary color
    },
    error: {
      main: '#f44336', // Red color for errors
    },
    background: {
      white: '#fff', // White background
      default: '#F6F5F2', // Very light green background
      paper: '#fff', // Light green for paper elements
    },
  },
});

function App() {
  const routing = createBrowserRouter(Router);
  return ( 
    <ThemeProvider theme={theme}>
      <ToastContainer /> 
      {/* {routing} */}
      <RouterProvider router={routing}/>
    </ThemeProvider>
  );
}

export default App;
