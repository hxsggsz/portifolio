import { useState } from "react";

export const useCalendar = () => {
  const date = new Date();
  const [calendar, setCalendar] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    week: "",
    day: date.getDate(),
  });

  const weekDays = [
    { numberDay: 0, day: "Dom" },
    { numberDay: 1, day: "Seg" },
    { numberDay: 2, day: "Ter" },
    { numberDay: 3, day: "Qua" },
    { numberDay: 4, day: "Qui" },
    { numberDay: 5, day: "Sex" },
    { numberDay: 6, day: "Sáb" },
  ];

  const weekDaysEn = [
    { numberDay: 0, day: "Sum" },
    { numberDay: 1, day: "Mon" },
    { numberDay: 2, day: "Tue" },
    { numberDay: 3, day: "Wed" },
    { numberDay: 3, day: "Thu" },
    { numberDay: 5, day: "Fri" },
    { numberDay: 6, day: "Sat" },
  ];

  return {
    ...calendar,
    getWeek() {
      const date = new Date();
      const week = date.getDay();
      let currentWeek = "";

      weekDays.map((day) => {
        if (day.numberDay === week) {
          currentWeek = day.day;
        }
      });
      setCalendar({
        ...calendar,
        week: currentWeek,
      });
    },

    getWeekEn() {
      const date = new Date();
      const week = date.getDay();
      let currentDay = "";

      weekDaysEn.map((day) => {
        if (day.numberDay === week) {
          currentDay = day.day;
        }
      });
      setCalendar({
        ...calendar,
        week: currentDay,
      });
    },
    
    clock() {
      const currentHours = date.getHours();
      const currentMinutes = date.getMinutes();

      setCalendar({
        ...calendar,
        hours: currentHours,
        minutes: currentMinutes,
      });
    },
  };
};
