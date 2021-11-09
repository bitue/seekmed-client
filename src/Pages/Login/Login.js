import { Button, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../images/login.png';
import useFirebase from '../../hooks/useFirebase'
import { AuthContext } from '../../Context/AuthProvider';



const Login = () => {
    const [loginData , setLoginData] = useState({})
    const {signInWithGoogle, user} = useContext(AuthContext)
    const handleSubmit = e => {
        alert('submit')
        e.preventDefault()
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
      
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
     

    }
    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div style={{ marginTop: '100px' }}>
                        <h1>Log in here</h1>
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
                            <p>new user? <NavLink to='/register'>Register here</NavLink></p>

                            <Button type='submit' variant='contained'>Log in</Button>
                            <Button variant='contained' onClick={signInWithGoogle}>Google signin</Button>
                            {
                                user?.email? <p>{user.displayName}</p> : null
                            }


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

export default Login;