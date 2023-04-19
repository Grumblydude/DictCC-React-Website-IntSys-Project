/* Dict.cc redesign Student Project. React Application using the MUI Component Library
@authors Denis Paskevic, Enrique Rempp
*/

import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import FAQ from './pages/FAQ';
import Vokabeltrainer from './pages/Vokabeltrainer';
import Community from './pages/Community';
import LogIn from './pages/OldLogIn';
import Profile from './pages/Profile';
import ImageTrain from './pages/Vokabeltrainer/ImageTrain';
import StandardTrain from './pages/Vokabeltrainer/StandardTrain';
import SpeedrunTrain from './pages/Vokabeltrainer/SpeedrunTrain';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './pages/css/colors.module.css'
import './pages/css/typography.module.css'
import './pages/css/theme.css'
import './pages/css/tokens.css'
import SignIn from './pages/LogIn';

{/*This is the default theme*/}
const theme = createTheme({
  palette: {
    background: {
      default: '#FFFBFF', // change to #FFFBFF later
    },
  },
});

//React router allows navigation without reloading the whole page
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
      <Route path="SignIn" element={<SignIn></SignIn>}/>
      <Route path="Profile" element={<Profile></Profile>}/>
      <Route path="/Vokabeltrainer/SpeedrunTrain" element={<SpeedrunTrain></SpeedrunTrain>}/>
      <Route path="/Vokabeltrainer/ImageTrain" element={<ImageTrain></ImageTrain>}/>
      <Route path="/Vokabeltrainer/StandardTrain" element={<StandardTrain></StandardTrain>}/>
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
