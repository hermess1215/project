import { useState } from "react";
import styles from './Calendar.module.css';

const Calendar = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const dates = [
    [2, 3, 4, 5, 6],
    [9, 10, 11, 12, 13],
    [16, 17, 18, 19, 20],
    [23, 24, 25, 26, 27],
    [30, "", "", "", ""],
  ];

  // 각 날짜에 색상 정보를 매핑
  const colorMap = {
    Mon: "red",
    Tue: "blue",
    Wed: "green",
    Thu: "blue",
    Fri: ["red"],
  };

  const [selected, setSelected] = useState({});

  const toggleSelection = (week, day) => {
    const key = `${week}-${day}`;
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        {days.map((day) => (
          <div key={day} className={styles.day}>
            {day}
          </div>
        ))}
      </div>

      {dates.map((week, wi) => (
        <div key={wi} className={styles.week}>
          {week.map((day, di) => (
            <div
              key={di}
              className={`${styles.dateCell} ${selected[`${wi}-${day}`] ? styles.active : ""}`}
              onClick={() => toggleSelection(wi, day)}
            >
              {day && <div className={styles.dateNumber}>{day}</div>}
              {day && colorMap[days[di]] && (
                <div className={styles.dots}>
                  {Array.isArray(colorMap[days[di]])
                    ? colorMap[days[di]].map((c, i) => (
                        <div key={i} className={`${styles.dot} ${styles[c]}`}></div>
                      ))
                    : <div className={`${styles.dot} ${styles[colorMap[days[di]]]}`}></div>}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
