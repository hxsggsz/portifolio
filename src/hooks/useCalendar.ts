import { useState, useCallback } from "react";

export const useCalendar = () => {
  const [calendar, setCalendar] = useState({
    hours: 0,
    minutes: 0,
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

  const currentMonth = [
    { number: 1, month: "Janeiro" },
    { number: 2, month: "Fevereiro" },
    { number: 3, month: "Março" },
    { number: 4, month: "Abril" },
    { number: 5, month: "Maio" },
    { number: 6, month: "Junho" },
    { number: 7, month: "Julho" },
    { number: 8, month: "Agosto" },
    { number: 9, month: "Setembro" },
    { number: 10, month: "Outubro" },
    { number: 11, month: "Novembro" },
    { number: 12, month: "Dezembro" },
  ];

  const currentMonthEn = [
    { number: 1, month: "January" },
    { number: 2, month: "February" },
    { number: 3, month: "March" },
    { number: 4, month: "April" },
    { number: 5, month: "May" },
    { number: 6, month: "June" },
    { number: 7, month: "Jule" },
    { number: 8, month: "August" },
    { number: 9, month: "September" },
    { number: 10, month: "October" },
    { number: 11, month: "November" },
    { number: 12, month: "December" },
  ];

  return {
    ...calendar,
    clock() {
      const date = new Date();
      const currentHours = date.getHours();
      const currentMinutes = date.getMinutes();

      setCalendar({
        ...calendar,
        hours: currentHours,
        minutes: currentMinutes,
      });
    },

    getWeek() {
      const date = new Date();
      const week = date.getDay();
      let currentDay = "";

      weekDays.map((day) => {
        if (day.numberDay === week) {
          currentDay = day.day;
        }
      });
      return currentDay;
    },
    getMoth() {
      const date = new Date();
      const month = date.getMonth() + 1;
      let Month = "";

      currentMonth.map((mnth) => {
        if (mnth.number === month) {
          Month = mnth.month;
        }
      });
      return Month;
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
      return currentDay;
    },
    getMothEn() {
      const date = new Date();
      const month = date.getMonth() + 1;
      let Month = "";

      currentMonthEn.map((mnth) => {
        if (mnth.number === month) {
          Month = mnth.month;
        }
      });
      return Month;
    },
    getDay() {
      const date = new Date();
      return date.getDate();
    },
  };
};
