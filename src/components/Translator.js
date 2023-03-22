import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Tab, Tabs, TextField } from '@mui/material';

import "./TranslatorStyle.css";







export default function BasicCard() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="translator" sx={{ minWidth: 275 }}>
      <CardContent>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="German" />
          <Tab value="two" label="English" />
          <Tab value="three" label="Albanian" />
        </Tabs>

        <Divider></Divider>

        <Typography variant="h5" component="div">
        <TextField id="standard-basic" label="Eingabe" variant="standard" />
        </Typography>
      </CardContent>

      <CardActions>

      </CardActions>
    </Card>
  );
}