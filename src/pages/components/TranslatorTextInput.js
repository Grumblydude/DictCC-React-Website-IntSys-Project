import { Divider, Grid, Tab, Tabs, TextField } from '@mui/material';
import * as React from 'react';

export default function TranslatorTextInput() {

    return (
        <Grid container padding={1}>
            {/*TODO: STYLE CORRECT MARGINS ETC*/}
            <Grid item>
                <TextField id="standard-basic" label="Eingabe" variant="standard" />
            </Grid>
        </Grid>
 
    );
}