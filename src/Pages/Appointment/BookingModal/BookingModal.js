import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, name, time, date }) => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    console.log(date)
    const handleSubmit = e => {
        alert('submitting')
        // collecting the data 
        // send data to mongoDb
        handleClose()
        e.preventDefault()
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Your Name"
                            id="outlined-size-small"
                            defaultValue="Your name"
                            size="small"
                            style={{ width: '90%', margin: '5px' }}
                        />
                        <TextField
                            label="Appointment Time"
                            id="outlined-size-small"
                            value={time}

                            size="small"
                            style={{ width: '90%', margin: '5px' }}
                        />
                        <TextField
                            label="Your Email"
                            id="outlined-size-small"
                            defaultValue="Your Email"
                            size="small"
                            style={{ width: '90%', margin: '5px' }}
                        />
                        <TextField
                            label="Date"
                            id="outlined-size-small"
                            value={date.toDateString()}
                            size="small"
                            style={{ width: '90%', margin: '5px' }}
                        />

                        <Button variant='contained' type='submit'>Submit</Button>

                    </form>


                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;