import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointment = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(40, 75, 91,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointment} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={doctor} alt="" style={{ marginTop: '-220px' }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h5" sx={{ color: '#4fe5ca', my: 3 }}>
                                APPOINTMENT
                            </Typography>
                            <Typography variant="h4" sx={{ color: 'white' }}>
                                Make an appointment today
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'white', my: 5 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore quibusdam exercitationem itaque consectetur sequi atque modi veniam! Repudiandae, unde!
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: '#4fe5ca' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;