import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid, Tab, Tabs, TextField } from '@mui/material';
import { Container } from '@mui/system';
import TranslatorBar from './TranslatorBar';
import TranslatorTextInput from './TranslatorTextInput';


export default function Translator() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="translator" >
      <CardContent>
        <TranslatorBar></TranslatorBar>
        <Divider></Divider>
        <Grid container>
          {/*TODO!!! USE STYLING THAT ACTUALLY USESA CORRECT MARGIN IN RELATION*/}
          <Grid item style={{ height: 200, width: 565 }}>
            <TranslatorTextInput></TranslatorTextInput>
          </Grid>
          <Divider orientation='vertical' flexItem></Divider>
          <Grid item>
            <TranslatorTextInput></TranslatorTextInput>
          </Grid>
        </Grid>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  
  );
}