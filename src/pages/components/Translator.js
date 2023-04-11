/*TODO:
Fix the bug where autocomplete doesnt update the value. However this low prio since the other features need to be installed.

*/

import { Autocomplete, Card, Button, Grid, TextField, Tabs, Tab, Box, Typography, Divider, Container, CardContent, Paper, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { inputLabelClasses } from "@mui/material/InputLabel";

export default function Translator() {

  const examples = require("./examples");

  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('de');
  const [inputText, setInputText] = useState('');
  const [showAccordion, setShowAccordion] = useState(false);

  const handleSourceLanguageChange = (event, newValue) => {
    if (newValue !== targetLanguage) {
      swapLanguages();
      setSourceLanguage(newValue);
    } else {
      swapLanguages();
      setTargetLanguage(sourceLanguage);
      setSourceLanguage(newValue);
    }
  };

  const handleTargetLanguageChange = (event, newValue) => {
    if (newValue !== sourceLanguage) {
      swapLanguages();
      setTargetLanguage(newValue);
    } else {
      swapLanguages();
      setSourceLanguage(targetLanguage);
      setTargetLanguage(newValue);
    }
  };

  const resultTextColor = () => {
    if (getTranslation() === "" || getTranslation() === "Result") {

      return "grey"
    }
    setShowAccordion(true);
    return "black"
  }

  const listLanguageValues = () => {
    if (sourceLanguage === "en") {
      return examples.map((values) => values.english);
    }
    return examples.map((values) => values.german);
  }
  //Start getter for values------------------------------------------------ Redundant shitty codestyle bcuz no time and no experience------------------------------------------
  let translation = "Result";
  const getTranslation = () => {

    if (sourceLanguage === "en") {
      const selectedExample = examples.find((example) => example.english === inputText);
      if (!(selectedExample === undefined)) {
        translation = selectedExample.german;
        return translation;
      }
    } else if (sourceLanguage === "de") {
      const selectedExample = examples.find((example) => example.german === inputText);
      if (!(selectedExample === undefined)) {
        translation = selectedExample.english;
        return translation;
      }
    }
    return translation;
  }

  let definition = "Here goes the definition..."
  const getDefinition = () => {
    if (sourceLanguage === "en") {
      const selectedExample = examples.find((example) => example.english === inputText);
      if (!(selectedExample === undefined)) {
        definition = selectedExample.ENdefinition;
        return definition;
      }
    } else if (sourceLanguage === "de") {
      const selectedExample = examples.find((example) => example.german === inputText);
      if (!(selectedExample === undefined)) {
        definition = selectedExample.GERdefinition;
        return definition;
      }
    }
    return definition;
  }

  let example = "Here goes the example..."
  const getExample = () => {
    if (sourceLanguage === "en") {
      const selectedExample = examples.find((example) => example.english === inputText);
      if (!(selectedExample === undefined)) {
        example = selectedExample.ENexample;
        return example;
      }
    } else if (sourceLanguage === "de") {
      const selectedExample = examples.find((example) => example.german === inputText);
      if (!(selectedExample === undefined)) {
        example = selectedExample.GERexample;
        return example;
      }
    }
    return example;
  }

  let counterexample = "Here goes the translated example..."
  const getCounterExample = () => {
    if (sourceLanguage === "en") {
      const selectedExample = examples.find((example) => example.english === inputText);
      if (!(selectedExample === undefined)) {
        counterexample = selectedExample.GERexample;
        return counterexample;
      }
    } else if (sourceLanguage === "de") {
      const selectedExample = examples.find((example) => example.german === inputText);
      if (!(selectedExample === undefined)) {
        counterexample = selectedExample.ENexample;
        return counterexample;
      }
    }
    return counterexample;
  }

  let wordArray = ["Here goes nothing..."];
  const getwordArray = () => {
    if (sourceLanguage === "en") {
      const selectedExample = examples.find((example) => example.english === inputText);
      if (!(selectedExample === undefined)) {
        wordArray = selectedExample.ENsimilars;
        return wordArray;
      }
    } else if (sourceLanguage === "de") {
      const selectedExample = examples.find((example) => example.german === inputText);
      if (!(selectedExample === undefined)) {
        wordArray = selectedExample.GERsimilars;
        return wordArray;
      }
    }
    return wordArray;
  }
  //------------------------------------------------------------------------------------------
  function swapLanguages() {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    let tempInputText = inputText;
    setInputText(translation);
    translation = tempInputText;
  }

  return (
    <>
      <Box>
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
                      <IconButton onClick={() => { swapLanguages() }} >
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
                      options={listLanguageValues()}
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
                      onChange={(event, value) => setInputText(value)} //inputtext muss sich aktualisieren wenn 
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
                      {getTranslation()}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Container>
      </Box>
      <Box padding={2}>
        <Container>
          <div>
            {showAccordion && ( // render cards if showCards is true

              <Paper elevation={0}>
                <Grid container spacing={0.5} backgroundColor="lightgrey">
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
                        <Typography variant="body1">{getDefinition()}</Typography>
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
                        <Typography variant="h5">{sourceLanguage === "de" ? "Beispiele" : "Examples"}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body1">{getExample()}</Typography>
                        <Typography variant="body2" color={"grey"}>{getCounterExample()}</Typography>
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
                        <Typography variant="h5">{sourceLanguage === "de" ? "Wörterbuch" : "Lexicon"}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                          {getwordArray().map(word => (
                            <Typography
                              variant="body1"
                              sx={{
                                '&:hover': {
                                  color: '#FF8E13',
                                },
                              }}
                            >
                              <div key={word} style={{ padding: '0.5rem' }}>{word}</div>
                            </Typography>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </Paper>

            )}
          </div>
        </Container>
      </Box>
    </>
  );
}