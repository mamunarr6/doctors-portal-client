import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import people from '../../../images/people_1.png';

const OurBlog = () => {
    return (
        <div style={{ margin: '50px 0' }}>
            <Container>
                <Typography variant="h6" sx={{ fontSize: 15, mb: 1, color: '#4fe5ca' }}>
                    OUR BLOG
                </Typography>
                <Typography variant="h4" sx={{ mb: 4 }}>
                    From Our Blog News
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ pt: 3, pb: 1, px: 3, height: 220, backgroundColor: '#4fe5ca', color: 'white' }}>
                            <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', my: 2, gap: 2 }}>
                                <Box sx={{ width: 50 }}>
                                    <img style={{ width: '100%' }} src={people} alt="" />
                                </Box>
                                <Box >
                                    <Typography variant="h6" sx={{ fontSize: 15 }}>
                                        Rashed Kabir
                                    </Typography>
                                    <Typography variant="caption">
                                        22 Aug 2018
                                    </Typography>
                                </Box>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ fontSize: 15 }}>
                                Chec at least a doctor in a year for your teeth
                            </Typography>
                            <Typography variant="h4" sx={{ textAlign: 'left', mt: 5, ml: 1 }}>
                                <ArrowRightAltIcon />
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ pt: 3, pb: 1, px: 3, height: 220 }}>
                            <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', my: 2, gap: 2 }}>
                                <Box sx={{ width: 50 }}>
                                    <img style={{ width: '100%' }} src={people} alt="" />
                                </Box>
                                <Box >
                                    <Typography variant="h6" sx={{ fontSize: 15 }}>
                                        Dr. Caudi
                                    </Typography>
                                    <Typography variant="caption">
                                        23 April 2019
                                    </Typography>
                                </Box>
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 15, mb: 1 }}>
                                2 times of brush i a day can keep you healthy
                            </Typography>
                            <Typography variant="caption" component="div">
                                It is a long established fact that a reader will be distracted by the radable content of a page when looking at its layout. The point
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ pt: 3, pb: 1, px: 3, height: 220 }}>
                            <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', my: 2, gap: 2 }}>
                                <Box sx={{ width: 50 }}>
                                    <img style={{ width: '100%' }} src={people} alt="" />
                                </Box>
                                <Box >
                                    <Typography variant="h6" sx={{ fontSize: 15 }}>
                                        Dr. John Mitchel
                                    </Typography>
                                    <Typography variant="caption">
                                        23 April 2019
                                    </Typography>
                                </Box>
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 15, mb: 1 }}>
                                The tooth cancer is taking a challenge
                            </Typography>
                            <Typography variant="caption" component="div" sx={{ color: 'gray' }}>
                                It is a long established fact that a reader will be distracted by the radable content of a page when looking at its layout. The point
                            </Typography>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default OurBlog;