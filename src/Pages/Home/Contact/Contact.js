import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
    return (
        <Container sx={{ marginTop: -8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: '#4fe5ca', justifyContent: 'center', color: 'white', py: 2, borderRadius: 2 }}>
                        <Box>
                            <AccessTimeIcon sx={{ fontSize: 60 }} ></AccessTimeIcon>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                                Opening Hours
                            </Typography>
                            <Typography variant="caption" component="div" >
                                Day to Night
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', color: 'white', py: 2, borderRadius: 2, backgroundColor: '#4d4d4d', }}>
                        <Box>
                            <LocationOnIcon sx={{ fontSize: 60 }}></LocationOnIcon>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                                Visit Our Location
                            </Typography>
                            <Typography variant="caption" component="div">
                                Brooklyn, NY10036, United States
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: '#4fe5ca', justifyContent: 'center', color: 'white', py: 2, borderRadius: 2 }}>
                        <Box>
                            <PhoneIcon sx={{ fontSize: 60 }}></PhoneIcon>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                                Contac Us Now
                            </Typography>
                            <Typography variant="caption" component="div" >
                                +98521471455
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;