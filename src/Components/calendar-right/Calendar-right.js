import './Calendar-right.css'
import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css'
import { useState } from 'react';


function Calendar_right(){
    const [date, setDate] = useState(new Date());
    return(
        <div className='calendar_right'>
            <div className='heading'>Calendar</div>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
        </div>
    );
}

export default Calendar_right;