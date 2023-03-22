import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid, Tab, Tabs, TextField } from '@mui/material';
import { Container } from '@mui/system';


export default function Translator() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="translator">
      <CardContent>
        <Grid container justifyContent="center" direction="row" spacing={0}> 
          <Grid item xs={2}>
            <Grid item>
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

            <Grid item>
              <TextField id="standard-basic" label="Eingabe" variant="standard" />
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem>
            
          </Divider>
          <Grid item xs={2}>
            <Grid item>
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
            <Grid item alignContent="start">
              <TextField id="standard-basic" label="Eingabe" variant="standard" />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>

      </CardActions>
    </Card>
  


  );
}