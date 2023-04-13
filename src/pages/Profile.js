import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, Divider, Grid, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ModeEdit } from '@mui/icons-material';

import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'

export default function Profile() {

    const [editMode,toggleEditMode] = React.useState(false);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        width: 202, 
        height: 216
      }));

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
                justifyContent="center"
                alignItems="flex-start"
                spacing={4}
                padding={1}
                >
                {[
                    'Comes From',
                    'Lives In',
                    'Voting Power',
                    'Contributions',
                    'Speaks',
                    'Speaks',
                    'Speaks',
                    'Total Score',
                    'Member since',
                ].map((item) => (
                    <Grid key={item} item xs={3} spacing={2} padding={2}>
                        <Card sx={{width: 202, height: 216 }}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="body2">{item}</Typography>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
        </React.Fragment>
    )
}