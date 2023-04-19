import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container} from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Vokabelkarte from './components/Vokabelkarte';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'
import { inputLabelClasses } from "@mui/material/InputLabel";


function Vokabeltrainer() {
    const [cards, setCards] = useState([
        { id: 1, name: "DE-EN: Basics" },
        { id: 2, name: "Küchengeräte" },
        { id: 3, name: "Unkreativer Name" },
        { id: 4, name: "Serien" },
        { id: 5, name: "Die lange Liste langer Namen" },
        { id: 6, name: "Informatik" },
        { id: 7, name: "Hallomallo" },
        { id: 8, name: "Ponzi Scheme Lexicon" },
    ]);
    const [open, setOpen] = useState(false); // dialog open state
    const [newCardName, setNewCardName] = useState(""); // new card name state

    const handleDeleteCard = (cardId) => {
        const newCards = cards.filter((card) => card.id !== cardId);
        setCards(newCards);
    };

    const handleClose = () => {
        setOpen(false); // close the dialog
        setNewCardName(""); // reset the new card name
    };

    const handleAddCard = () => {
        setOpen(true); // open the dialog
    };

    const handleAddNewCard = () => {
        const newId = cards.length + 1; // generate new id
        const newCard = { id: newId, name: newCardName };
        const newCards = [...cards, newCard];
        setCards(newCards);
        handleClose(); // close the dialog
    };

    const handleNewCardNameChange = (event) => {
        setNewCardName(event.target.value); // update the new card name
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="Vokabeltrainer">
                <main>
                    <div>
                        <Container>
                            <Typography
                                variant="h2"
                                style={{
                                    fontFamily: "Roboto",
                                    fontSize: 42,
                                    textAlign: "left",
                                    marginTop: 30,
                                }}
                            >
                                Vokabeltrainer
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Roboto",
                                    fontSize: 20,
                                    textAlign: "left",
                                    color: "#D6C3B6",
                                }}
                            >
                                Überblick meiner Vokabeln
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="flex-start"
                                spacing={4}
                                padding={1}
                            >
                                {cards.map((card) => (
                                    <Grid item key={card.id}>
                                        <Vokabelkarte
                                            name={card.name}
                                            onDelete={() => handleDeleteCard(card.id)}
                                        ></Vokabelkarte>
                                    </Grid>
                                ))}
                                <Grid item>
                                    <Card
                                        style={{ width: 202, height: 216 }}
                                        onClick={handleAddCard}
                                    >
                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "100%",
                                            }}
                                        >
                                            <IconButton sx={{ fontSize: "3rem" }}>
                                                <AddCircleOutlineOutlinedIcon fontSize="inherit" />
                                            </IconButton>
                                            <Typography
                                                variant="h6"
                                                color= "#212427"
                                                sx={{ marginTop: 1, fontWeight: "bold" }}
                                            >
                                                Add List
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Add New Card</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="Card Name"
                                        fullWidth
                                        value={newCardName}
                                        onChange={handleNewCardNameChange}
                                        sx={{
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                              borderColor: "orange",
                                            },
                                          }}
                                        InputLabelProps={{
                                            sx: {
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#212427",
                                                    
                                                },
                                            },
                                        }}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} style={{ color: '#212427' }}>Cancel</Button>
                                    <Button onClick={handleAddNewCard} style={{ color: 'orange' }}>Finish</Button>
                                </DialogActions>
                            </Dialog>
                        </Container>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Vokabeltrainer;


