import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '../components/Appbar';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

function SpeedrunTrain() {

    return (
        <React.Fragment>
        <CssBaseline />
        <div>
            <main>
                <div>
                    <Container>
                        <Typography variant='h2' align='center'>Speedrun Train Page</Typography>
                    </Container>
                </div>
            </main>
        </div>
    </React.Fragment>
    );
}

export default SpeedrunTrain;