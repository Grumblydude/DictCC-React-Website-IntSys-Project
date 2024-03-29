import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import {
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Typography,
    Box,
} from '@mui/material';

export default function TrainDialog(props) {
    const [open, setOpen] = useState(true);

    const handleCardClick = (source, target) => {
        props.onLanguageChange(source, target);
        setOpen(false);
    };

    return (
    <React.Fragment>
        <CssBaseline />
        <div>
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Pick a direction</DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Card
                                onClick={() => handleCardClick('en', 'de')}
                                sx={{ '&:hover': { borderTop: '3px solid orange' } }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}>
                                    <IconButton>
                                        <Typography variant="h6" align="center">
                                            EN -&gt; DE
                                        </Typography>
                                    </IconButton>
                                    <Box
                                        sx={{ borderTop: '2px solid grey', width: '100%', height: 0 }}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                onClick={() => handleCardClick('de', 'en')}
                                sx={{ '&:hover': { borderTop: '3px solid orange' } }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}>
                                    <IconButton>
                                        <Typography variant="h6" align="center">
                                            DE -&gt; EN
                                        </Typography>
                                    </IconButton>
                                    <Box
                                        sx={{ borderTop: '2px solid grey', width: '100%', height: 0 }}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                onClick={() => setOpen(false)}
                                sx={{ '&:hover': { borderTop: '3px solid orange' } }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}>
                                    <IconButton>
                                        <Typography variant="h6" align="center">
                                            EN &lt;-&gt; DE
                                        </Typography>
                                    </IconButton>
                                    <Box
                                        sx={{ borderTop: '2px solid grey', width: '100%', height: 0 }}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Box sx={{ pt: 2 }}>
                            <IconButton onClick={() => setOpen(false)}>Close</IconButton>
                        </Box>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    </React.Fragment>
    );
}