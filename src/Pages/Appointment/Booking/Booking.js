import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ appointment, date }) => {
    const { name, time, space } = appointment;
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 600, color: '#5ce9fd' }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleModalOpen} variant="contained" sx={{ mt: 2, backgroundColor: '#5ce9fd' }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                time={time}
                name={name}
                modalOpen={modalOpen}
                handleModalClose={handleModalClose}
            ></BookingModal>
        </>
    );
};

export default Booking;