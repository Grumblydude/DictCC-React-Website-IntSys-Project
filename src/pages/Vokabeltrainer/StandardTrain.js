//Standard Trainer
//@author Denis Paskevic
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Card, Container, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import examples from './examples';
import TrainDialog from './TrainDialog';
import { inputLabelClasses } from "@mui/material/InputLabel";
import FinishDialog from './FinishDialog';

function StandardTrain() {

    const [inputValue, setInputValue] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [inputColor, setInputColor] = useState('');
    const [borderColor, setBorderColor] = useState('darkorange !important');
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [count, setCount] = useState(0);

    const getRandomWord = () => {
        const words = sourceLanguage === 'en' ? examples.filter(example => example.english) : examples.filter(example => example.german);
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    };

    const [currentWord, setCurrentWord] = useState(getRandomWord);

    const handleLanguageChange = (source, target) => {
        setSourceLanguage(source);
        setTargetLanguage(target);
    };


    const handleCheck = () => {
        const isCorrect = inputValue.toLowerCase() === (sourceLanguage === 'en' ? currentWord.german.toLowerCase() : currentWord.english.toLowerCase());
        if (isCorrect) {
            setCount(count + 1);
            setCorrectCount(correctCount + 1);
            setInputColor('green');
            setBorderColor('green');
        } else {
            setInputColor('red');
            setBorderColor('red');
            setCount(count + 1);
            setWrongCount(wrongCount + 1);
        }
        setTimeout(() => {
            setCurrentWord(getRandomWord());
            setInputValue('');
            setInputColor('default');
            setBorderColor('darkorange');
        }, 800);
    };

    const handleCheckWithoutNext = () => {
        const isCorrect = inputValue.toLowerCase() === (sourceLanguage === 'en' ? currentWord.german.toLowerCase() : currentWord.english.toLowerCase());
        if (isCorrect) {
            setInputColor('green');
        } else {
            setInputColor('red');
        }
        setTimeout(() => {

            setInputColor('default');
        }, 800);
    };

    const handleNext = () => {
        const isCorrect = inputValue.toLowerCase() === (sourceLanguage === 'en' ? currentWord.german.toLowerCase() : currentWord.english.toLowerCase());
        if (isCorrect) {
            setCount(count + 1);
            setCorrectCount(correctCount + 1);
        } else{
            setCount(count + 1);
            setWrongCount(wrongCount + 1);
        }
        setCurrentWord(getRandomWord());
        setInputValue('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleCheck();
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "50vh",
                }}
            >
                {(count === 20) &&
                <FinishDialog
                    corrects={correctCount}
                    wrongs={wrongCount}
                    onLanguageChange={handleLanguageChange}
                />
                }
                <TrainDialog
                    sourceLanguage={sourceLanguage}
                    targetLanguage={targetLanguage}
                    onLanguageChange={handleLanguageChange}
                />

                <Typography
                    variant="h2"
                    style={{
                        fontFamily: "Roboto",
                        fontSize: 38,
                        textAlign: "left",
                        marginTop: 30,
                    }}
                >
                     {sourceLanguage === "en" ? "Vocab Training" : "Vokabeltrainer"}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Roboto",
                        fontSize: 20,
                        textAlign: "left",
                        color: "#D6C3B6",
                        marginBottom: 5,
                    }}
                >
                     {sourceLanguage === "en" ? "EN - DE" : "DE - EN"}
                </Typography>
                
                {currentWord && (
                    <Card
                        sx={{
                            padding: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            maxWidth: "600px",
                            width: "100%",
                            position: "relative", // added for positioning of progress bar
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "5px",
                                backgroundColor: "#ccc",
                                position: "absolute",
                                top: "0",
                            }}
                        >
                            <Box
                                sx={{
                                    width: `${(count / 20) * 100}%`, // dynamically set width based on correctCount
                                    height: "100%",
                                    backgroundColor: "#FFA500",
                                }}
                            />
                        </Box>
                        <Typography sx={{ marginBottom: 2, fontSize: 24 }}>
                            {sourceLanguage === "en" ? currentWord.english : currentWord.german}
                        </Typography>
                        <div
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            <TextField
                                value={inputValue}
                                onChange={(event) => setInputValue(event.target.value)}
                                onKeyPress={handleKeyPress}
                                variant="outlined"
                                label={sourceLanguage === "en" ? "German" : "English"}
                                sx={{
                                    marginBottom: 2,
                                    width: "100%",
                                    input: { color: inputColor },
                                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                        borderColor: borderColor,
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        [`&.${inputLabelClasses.shrink}`]: {
                                            color: "#212427",

                                        },
                                    }
                                }}
                            />
                            <Button
                                variant="contained"
                                onClick={handleCheckWithoutNext}
                                sx={{
                                    backgroundColor: "#FFA500",
                                    color: "white",
                                    marginLeft: 1,
                                    "&:hover": {
                                        backgroundColor: "#FFA500"
                                    },
                                    "&:active": {
                                        backgroundColor: "#FFA500"
                                    }
                                }}
                            >
                                 {sourceLanguage === "en" ? "Check" : "Prüfen"}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{
                                    backgroundColor: "#FFA500",
                                    color: "white",
                                    marginLeft: 2,
                                    "&:hover": {
                                        backgroundColor: "#FFA500"
                                    },
                                    "&:active": {
                                        backgroundColor: "#FFA500"
                                    }
                                }}
                            >
                                 {sourceLanguage === "en" ? "Next" : "Weiter"}
                            </Button>
                        </div>
                        <Typography sx={{ marginTop: 2 }}>
                            Correct count: {correctCount}
                        </Typography>
                    </Card>
                )}
                <Button
                    variant="contained"
                    component={NavLink}
                    to="../Vokabeltrainer"
                    sx={{
                        backgroundColor: "#FFA500",
                        color: "white !important",
                        marginTop: 2,
                        "&:hover": {
                            backgroundColor: "#FFA500"
                        },
                        "&:active": {
                            backgroundColor: "#FFA500"
                        }
                    }}
                >
                     {sourceLanguage === "en" ? "Leave" : "Verlassen"}
                </Button>
                <Button
                    variant="contained"
                    onClick={() =>
                        handleLanguageChange(
                            sourceLanguage === "en" ? "de" : "en",
                            targetLanguage === "de" ? "en" : "de"
                        )
                    }
                    sx={{
                        backgroundColor: "#FFA500",
                        color: "white",
                        marginTop: 2,
                        "&:hover": {
                            backgroundColor: "#FFA500"
                        },
                        "&:active": {
                            backgroundColor: "#FFA500"
                        }
                    }}
                >
                    {sourceLanguage === "en" ? "Switch to German" : "Wechsel auf Englisch"}
                </Button>
            </Container>
        </React.Fragment>
    );
}

export default StandardTrain;