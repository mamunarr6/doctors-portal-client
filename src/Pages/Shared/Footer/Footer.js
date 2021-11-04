import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import footerbg from '../../../images/footer-bg.png';

const footerBg = {
    backgroundImage: `url(${footerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Footer = () => {
    return (
        <div style={footerBg}>
            <Container>
                <Grid container spacing={2} sx={{ textAlign: 'left', color: 'gray', my: 5 }}>
                    <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                                Emergency Dental Care
                            </Typography>
                            <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                                Check Up
                            </Typography>
                            <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                                Treatment of Personal Diseases
                            </Typography>
                            <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                                Tooth Estraction
                            </Typography>
                            <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                                Check UP
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ lineHeight: 2, color: '#4fe5ca' }}>
                            Services
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check Up
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Treatment of Personal Diseases
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Tooth Estraction
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check UP
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check UP
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check UP
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="div" sx={{ lineHeight: 2, color: '#4fe5ca' }}>
                            Oral Health
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check Up
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Treatment of Personal Diseases
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Tooth Estraction
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check UP
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check UP
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Check UP
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="div" sx={{ lineHeight: 2, color: '#4fe5ca' }}>
                            Our Address
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            New York - 101010 Hudson Yards
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Treatment of Personal Diseases
                        </Typography>
                        <Box sx={{ my: 3 }}>
                            <FacebookRoundedIcon sx={{ fontSize: 30, mr: 1, color: '#4fe5ca' }} />
                            <GoogleIcon sx={{ fontSize: 30, mr: 1, color: '#4fe5ca' }} />
                            <TwitterIcon sx={{ fontSize: 30, color: '#4fe5ca' }} />
                        </Box>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2 }}>
                            Call Now
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ lineHeight: 2, backgroundColor: '#4fe5ca', color: 'white', width: 100, py: 1, px: 2, borderRadius: 1 }}>
                            +88011111222
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ my: 3 }}>
                    <Typography variant="h6" sx={{ color: 'gray', fontSize: 15 }}>
                        Copyright 2020 All Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;