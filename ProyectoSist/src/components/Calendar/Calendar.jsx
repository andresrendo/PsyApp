import styles from './Calendar.module.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';

export function Calendar({date, setDate}) {

    return (
      <div className={styles.container}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={date} onChange={(newDate) => {
                setDate(newDate)
               //console.log(date.$d)
            }}/>
          </LocalizationProvider>
      </div>
    );
}