import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import Bookings from '../Bookings/Bookings';

const AvailableAppointment = ({ date }) => {
    const bookings = [
        { id: 1, name: 'cavityRemove', time: '10:00 AM', space: 12 },
        { id: 2, name: 'cavityRemove', time: '11:00 AM', space: 15 },
        { id: 3, name: 'cavityRemove', time: '12:00 AM', space: 12 },
        { id: 4, name: 'cavityRemove', time: '7:00 AM', space: 21 },
        { id: 5, name: 'cavityRemove', time: '8:00 AM', space: 10 },
        { id: 6, name: 'cavityRemove', time: '10:00 AM', space: 29 },

    ]
    return (
        <div>
            <h2>this is available appointment {date.toDateString()} </h2>
            <div>
                <Container>
                    <Grid container spacing={2}>

                        {
                            bookings.map(booking => <Bookings key={booking.id} booking={booking} date={date}></Bookings>)
                        }


                    </Grid>
                </Container>




            </div>
        </div>
    );
};

export default AvailableAppointment;