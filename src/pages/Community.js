import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import { Container } from '@mui/system';
import {Typography } from '@mui/material';

function Community() {

    return (
        <React.Fragment>
        <CssBaseline />
        <div className="Home">
            <main>
                <div>
                    <Container>
                        <Typography variant='h2' align='center'>Community</Typography>
                    </Container>
                </div>
            </main>
        </div>
    </React.Fragment>
    );
}

export default Community;