import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../../images/appointment-bg.png';
import React from 'react';

const contactUsBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(40, 75, 91,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const ContactUs = () => {



    return (
        <div style={contactUsBg}>
            <Container>
                <Typography variant="h6" sx={{ pt: 5, pb: 2, color: '#4fe5ca', }}>
                    CONTACT US
                </Typography>
                <Typography variant="h4" sx={{ pb: 5, color: 'white' }}>
                    Always Connect with us
                </Typography>
                <Box sx={{ pb: 5 }}>
                    <form >
                        <TextField sx={{ my: 1, width: '60%', backgroundColor: 'white', borderRadius: 1 }}
                            id="outlined-size-normal"
                            placeholder="Email Address"
                        /> <br />
                        <TextField sx={{ my: 1, width: '60%', backgroundColor: 'white', borderRadius: 1 }}
                            id="outlined-size-normal"
                            placeholder="Subject"
                        /> <br />
                        <TextField sx={{ my: 1, width: '60%', backgroundColor: 'white', borderRadius: 1 }}
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            placeholder="Your Message"
                        /> <br />
                        <Button sx={{ backgroundColor: '#4fe5ca', color: 'white', my: 5, py: 2, px: 5 }}>SUBMIT</Button>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default ContactUs;