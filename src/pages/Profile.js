import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, Divider, Grid, Stack, Typography, Button, IconButton, Dialog, DialogContent, DialogTitle, DialogActions, inputLabelClasses } from '@mui/material';
import ToggleButton from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ModeEdit } from '@mui/icons-material';
import { Icon } from '@mui/material';
import { icons } from '@mui/icons-material';
import { Container, height } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import Profilekarte from './components/Profilekarte';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState } from 'react';



import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'

export default function Profile() {



    const [editMode,toggleEditMode] = React.useState(false);

    const [cards, setCards] = useState([
        { id: 1, name: 'Comes From' },
        { id: 2, name: "Lives in" },
        { id: 3, name: "Voting Power" },
        { id: 4, name: "Contributions" },
        { id: 5, name: "Speaks" },
        { id: 6, name: "Speaks" },
        { id: 7, name: "Speaks" },
        { id: 8, name: "Total Score" },
        { id: 9, name: "Member Since" }
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

    return(
        <React.Fragment>
        <CssBaseline />
        <Stack direction="column" padding={15} spacing={2}>
        <Grid container spacing={2} sx={{ width: '80%', margin: 'auto' }}>
            <Grid item>
                <Avatar
                alt="Jeff Muskberg"
                src="../resources/cursedElon.jpg"
                sx={{ width: 210, height: 210 }}
                />
            </Grid>
                <Grid item>
                    <TextField
                    name="ProfileName"
                    variant="standard"
                    disabled={!editMode}
                    fullWidth
                    defaultValue="Imarichboy(Jeff Muskberg)"
                    />
                    <TextField
                    name="InfoText"
                    multiline
                    variant="standard"
                    disabled={!editMode}
                    fullWidth
                    defaultValue="Im rich af lol"
                    />
                    <ToggleButton
                    value="ProfileEdit"
                    selected={editMode}
                    onClick={() => toggleEditMode(!editMode)}
                    >
                    Edit
                    <ModeEdit />
                    </ToggleButton>
                </Grid>
            </Grid>
            <Divider variant='middle'/>
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
                        <Profilekarte
                            name={card.name}
                            onDelete={() => handleDeleteCard(card.id)}
                        />
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
                                Add Card
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
        </Grid>
            
        </Stack>
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
        </React.Fragment>
    )
}