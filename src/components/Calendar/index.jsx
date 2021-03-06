import React, { useState } from "react";
import CalendarSelectedDay from "./CalendarSelectedDay";
import CalendarMonth from "./CalendarMonth";
import styles from './Calendar.module.scss'


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());  
  
  return (
    <div className={styles.container}>
        <CalendarSelectedDay currentDate={currentDate} />
        <CalendarMonth currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </div>
  );
}

export default Calendar;

