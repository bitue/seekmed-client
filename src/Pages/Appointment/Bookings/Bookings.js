import React from 'react';
import { Button, Grid, Typography } from '@mui/material';


import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Bookings = ({booking, date}) => {
    const {name , space, time } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
      
        <Grid item xs={12} sm={4} >
           <Paper elevation={3} style={{margin:'2px', padding:'10px'}}>
               <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                   {name}

               </Typography>
               <Typography variant='h6'>
               at {time}

               </Typography>
               <Typography variant='h6'>
                 seat available  {space}

               </Typography>
               <Button onClick={handleOpen} variant="contained" >Book now</Button>
           </Paper>

        </Grid>
        <BookingModal open={open} handleClose={handleClose} name={name} space={space} time={time} date={date}></BookingModal>

        </>
    );
};

export default Bookings;