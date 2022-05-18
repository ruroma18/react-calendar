import React from "react";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
} from "date-fns";
import cx from "classnames";
import styles from "./Week.module.scss";

const Week = ({ currentDate, setCurrentDate }) => {
  
  const setDaysToWeek = (date) => {
    const week = [];
    

    for (let day = 0; day < 7; day++) {
      const cloneDate = date;
      const dayStyles = cx( {
        [styles.days]: true,
        [styles.currentDay] : isSameMonth(date, new Date()) && (format(date, "d") === format(new Date(), "d")),
        [styles.selectedDay] : isSameMonth(date, currentDate) && (format(date, "d") === format(currentDate, "d")),
        [styles.nextMonthDay] : !isSameMonth(date, currentDate)
      })
      week.push(
        <div key={`${day + 1}-d`} className={dayStyles} onClick={() => setCurrentDate(cloneDate)}>
          {format(date, "d")}
        </div>
      );
      date = addDays(date, 1);
    }
    return (
      <div
        key={`${week.length + Math.random()}-w`}
        className={styles.daysTable}
      >
        {week}
      </div>
    );
  };

  const getDays = () => {
    const startOfCurrentMonth = startOfMonth(currentDate);
    const endOfCurrentMonth = endOfMonth(currentDate);
    const startDate = startOfWeek(startOfCurrentMonth);
    const endDate = endOfWeek(endOfCurrentMonth);

    let thisDate = startDate;

    const allWeeks = [];

    while (thisDate <= endDate) {
      allWeeks.push(setDaysToWeek(thisDate));
      thisDate = addDays(thisDate, 7);
    }

    return <>{allWeeks}</>;
  };

  return <div className={styles.weekContainer}>{getDays()}</div>;
};

export default Week;
