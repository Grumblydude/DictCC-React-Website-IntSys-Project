import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import BasicCard from './components/Translator';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
    <div className="App">
      <Appbar></Appbar>
      <BasicCard></BasicCard>

    </div>
    </React.Fragment>
  );
}

export default App;
