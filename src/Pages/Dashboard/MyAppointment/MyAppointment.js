import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';


const MyAppointment = ({dateApp}) => {
    const [appointment, setAppointment] = useState([])
    const { user } = useContext(AuthContext);
    const email = user?.email;
    // console.log(dateApp.toDateString())
    


    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${email}`)
            .then(res => res.json())
            .then(data => {
                // const remain = data.filter(ele=> ele.date === dateApp.toDateString())
                // console.log(remain)
                
                setAppointment(data)

            })
    }, [])

    return (
        <div>
            <h1>this is appointment {appointment.length}</h1>

            <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="simple table">
                    <TableHead>
                      
                    </TableHead>
                    <TableBody>
                        {appointment.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyAppointment;