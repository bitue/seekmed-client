import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const AppoinmentBanner = () => {
    const style = {
        background: `url(${bg})`,
        marginTop: 150,
        backgroundColor: 'rgba(113, 206, 248,0.9)',
        backgroundBlendMode: 'darken'


    }
    return (
        <Container>
            <Box style={style} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img src={doctor} style={{ width: '400px', marginTop: '-120px' }} />

                    </Grid>


                    <Grid style={{ textAlign: 'left' }} item xs={12} md={8}>
                        <Box >
                            <Typography  variant='h5' style={{ fontWeight: 'bold' ,margin:'20px' }}>
                                Appointment

                            </Typography>
                            <Typography variant='h4' style={{ fontWeight: 'bold' ,margin:'20px',color:'white' }}>
                                Make an Appointment today !

                            </Typography>

                            <Typography variant='h6' sx={{ fontWeight: 400, margin:'20px' }}>
                                you can do appointment here very quickly by clicking upon the button and go to appointment page for details information about that

                            </Typography>
                            <Button sx={{  margin:'20px' }} variant="contained">Get Appointment</Button>
                        </Box>


                    </Grid>


                </Grid>
            </Box>
        </Container>
    );
};

export default AppoinmentBanner;