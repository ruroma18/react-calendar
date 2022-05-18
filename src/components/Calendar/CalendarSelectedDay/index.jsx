import React from "react";
import { format } from "date-fns";
import styles from "./SelectedDay.module.scss";

const CalendarSelectedDay = ({ currentDate }) => {
  const getDayNumber = format(currentDate, "d");
  const getDayName = format(currentDate, "cccc");

  return (
    <div className={styles.container}>
      <p className={styles.dayName}>{getDayName}</p>
      <p className={styles.dayNumber}>{getDayNumber}</p>
    </div>
  );
};

export default CalendarSelectedDay;
