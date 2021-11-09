import { Button, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import login from '../../images/login.png';

const Register = () => {
    const [registerData , setRegisterData] = useState({})
    const handleSubmit = e => {
        alert('submit')
        e.preventDefault()
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
      
        const newRegData = {...registerData};
        newRegData[field] = value;
        setRegisterData(newRegData);
        console.log(newRegData)
     

    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <div style={{ marginTop: '100px' }}>
                    <h1>Register in here</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            placeholder='enter your email'
                            variant="filled"
                            size="small"
                            style={{ width: '75%', margin: '5px' }}
                            type='email'
                            name='email'
                            onChange={handleOnChange}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            placeholder='enter your password'
                            variant="filled"
                            size="small"
                            style={{ width: '75%', margin: '5px' }}
                            type='password'
                            name='password'
                            onChange={handleOnChange}
                        />
                        <br />

                        <Button type='submit' variant='contained'>Register</Button>

                    </form>
                </div>


            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} />

            </Grid>

        </Grid>
    </Container>
    );
};

export default Register;