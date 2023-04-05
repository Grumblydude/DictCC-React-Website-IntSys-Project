import { Grid, TextField, Tabs, Tab, Box, Typography, Divider } from '@mui/material';
import { useState } from 'react';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';

export default function Translator() {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');

  const handleSourceLanguageChange = (event, newValue) => {
    setSourceLanguage(newValue);
  };

  const handleTargetLanguageChange = (event, newValue) => {
    setTargetLanguage(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tabs
              value={sourceLanguage}
              onChange={handleSourceLanguageChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ flexGrow: 0.5 }}
            >
              <Tab label="English" value="en" />
              <Tab label="German" value="de" />
            </Tabs>
            <Typography variant="h6" component="span" sx={{ display: 'flex', alignItems: 'center', marginX: 0 }}>
              <SyncAltOutlinedIcon />
            </Typography>
            <Tabs
              value={targetLanguage}
              onChange={handleTargetLanguageChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ flexGrow: 0.5 }}
            >
              <Tab label="English" value="en" />
              <Tab label="German" value="de" />
            </Tabs>
          </Box>

          <Divider sx={{ marginY: 0 }} />
        </Grid>

        <Grid item xs={6}>
          <Box marginLeft={1} padding={1} sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
            <TextField
              rows={6}
              fullWidth
              multiline
              label="Original Text"
              variant="standard"
              sx={{ height: '100%' }}
              InputProps={{ disableUnderline: true }}
            />
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
        <Grid item xs={6} >
          <Box marginLeft={1} padding={1} sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
            <TextField
              rows={6}
              fullWidth
              multiline
              label="Result"
              variant="standard"
              sx={{ height: '100%' }}
              InputProps={{ disableUnderline: true }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
