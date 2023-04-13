import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, Divider, Grid, Stack, Typography, Button, IconButton, Dialog, DialogContent, DialogTitle, DialogActions, inputLabelClasses, AppBar } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { ModeEdit } from '@mui/icons-material';
import { LocalPolice,MilitaryTech,Flag,Info,Save } from '@mui/icons-material';
import { Container, height } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import Profilekarte from './components/Profilekarte';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';



import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'

export default function Profile() {

    const [loggedIn,setLoggedIn] = React.useState(true)
    const [editMode,toggleEditMode] = React.useState(false);
    const [variant, setVariant] = React.useState("standard");
    const handletoggleEditmode = () => {
        toggleEditMode(!editMode)
        setVariant(editMode ? "standard" : "outlined")
    }
    
    const [profileName, setProfileName] = React.useState("Imarichboy(Jeff Muskberg)")
    const [profileInfo, setProfileInfo] = React.useState("Im rich af lol")

    const [cards, setCards] = useState([
        { id: 1, name: 'Comes From', type:<Flag style={{fontSize:90}}/>},
        { id: 2, name: "Lives in", type:<Flag style={{fontSize:90}}/>},
        { id: 3, name: "Voting Power", type:<Info style={{fontSize:90}}/> },
        { id: 4, name: "Contributions", type:<Info style={{fontSize:90}}/> },
        { id: 5, name: "Speaks German", type:<MilitaryTech style={{fontSize:90}}/> },
        { id: 6, name: "Speaks English", type:<MilitaryTech style={{fontSize:90}}/> },
        { id: 7, name: "Speaks Spanish", type:<LocalPolice style={{fontSize:90}}/> },
        { id: 8, name: "Total Score", type:<Info style={{fontSize:90}}/> },
        { id: 9, name: "Member Since", type:<Info style={{fontSize:90}}/> }
    ]);

    const [open, setOpen] = useState(false); // dialog open state

    const [newCardName, setNewCardName] = useState(""); // new card name state
    const [newCardType, setNewCardType] = useState("");

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
        const newCard = { id: newId, name: newCardName, type: newCardType };
        const newCards = [...cards, newCard];
        setCards(newCards);
        handleClose(); // close the dialog
    };

    const handleNewCardNameChange = (event) => {
        setNewCardName(event.target.value); // update the new card name
    };

    const handleNewCardTypeChange = (event) => {

        if(event.target.value == 'INFO'){
            setNewCardType(<Info style={{fontSize:90}}/>)
        }else if(event.target.value == 'BADGE'){
            setNewCardType(<LocalPolice style={{fontSize:90}}/>)
        }else if(event.target.value == 'BADGE2'){
            setNewCardType(<MilitaryTech style={{fontSize:90}}/>)
        }else if(event.target.value == 'FLAG'){
            setNewCardType(<Flag style={{fontSize:90}}/>)
        }

    };


    const mOptions = [
        {
          value: 'INFO',
          label: 'i',
        },
        {
          value: 'BADGE',
          label: '*',
        },
        {
          value: 'BADGE2',
          label: '**',
        },
        {
          value: 'FLAG',
          label: 'Flag',
        },
      ];

    return(
        <React.Fragment>
        <CssBaseline />
        <Stack direction="column" padding={15} spacing={2}>
        <Grid container spacing={2} sx={{ width: '80%', margin: 'auto' }}>
            <Grid item>
                <Avatar
                alt={profileName}
                src="../resources/cursedElon.jpg"
                sx={{ width: 210, height: 210 }}
                />
            </Grid>
                <Grid item>

                    <TextField
                    name="ProfileName"
                    variant={variant}
                    InputProps={{required:true, readOnly: !editMode, style:{fontSize: 25, fontWeight: 600}}}
                    fullWidth
                    placeholder="Profilename(Real Name)"
                    defaultValue={profileName}
                    onChange ={(event) => {
                        setProfileName(event.target.value);
                      }}
                    />
                    <TextField
                    name="InfoText"
                    multiline
                    variant={variant}
                    InputProps={{readOnly: !editMode, disableUnderline: !editMode}}
                    fullWidth
                    placeholder="Present yourself"
                    defaultValue={profileInfo}
                    onChange ={(event) => {
                        setProfileInfo(event.target.value);
                      }}
                    />
                    {loggedIn&& <ToggleButton
                    value="ProfileEdit"
                    color='primary'
                    selected={editMode}
                    onClick={handletoggleEditmode}
                    sx={{
                        bgcolor: editMode ? 'green' : 'orange',
                        color: 'white',
                        '&:hover': {
                        bgcolor: editMode ? 'darkgreen' : 'darkorange',
                        },
                      }}
                    >
                    {!editMode ? 
                    (<ModeEdit/>)
                    : (<Save/>)
                    }
                    <span style={{ marginLeft: 4 }}>{!editMode ? 'Edit' : 'Save'}</span>
                    </ToggleButton>}
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
                            type={card.type}
                            onDelete={() => handleDeleteCard(card.id)}
                        />
                    </Grid>
                ))}
                {editMode ? (
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
                ):null}
        </Grid>
        
        </Stack>
        {editMode ? (
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
        
                <TextField
                    id="CardType"
                    select
                    label="Select"
                    defaultValue="INFO"
                    helperText="Please select your Card type"
                    variant="standard"
                    fullWidth
                    onChange={handleNewCardTypeChange}
                    >
                    {mOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} style={{ color: '#212427' }}>Cancel</Button>
                <Button onClick={handleAddNewCard} style={{ color: 'orange' }}>Finish</Button>
            </DialogActions>
            </Dialog>
        ):null}
        </React.Fragment>
    )
}