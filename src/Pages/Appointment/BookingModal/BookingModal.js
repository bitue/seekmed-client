import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';



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
    const {user} = useContext(AuthContext)
  
    const initObject = {name:user.displayName, email:user.email, date:date.toDateString(), time:time }
    const [data , setData] = useState(initObject)
    const handleOnChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newObject ={...data}
        newObject[name]=value;
        setData(newObject);
        console.log(data)

    }
    const handleSubmit = e => {
        alert('submitting');
        console.log(data);

        fetch('http://localhost:5000/appointment/insert',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)


        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                alert('successfully inserted');
            }
            console.log(data)
        })
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
                            defaultValue={user.displayName}
                            size="small"
                            style={{ width: '90%', margin: '5px' }}
                            name='name'
                            onChange={handleOnChange}
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
                            defaultValue={user.email}
                            size="small"
                            style={{ width: '90%', margin: '5px' }}
                            name='email'
                            onChange={handleOnChange}
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