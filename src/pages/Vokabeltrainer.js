import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import { Container, height } from '@mui/system';
import {Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Vokabeltrainer() {

    return (
        <React.Fragment>
        <CssBaseline />
        <div className="Home">
            <main>
                <div>
                    <Container minWidth="xs">
                    <Typography variant='h2' align='center'>Vokabeltrainer</Typography>
                        <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={4} padding={1}>
                            <Grid item >
                                <Card style={{ width: 202, height: 216 }}> Card 1</Card>
                            </Grid>
                            <Grid item>
                                <Card style={{ width: 202, height: 216 }}> Card 2</Card>
                            </Grid>
                            <Grid item>
                                <Card style={{ width: 202, height: 216 }}> Card 3</Card>
                            </Grid>
                            <Grid item>
                                <Card style={{ width: 202, height: 216 }}> Card 4</Card>
                            </Grid>
                            <Grid item>
                                <Card style={{ width: 202, height: 216 }}> Card 5</Card>
                            </Grid>
                            <Grid item>
                                <Card style={{ width: 202, height: 216 }}> Card 6</Card>
                            </Grid>
                            <Grid item>
                                <Card style={{ width: 202, height: 216 }}> Card 7</Card>
                            </Grid>
                        </Grid>
                        
                    </Container>
                </div>
            </main>
        </div>
    </React.Fragment>
    );
}

export default Vokabeltrainer;