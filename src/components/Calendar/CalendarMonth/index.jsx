import React from "react";
import {
  format,
  startOfWeek,
  eachDayOfInterval,
  endOfWeek,
  addMonths,
  subMonths,
} from "date-fns";
import CalendarWeek from "../CalendarWeek";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./CalendarMonth.module.scss";

const CalendarMonth = ({ currentDate, setCurrentDate }) => {
  const getMonth = format(currentDate, "LLLL");
  const getYear = format(currentDate, "y");
  const weekArr = eachDayOfInterval({
    start: startOfWeek(currentDate),
    end: endOfWeek(currentDate),
  });

  const getWeek = weekArr
    .map((weekItem) => format(weekItem, "EEEEE"))
    .map((weekAbr, index) => (
      <div key={`${weekAbr} ${index}`} className={styles.weekNamesListItem}>
        {weekAbr}
      </div>
    ));

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.monthYearContainer}>
        <ArrowBackIosIcon className={styles.monthArrow} onClick={prevMonth} />
        <div className={styles.monthYearText}>
          <p className={styles.monthText}>{getMonth}</p>
          <p>{getYear}</p>
        </div>
        <ArrowForwardIosIcon
          className={styles.monthArrow}
          onClick={nextMonth}
        />
      </div>
      <div className={styles.weekNamesList}>{getWeek} </div>
      <CalendarWeek currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </div>
  );
};

export default CalendarMonth;
