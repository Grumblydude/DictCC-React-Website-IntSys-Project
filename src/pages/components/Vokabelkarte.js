import { Card, CardHeader, CardContent, Divider, IconButton, Typography } from '@mui/material';
import { Delete, Share, Edit, Favorite } from '@mui/icons-material';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { useState } from 'react';
import { Dialog} from '@mui/material';
import ChoiceCards from './ChoiceCards';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Vokabelkarte() {
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card sx={{ width: 202, height: 216 }}>
            <CardHeader
                title={<Typography fontSize={16} align="center">Card Name + Second Row </Typography>}
                sx={{ paddingBottom: 0, marginBottom: 0 }}
            />
            <Divider />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography fontSize={14} align="center" sx={{ marginTop: -1, marginBottom: 1 }}>
                    50/500
                </Typography>
                <IconButton onClick={handleOpen} sx={{ marginBottom: 2 }}>
                    <PlayArrowOutlinedIcon fontSize='large' />
                </IconButton>
                <Dialog open={open} onClose={handleClose} maxWidth="xl">
                    <ChoiceCards></ChoiceCards>
                </Dialog>

                <div sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Share />
                    </IconButton>
                    <IconButton>
                        <Edit />
                    </IconButton>
                    <IconButton>
                        <Favorite />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};