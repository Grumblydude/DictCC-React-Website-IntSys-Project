import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import Translator from './components/Translator';
import { Container } from '@mui/system';
import {Grid, Typography } from '@mui/material';

function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="Home">
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
};

export default Home;