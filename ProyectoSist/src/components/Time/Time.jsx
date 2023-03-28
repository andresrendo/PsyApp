import styles from './Time.module.css';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export function Time({time, setTime}) {

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['MobileTimePicker']}>
                    <DemoItem>
                        <label className={styles.text}>Hora de la consulta</label>
                        <MobileTimePicker value={time} onChange={(newTime) => setTime(newTime)} className={styles.time}/>
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
}