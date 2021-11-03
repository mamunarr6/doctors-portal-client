import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'fluoride',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, magnam tempora obcaecati illum laudantium, numquam pariatur hic laborum dignissimos provident quae rem dicta harum dolor vero, eum ipsa exercitationem blanditiis.',
        img: fluoride
    },
    {
        name: 'cavity',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, magnam tempora obcaecati illum laudantium, numquam pariatur hic laborum dignissimos provident quae rem dicta harum dolor vero, eum ipsa exercitationem blanditiis.',
        img: cavity
    },
    {
        name: 'whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, magnam tempora obcaecati illum laudantium, numquam pariatur hic laborum dignissimos provident quae rem dicta harum dolor vero, eum ipsa exercitationem blanditiis.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, my: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, my: 3 }} variant="h4" component="div">
                    Services We Provided
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;