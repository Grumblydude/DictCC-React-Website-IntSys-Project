import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import FAQ from './pages/FAQ';
import Vokabeltrainer from './pages/Vokabeltrainer';
import Community from './pages/Community';
import LogIn from './pages/LogIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';

{/*This is the default theme*/}
const theme = createTheme({
  palette: {
    background: {
      default: '#FFFBFF', // slight gray
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="Home" element={<Home></Home>} />
      <Route path="FAQ" element={<FAQ></FAQ>} />
      <Route path="Vokabeltrainer" element={<Vokabeltrainer></Vokabeltrainer>}/>
      <Route path="Community" element={<Community></Community>} />
      <Route path="LogIn" element={<LogIn></LogIn>}/>
      <Route path="*" element={
      <div>
        This page does not exist
        <h2>404</h2>
        <Link to='Home'>Back Home</Link>
      </div>} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
