
import { Box, Card, CardHeader, CardContent, Divider, IconButton, Typography, Icon } from '@mui/material';
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

export default function Profilekarte(props) {
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

    const RandomIcon =() => {
        const iconNames = Object.keys(icons);
        const randomIconName = iconNames[Math.floor(Math.random() * iconNames.length)];
        const RandomIconComponent = icons[randomIconName];
        return <Icon component={RandomIconComponent} />;
      }

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
                <Icon>RandomIcon</Icon>
            </CardContent>
        </Card>
    );
};