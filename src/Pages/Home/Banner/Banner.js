import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}

const verticallyCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '450px'
}

const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ ...verticallyCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography variant="h3" sx={{ my: 3 }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'gray', fontSize: '14px', fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit accusantium aut similique vel vitae quae architecto iure perferendis velit.
                            </Typography>
                            <Button variant="contained" sx={{ my: 2, backgroundColor: '#5ce7ed' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticallyCenter}>
                        <img style={{ width: '300px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;