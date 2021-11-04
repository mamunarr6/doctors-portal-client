import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png';

const ExeptionalDentalCare = () => {
    return (

        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '80%' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                    <div>
                        <Typography variant="h3" component="div" sx={{ mb: 3, lineHeight: 1.4, letterSpacing: 2, fontWeight: 700, color: '#4d4d4d' }}>
                            Exeptional Dental <br />
                            Care, On Your Terms
                        </Typography>
                        <Typography variant="p" component="div" sx={{ my: 6, lineHeight: 1.9, color: 'gray', letterSpacing: 1.5, wordSpacing: 2 }}>
                            It is a long established fact that a reader will be distracted by the radable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distibution of lettersm as opposed to using , Content here , making it look readable English.Many desktop publishing packages and web page.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#4fe5ca' }}>Learn More</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>

    );
};

export default ExeptionalDentalCare;