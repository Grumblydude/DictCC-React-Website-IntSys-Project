import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Card, Divider, Grid, Stack } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ModeEdit } from '@mui/icons-material';

export default function LogIn() {
    const [editMode,toggleEditMode] = React.useState(true);
    const handleClicktoggleEditMode = () => toggleEditMode(editMode = !editMode)
    return(
        <Stack direction="column" spacing={2}>
            <Box>
                <Avatar/>
                <TextField name='ProfileName'></TextField>
                <TextField name='ProfileStats'></TextField>
                <TextField name='InfoText'></TextField>
                <Button variant='outlined' endIcon={<ModeEdit/>}></Button>
            </Box>
            <Divider/>
            <Grid container spacing={2}>
                <Grid xs={16}><Item></Item></Grid>
                <Grid xs={16}><Item></Item></Grid>
                <Grid xs={16}><Item></Item></Grid> 
                <Grid xs={16}><Item></Item></Grid>    
            </Grid>

        </Stack>
    )
}