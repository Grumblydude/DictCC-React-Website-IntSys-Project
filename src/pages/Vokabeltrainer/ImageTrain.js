import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '../components/Appbar';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

function ImageTrain() {

    return (
        <React.Fragment>
        <CssBaseline />
        <div>
            <main>
                <div>
                    <Container>
                        <Typography variant='h2' align='center'>This Training is not implemented! Only Standard Trainer is currently usable</Typography>
                    </Container>
                </div>
            </main>
        </div>
    </React.Fragment>
    );
}

export default ImageTrain;