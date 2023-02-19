import { StyledCalendar } from ".";
import { useCalendar } from "../../../../hooks/useCalendar";

export const CalendarEn = () => {
  const calendar = useCalendar();


  setInterval(() => {
    calendar.clock()
    calendar.getWeekEn()
  }, 1000)
  return (
    <StyledCalendar>
      <h1>
        {calendar.hours < 10 ? "0" + calendar.hours : calendar.hours} :{" "}
        {calendar.minutes < 10 ? "0" + calendar.minutes : calendar.minutes}
      </h1>
      <h2>{calendar.week}, {calendar.day}</h2>
    </StyledCalendar>
  )
}