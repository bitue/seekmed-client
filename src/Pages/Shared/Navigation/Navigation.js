
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navigation = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                           
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors
                        </Typography>
                        <NavLink to='/appointment'>Appointment</NavLink>
                        {
                            user?.email ? <Box>
                                <NavLink to='/dashboard' >Dashboard</NavLink>

                                
                                <Button onClick={logOut} variant='contained'>LogOut</Button></Box> 
                                :
                                
                                <NavLink to='/login' >Login</NavLink>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
};

export default Navigation;