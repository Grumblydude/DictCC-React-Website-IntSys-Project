import { Card, Button, Grid, TextField, Tabs, Tab, Box, Typography, Divider, Container, CardContent, Paper, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import axios from 'axios';
import { Autocomplete } from 'materialize-css';

export default function Translator() {

  const [sourceLanguage, setSourceLanguage] = useState('de');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [inputText, setInputText] = useState('');
  const [detectLanguageKey, setdetectedLanguageKey] = useState('')
  const [languagesList, setLanguagesList] = useState([])
  const [selectedLanguageKey, setLanguageKey] = useState('')
  const [resultText, setResultText] = useState('');

  const [showCards, setShowCards] = useState(false);

  const handleSourceLanguageChange = (event, newValue) => {
    if (newValue !== targetLanguage) {
      setSourceLanguage(newValue);
    } else {
      setTargetLanguage(sourceLanguage);
      setSourceLanguage(newValue);
    }
  };

  const handleTargetLanguageChange = (event, newValue) => {
    if (newValue !== sourceLanguage) {
      setTargetLanguage(newValue);
    } else {
      setSourceLanguage(targetLanguage);
      setTargetLanguage(newValue);
    }
  };


  const getLanguageSource = () => {
    axios.post(`https://libretranslate.de/detect`, {
      q: inputText
    })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language)
      })
  }

  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`)
      .then((response) => {
        setLanguagesList(response.data)
      })

    getLanguageSource()
  }, [inputText])

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value)
  }

  const translateText = () => {
    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey
    }
    axios.post(`https://libretranslate.de/translate`, data)
      .then((response) => {
        setResultText(response.data.translatedText)
        setShowCards(true);
      })
  }

  return (
    <>
      <Container>
        <Card sx={{ marginTop: '3rem' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tabs
                    value={sourceLanguage}
                    onChange={handleSourceLanguageChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ flexGrow: 0.595, '& .Mui-selected': { color: '#FF8E13' }}}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#FF8E13"
                      }
                    }}
                  >
                    {/*<Tab label={detectLanguageKey} />*/}
                    <Tab label="English" value="en" />
                    <Tab label="German" value="de" />
                  </Tabs>
                  <Typography variant="h6" component="span" sx={{ display: 'flex', alignItems: 'center', marginX: 0 }}>
                    <IconButton>
                      <SyncAltOutlinedIcon onClick={() => {
                        setSourceLanguage(targetLanguage);
                        setTargetLanguage(sourceLanguage);
                      }} />
                    </IconButton>
                  </Typography>
                  <Tabs
                    value={targetLanguage}
                    onChange={handleTargetLanguageChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ flexGrow: 0.52, '& .Mui-selected': { color: '#FF8E13' }}}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#FF8E13"
                      }
                    }}
                  >
                    <Tab label="English" value="en" />
                    <Tab label="German" value="de" />
                  </Tabs>
                  <Typography variant="h6" component="span" sx={{ display: 'flex', alignItems: 'center', marginX: 1.5 }}>
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                  </Typography>
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
                    onChange={(e) => setInputText(e.target.value)}
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
                    value={resultText}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
      {/*Temporary Language Selection TODO: DELETE AFTER TABS ARE DONE*/}
      <select className="language-select" onChange={languageKey}>
        <option>Please Select Temporary TARGET Language..</option>
        {languagesList.map((language) => {
          return (
            <option value={language.code}>
              {language.name}
            </option>
          )
        })}
      </select>
      <Button
        onClick={translateText}
      > Translate</Button>
      <Container>
        <div>
          {showCards && ( // render cards if showCards is true

            <Paper>
              <Grid container spacing={0.5}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreOutlinedIcon />}
                      aria-controls="definition-content"
                      id="definition-header"
                    >
                      <Typography variant="h5">Definition</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">Here goes the definition...</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreOutlinedIcon />}
                      aria-controls="woerterbuch-content"
                      id="woerterbuch-header"
                    >
                      <Typography variant="h5">Wörterbuch</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">Here goes the Wörterbuch...</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreOutlinedIcon />}
                      aria-controls="beispiele-content"
                      id="beispiele-header"
                    >
                      <Typography variant="h5">Beispiele</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">Here goes the Beispiele...</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </Paper>

          )}
        </div>
      </Container>
    </>
  );
}