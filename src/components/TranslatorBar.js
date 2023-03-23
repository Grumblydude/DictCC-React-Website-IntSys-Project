import { Divider, Grid, Tab, Tabs } from '@mui/material';
import * as React from 'react';

export default function TranslatorBar() {

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container>
            <Grid style={{ width: 565 }} backgroundColor="limegreen">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="German" />
                        <Tab value="two" label="English" />
                    </Tabs>
            </Grid>
            <Divider orientation='vertical' flexItem></Divider>
            <Grid item backgroundColor="lightblue">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="two" label="German" />
                        <Tab value="one" label="English" />
                    </Tabs>
            </Grid>
        </Grid>

    );
}