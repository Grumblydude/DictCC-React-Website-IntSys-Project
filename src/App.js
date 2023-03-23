import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import FAQ from './pages/FAQ';
import Vokabeltrainer from './pages/Vokabeltrainer';
import Community from './pages/Community';
import LogIn from './pages/LogIn';

function App() {
  return (
    <Routes>
      <Route path="Home" element={<Home></Home>} />
      <Route path="FAQ" element={<FAQ></FAQ>} />
      <Route path="Vokabeltrainer" element={<Vokabeltrainer></Vokabeltrainer>}/>
      <Route path="Community" element={<Community></Community>} />
      <Route path="Log In" element={<LogIn></LogIn>}/>
      <Route path="*" element={
      <div>
        This page does not exist
        <h2>404</h2>
        <Link to='Home'>Back Home</Link>
      </div>} />
    </Routes>
  );
}

export default App;
