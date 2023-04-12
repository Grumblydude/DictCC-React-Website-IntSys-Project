import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, Divider, Grid, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ModeEdit } from '@mui/icons-material';

import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'

export default function Profile() {

    const [editMode,toggleEditMode] = React.useState(true);
    const handleClicktoggleEditMode = () => toggleEditMode(editMode = !editMode)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: 210
      }));

    return(
        <Stack direction="column" padding={15} spacing={2}>
            <Box>
                <Avatar
                    alt="Remy Sharp"
                    src="src\resources\cursedElon.jpg"
                    sx={{ width: 156, height: 156 }}
                />
                <TextField multiline name='ProfileName' variant="standart" disabled={editMode}>Jeff Muskberg</TextField>
                <TextField multiline name='ProfileStats' variant="standart" disabled={editMode}>Real Name:/nTotal Score:/nMember Since:</TextField>
                <TextField multiline name='InfoText' variant="standart" disabled={editMode}>Im rich af lol</TextField>
                <Button variant='outlined' endIcon={<ModeEdit/>} onClick={handleClicktoggleEditMode}>
                    Edit
                </Button>
            </Box>
            <Divider/>
            <Grid container spacing={2}>
                <Grid item xs={3}><Item>Comes From</Item></Grid>
                <Grid item xs={3}><Item>Lives In</Item></Grid>
                <Grid item xs={3}><Item>Voting Power</Item></Grid> 
                <Grid item xs={3}><Item>Contributions</Item></Grid>
                <Grid item xs={3}><Item>Speaks</Item></Grid>
                <Grid item xs={3}><Item>Speaks</Item></Grid>
            </Grid>
        </Stack>
    )
}