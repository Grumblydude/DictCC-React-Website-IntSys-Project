import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './css/colors.module.css'
import './css/typography.module.css'
import './css/theme.css'
import './css/tokens.css'

function FAQ() {

    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ marginTop: '64px' }}>
                <Container>
                    <Typography variant='h2' align='center' sx={{ marginTop: '3rem', marginBottom: '3rem' }}>Frequently Asked Questions</Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>What is this website?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This website is a student project in the course "Interactive Systems 1" at University Ulm by the authors Denis Paskevic and Enrique Rempp. The project is not commercially used and is solely for private scientific and educational purposes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>How can I contact the authors?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can contact us via email at Paskevic_Denis@web.de. We would love to hear your feedback and suggestions!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Is the content on this website accurate and reliable?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We strive to provide accurate and reliable content, but please keep in mind that this website is a student project and may contain errors or inaccuracies. We recommend that you double-check any information and code you find here before relying on it.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <img src="https://external-preview.redd.it/WXCRU0oB5f0Tx8HmPj_80no6MclvhPm_t_WKI8KnbuM.jpg?auto=webp&v=enabled&s=68de668fa6b7e33dbb97bfaf524e8020c31bc787" alt="Doge" width="643" height="429" />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FAQ;