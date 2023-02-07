import { StyledCalendar } from ".";
import { useCalendar } from "../../../../hooks/useCalendar";

export const CalendarEn = () => {
  const calendar = useCalendar();
  const currentDay = calendar.getDay()
  const currentMonth = calendar.getMothEn()
  const currentDayWeek = calendar.getWeekEn()

  setInterval(() => {
    calendar.clock()
  }, 1000)
  return (
    <StyledCalendar>
      <h1>
        {calendar.hours < 10 ? "0" + calendar.hours : calendar.hours} :{" "}
        {calendar.minutes < 10 ? "0" + calendar.minutes : calendar.minutes}
      </h1>
      <h2>{currentDayWeek}, {currentMonth} {currentDay}</h2>
    </StyledCalendar>
  )
}