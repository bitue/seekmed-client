import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { TextField } from '@mui/material';

import isWeekend from 'date-fns/isWeekend';
import React from 'react';





const Calender = ({date, setDate}) => {
   

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={date}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}

                    renderInput={(params) => <TextField {...params} />}

                   
                />
            </LocalizationProvider>

        </div>
    );
};

export default Calender;