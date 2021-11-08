import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const TopBanner = () => {
    const bgStyle = {
        background: `url(${bg})`

    }
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
    

    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{ height: '500px' }}>
            <Grid container spacing={2}  >
                <Grid item xs={12} md={7} style={{ height: '500px', ...verticalCenter }}>
                    <div style={{textAlign:'left', marginLeft:'30px'}} >
                        <Typography sx={{ my: 5 }} style={{ fontWeight: 'bold' }} variant="h4" >
                            Smile starts here
                        </Typography>
                        <Typography sx={{ my: 5 }} style={{}} variant="p" >
                            here you will be experienced great environment of treatment that will make relief of dental disease to smile ,
                            Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.
                        </Typography>
                        <div>
                            <Button sx={{ my:5 }} variant="contained">Get Appointment</Button>
                        </div>
                    </div>


                </Grid>
                <Grid item xs={12} md={5} style={verticalCenter} >
                    <img style={{ width: '400px' }} src={chair} />
                </Grid>

            </Grid>
        </Box>
    );
};

export default TopBanner;