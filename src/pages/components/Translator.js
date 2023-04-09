/*TODO:
Translator bekommt zurzeit nur das array von examples und checkt deren value. Jedoch muss erstmal geschaut werden,
von welcher richtung man kommt. Sprich wenn deutsch die sprache grad, dann muss auch deutsch zu englisch überall gesetzt werden.
Vice Versa.

Die ganzen tauschereien habe ich bisjetzt nicht implementiert.
An sich funktioniert es aber schonmal wie intended. In die Definition etc. implementiere ich erst, wenn das Programm weiß,
wann was benutzt werden muss etc. aber erst am montag das machen. Heute schon hirn frittiert.

Optisch sollte es erstmal so passen, am ende nochmal finetuning mit sx/css.



*/



import { Autocomplete, Card, Button, Grid, TextField, Tabs, Tab, Box, Typography, Divider, Container, CardContent, Paper, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import axios from 'axios';
import examples from './examples';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from '@mui/material/styles';
export default function Translator() {
  const examples = require("./examples");

  const [sourceLanguage, setSourceLanguage] = useState('de');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [inputText, setInputText] = useState('');
  const [showAccordion, setShowAccordion] = useState(false);
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

  const resultTextColor = () => {
    if (giveGermanTranslation() === "" || giveGermanTranslation() === "Result") {
      
      return "grey"
    }
    setShowAccordion(true);
    return "black"
  }

  const giveGermanTranslation = () => {
    const selectedExample = examples.find((example) => example.value === inputText);
    if (selectedExample) {
      return selectedExample.german;
    } else {
      return "Result";
    }
  };
  const giveGERdefinition = () => {
    const selectedExample = examples.find((example) => example.value === inputText);
    if (selectedExample) {
      return selectedExample.GERdefinition;
    } else {
      return "Keine Definition gefunden :C";
    }
  };
  const giveENdefinition = () => {
    const selectedExample = examples.find((example) => example.value === inputText);
    if (selectedExample) {
      return selectedExample.ENdefinition;
    } else {
      return "No Definition found :C";
    }
  };
  const giveGERexample = () => {
    const selectedExample = examples.find((example) => ((example.value) || (example.german)) === inputText);
    if (selectedExample) {
      return selectedExample.GERexample;
    } else {
      return "Kein Beispiel vorhanden";
    }
  };
  const giveENexample = () => {
    const selectedExample = examples.find((example) => ((example.value) || (example.german)) === inputText);
    if (selectedExample) {
      return selectedExample.ENexample;
    } else {
      return "No examples found";
    }
  };

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
                    sx={{ flexGrow: 0.595, indicator: { backgroundColor: '#FF8E13 !important' }, '& .Mui-selected': { color: '#FF8E13 !important' } }}
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
                    <IconButton onClick={() => {
                      setSourceLanguage(targetLanguage);
                      setTargetLanguage(sourceLanguage);
                    }} >
                      <SyncAltOutlinedIcon />
                    </IconButton>
                  </Typography>
                  <Tabs
                    value={targetLanguage}
                    onChange={handleTargetLanguageChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ flexGrow: 0.52, indicator: { backgroundColor: '#FF8E13' }, '& .Mui-selected': { color: '#FF8E13' } }}
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
                  <Autocomplete
                    fullWidth
                    id="textinput1"
                    freeSolo
                    options={examples.map((values) => values.value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          disableUnderline: true,
                        }}
                        InputLabelProps={{
                          ...params.InputLabelProps,
                          sx: {
                            [`&.${inputLabelClasses.shrink}`]: {
                              color: "#FF8E13",
                            },
                          },
                        }}
                        label="Input Text"
                        variant="standard"
                        value={inputText}
                      />
                    )}
                    onChange={(event, value) => setInputText(value)}
                  />
                </Box>
              </Grid>
              <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
              <Grid item xs={6} >
                <Box marginLeft={1} padding={1} sx={{ display: 'flex', flexDirection: 'row', height: '200px ' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      width: '100%',
                      height: '100%',
                      padding: '20px 0px',
                      overflow: 'auto',
                      color: resultTextColor
                    }}
                  >
                    {giveGermanTranslation()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
      <Container>
        <div>
          {showAccordion && ( // render cards if showCards is true

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