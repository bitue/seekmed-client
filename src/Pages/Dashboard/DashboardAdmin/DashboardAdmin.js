import React, { useState } from 'react';
import Calender from '../../Shared/Calender/Calender';
import MyAppointment from '../MyAppointment/MyAppointment';
import { Grid } from '@mui/material';

const DashboardAdmin = () => {
    const [date , setDate]= useState(new Date())
    return (
        <div>
            <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                       <Calender date={date} setDate={setDate}></Calender>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MyAppointment dateApp={date}></MyAppointment>

                    </Grid>

                </Grid>
            
        </div>
    );
};

export default DashboardAdmin;