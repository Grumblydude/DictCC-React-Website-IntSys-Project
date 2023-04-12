import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/Appbar';
import { Container, height } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Vokabelkarte from './components/Vokabelkarte';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState } from 'react';

import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'

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

    const handleDeleteCard = (cardId) => {
        const newCards = cards.filter((card) => card.id !== cardId);
        setCards(newCards);
    };

    const handleAddCard = () => {
        // logic for adding a new card
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="Home">
                <main>
                    <div>
                        <Container>
                            <Typography variant="h2" style={{ fontFamily: 'Roboto', fontSize: 42, textAlign: 'left', marginTop: 30 }}>
                                Vokabeltrainer
                            </Typography>
                            <Typography sx={{ fontFamily: 'Roboto', fontSize: 20, textAlign: 'left', color: '#FFB77D' }}>
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
                                                <AddCircleOutlineOutlinedIcon fontSize="inherit" onClick={() => handleAddCard("New Card")} />
                                            </IconButton>
                                            <Typography
                                                variant="h6"
                                                sx={{ marginTop: 1, fontWeight: "bold" }}
                                            >
                                                Add List
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Vokabeltrainer;