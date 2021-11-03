import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointments = ({ date }) => {
    const appointments = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '8:00 am - 9:00 am',
            space: 10
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10:00 am - 11:30 am',
            space: 10
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '5:00 pm - 6:30 pm',
            space: 10
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '7:00 am - 8:30 am',
            space: 10
        },
        {
            id: 5,
            name: 'Teeth Orthodontics',
            time: '8:00 am - 9:00 am',
            space: 10
        },
        {
            id: 6,
            name: 'Teeth Orthodontics',
            time: '8:00 am - 9:00 am',
            space: 10
        },
    ]
    return (
        <Container>
            <Typography variant="h4" sx={{ py: 3 }}>Available Appointments {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    appointments.map(appointment => <Booking
                        key={appointment.id}
                        appointment={appointment}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;