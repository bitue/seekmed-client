import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentBanner = ({date, setFun}) => {

    return (
        <Container>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                   <Calender date={date} setDate={setFun}></Calender>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={chair} style={{width:'100%', display:'flex' ,justifyContent:'center'}} />

                </Grid>

            </Grid>

        </Container>


    );
};

export default AppointmentBanner;