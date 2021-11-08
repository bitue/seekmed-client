import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import cavity from '../../../images/cavity.png';
import floride from '../../../images/fluoride.png';
import white from '../../../images/whitening.png';
import Service from '../Service/Service';




const services = [{ name: 'Floride Treatment', des: 'We have an international standard Oncology center with experienced & trained physicians and expert nurses along with all modern equipment for investigation facilities for early diagnosis of cancer and comprehensive cancer treatment. This center has state-of-the-art chemotherapy unit, so unified management of cancer is available at Bangladesh Specialized Hospital Ltd', img: floride }, { name: 'Cavity', des: 'We have an international standard Oncology center with experienced & trained physicians and expert nurses along with all modern equipment for investigation facilities for early diagnosis of cancer and comprehensive cancer treatment. This center has state-of-the-art chemotherapy unit, so unified management of cancer is available at Bangladesh Specialized Hospital Ltd', img: cavity }, { name: 'Whitening', des: 'We have an international standard Oncology center with experienced & trained physicians and expert nurses along with all modern equipment for investigation facilities for early diagnosis of cancer and comprehensive cancer treatment. This center has state-of-the-art chemotherapy unit, so unified management of cancer is available at Bangladesh Specialized Hospital Ltd', img: white }]

const Services = () => {
    return (
        <Container>
             <Typography sx={{m:2, fontWeight:600, color: "info.main"}} variant="h5" component="div">
                        Our Services
                    </Typography>;
              <Typography sx={{m:2}} variant="h4" component="div">
                        Services We Provide
                    </Typography>;
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, sm: 4, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                  
                    {services.map((service, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Service key={service.name} service={service}></Service>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;