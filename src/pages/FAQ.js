import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'

function FAQ() {

    return (
        <React.Fragment>
        <CssBaseline />
        <div>
            <main>
                <div>
                    <Container>
                        <Typography variant='h2' align='center'>Hier kommt die FAQ rein</Typography>
                    </Container>
                </div>
            </main>
        </div>
    </React.Fragment>
    );
}

export default FAQ;