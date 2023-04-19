
// The Dialog which pops up once the training is finished. Currently only shows a count of the numbers and a piechart
//@author Denis Paskevic


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Button,
    Tooltip
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
    Chart,
    PieSeries,
    Title,
    Tooltip as ChartTooltip
} from '@devexpress/dx-react-chart-material-ui';

const COLORS = ['#0088FE', '#FFBB28'];

export default function FinishDialog(props) {
    const { corrects, wrongs } = props;
    const [open, setOpen] = useState(true);
    const [hoverInfo, setHoverInfo] = useState(null);

    const data = [
        { label: 'Correct', value: corrects },
        { label: 'Wrong', value: wrongs },
    ];

    const TooltipContent = () => {
        const { targetItem } = hoverInfo;
        return (
            <div>
                <Typography variant="body1" align="center">
                    {`${targetItem.argument}: ${targetItem.value}`}
                </Typography>
            </div>
        );
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                    <DialogTitle>
                        <Typography variant="h5" align="center">
                            Finished!
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Chart data={data} style={{ width: '50%' }}>
                                <PieSeries
                                    valueField="value"
                                    argumentField="label"
                                    onValueMouseOver={(hoverInfo) => setHoverInfo(hoverInfo)}
                                    onValueMouseOut={() => setHoverInfo(null)}
                                />
                                <ChartTooltip contentComponent={TooltipContent} />
                                <Title text={"You had " + corrects + " correct and " + wrongs + " wrong"} />
                            </Chart>
                        </div>
                    </DialogContent>


                    <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            component={NavLink}
                            to="../Vokabeltrainer"
                            sx={{
                                backgroundColor: "#FFA500",
                                color: "white !important",
                                marginTop: 2,
                                "&:hover": {
                                    backgroundColor: "#FFA500"
                                },
                                "&:active": {
                                    backgroundColor: "#FFA500"
                                }
                            }}
                        >
                            Exit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </React.Fragment>
    );
}