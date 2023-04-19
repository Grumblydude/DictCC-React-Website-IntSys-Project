//Container component for debugging reasons
//@author Denis Paskevic
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import '../css/colors.module.css'
import '../css/typography.module.css'
import '../css/theme.css'
import '../css/tokens.css'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxwidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}