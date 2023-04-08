import { Card, CardHeader, CardContent, Divider, IconButton, Typography } from '@mui/material';
import { Delete, Share, Edit, Favorite } from '@mui/icons-material';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

export default function Vokabelkarte() {
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
                <IconButton sx={{ marginBottom: 2 }}>
                    <PlayArrowOutlinedIcon fontSize='large' />
                </IconButton>
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