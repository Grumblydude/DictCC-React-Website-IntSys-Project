/* The Card component used for the Vocab Trainer. The same component is used in the Profile
*/
//@author Denis Paskevic
import { Box, Card, CardHeader, CardContent, Divider, IconButton, Typography } from '@mui/material';
import { Delete, Share, Edit, Favorite } from '@mui/icons-material';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Component, useState } from 'react';
import { Dialog } from '@mui/material';
import ChoiceCards from './ChoiceCards';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import '../css/colors.module.css'
import '../css/typography.module.css'
import '../css/theme.css'
import '../css/tokens.css'

export default function Vokabelkarte(props) {
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
      setIsLiked(!isLiked);
    };

    return (
        <Card sx={{ width: 202, height: 216 }}>
            <Box sx={{borderTop: '3px solid orange', width: '100%', height: 0}} />
            <CardHeader
                title={
                    <Typography
                        fontSize={16}
                        align="center"
                        sx={{
                            width: '170px',
                            //height: '45px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        {props.name}
                    </Typography>}
                sx={{ paddingBottom: 1, marginBottom: 0 }}
            />
            <Divider />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <Typography fontSize={14} align="center" sx={{ marginTop: -1, marginBottom: 1 }}>
                    0/20
                </Typography>
                <IconButton onClick={handleOpen} sx={{fontSize: "3.2rem", marginBottom: 2 }}>
                    <PlayArrowOutlinedIcon fontSize='inherit' />
                </IconButton>
                <Dialog open={open} onClose={handleClose} maxWidth="xl">
                    <ChoiceCards></ChoiceCards>
                </Dialog>

                <div sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', width: '100%', padding: '0px 0' }}>
                    <IconButton>
                        <Delete onClick={props.onDelete}/>
                    </IconButton>
                    <IconButton>
                        <Share />
                    </IconButton>
                    <IconButton>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={handleClick}>
                        {isLiked ? <Favorite /> : <FavoriteBorderOutlinedIcon />}
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};