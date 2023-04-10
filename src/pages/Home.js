import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import Translator from './components/Translator';
import { Container } from '@mui/system';
import { Card, Grid, Typography } from '@mui/material';


function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="Home">
                <main>
                    <div>
                        <Translator></Translator>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Home;