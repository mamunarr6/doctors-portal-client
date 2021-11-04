import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people from '../../../images/people_1.png';

const Testimonials = () => {
    return (
        <div style={{ margin: '50px 0' }}>
            <Container>
                <Typography variant="h6" sx={{ textAlign: 'left', fontSize: 15, mb: 1, color: '#4fe5ca' }}>
                    TESTIMONIALS
                </Typography>
                <Typography variant="h4" sx={{ textAlign: 'left', mb: 4 }}>
                    What's Our Patients <br /> Says
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={1} sx={{ pt: 3, pb: 1, px: 3 }}>
                            <Typography variant="caption" component="div">
                                It is a long established fact that a reader will be distracted by the radable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distibution of lettersm as opposed to using , Content here
                            </Typography>
                            <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', my: 2, gap: 2 }}>
                                <Box sx={{ width: 50 }}>
                                    <img style={{ width: '100%' }} src={people} alt="" />
                                </Box>
                                <Box >
                                    <Typography variant="h6" sx={{ fontSize: 15, color: '#4fe5ca' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption">
                                        California
                                    </Typography>
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={1} sx={{ pt: 3, pb: 1, px: 3 }}>
                            <Typography variant="caption" component="div">
                                It is a long established fact that a reader will be distracted by the radable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distibution of lettersm as opposed to using , Content here
                            </Typography>
                            <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', my: 2, gap: 2 }}>
                                <Box sx={{ width: 50 }}>
                                    <img style={{ width: '100%' }} src={people} alt="" />
                                </Box>
                                <Box >
                                    <Typography variant="h6" sx={{ fontSize: 15, color: '#4fe5ca' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption">
                                        California
                                    </Typography>
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={1} sx={{ pt: 3, pb: 1, px: 3 }}>
                            <Typography variant="caption" component="div" sx={{ color: 'gray' }}>
                                It is a long established fact that a reader will be distracted by the radable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distibution of lettersm as opposed to using , Content here
                            </Typography>
                            <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', my: 2, gap: 2 }}>
                                <Box sx={{ width: 50 }}>
                                    <img style={{ width: '100%' }} src={people} alt="" />
                                </Box>
                                <Box >
                                    <Typography variant="h6" sx={{ fontSize: 15, color: '#4fe5ca' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption">
                                        California
                                    </Typography>
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Testimonials;