import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import { Container } from '@mui/system';
import {Typography } from '@mui/material';


function Vokabeltrainer() {

    return (
        <React.Fragment>
        <CssBaseline />
        <div className="Home">
            <main>
                <div>
                    <Container minWidth="xs">
                        <Typography variant='h2' align='center'>Vokabeltrainer!!</Typography>
                    </Container>
                </div>
            </main>
        </div>
    </React.Fragment>
    );
}

export default Vokabeltrainer;