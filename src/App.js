import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import FAQ from './pages/FAQ';
import Vokabeltrainer from './pages/Vokabeltrainer';
import Community from './pages/Community';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import ImageTrain from './pages/ImageTrain';
import StandardTrain from './pages/StandardTrain';
import SpeedrunTrain from './pages/SpeedrunTrain';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './pages/css/colors.module.css'
import './pages/css/typography.module.css'
import './pages/css/theme.css'
import './pages/css/tokens.css'

{/*This is the default theme*/}
const theme = createTheme({
  palette: {
    background: {
      default: 'lightgrey', // change to #FFFBFF later
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
      <Route path="Profile" element={<Profile></Profile>}/>
      <Route path="SpeedrunTrain" element={<SpeedrunTrain></SpeedrunTrain>}/>
      <Route path="ImageTrain" element={<ImageTrain></ImageTrain>}/>
      <Route path="StandardTrain" element={<StandardTrain></StandardTrain>}/>
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
