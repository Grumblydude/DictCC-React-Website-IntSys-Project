import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import Translator from './components/Translator';
import { Container } from '@mui/system';
import { Button, Card, Grid, Typography } from '@mui/material';
import Transbar from './components/TranslatorBar';
import TranslatorTextInput from './components/TranslatorTextInput';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
    <div className="App">
      <Appbar position="relative"></Appbar>
      <main>
        <div>
          <Container minWidth="xs">
            <Typography variant='h2' align='center'>Roboto?</Typography>
            <Translator></Translator>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                {/*Hier kommt noch zeug hin*/}
                </Grid>
                <Grid item>
                {/*Hier kommt noch zeug hin*/}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>


    </div>
    </React.Fragment>
  );
}

export default App;
