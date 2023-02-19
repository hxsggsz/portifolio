import { renderHook, act } from "@testing-library/react";
import { useCalendar } from "./useCalendar";

describe("UseCalendar hook", () => {
  const date = new Date();
  const { result } = renderHook(() => useCalendar());
  it("should check if the clock is correct", () => {
    expect(result.current.hours).toEqual(date.getHours());
    expect(result.current.minutes).toEqual(date.getMinutes());
  });

  it("should check if the week is correct", () => {
    const { result } = renderHook(() => useCalendar());
    act(() => result.current.getWeek());
    expect(result.current.week).toEqual(result.current.week);
  });

  it("should check if the week in English is correct", () => {
    const { result } = renderHook(() => useCalendar());
    act(() => {
      result.current.getWeekEn();
    });
    expect(result.current.week).toEqual(result.current.week);
  });

  it("should check if the day is correct", () => {
    expect(result.current.day).toEqual(date.getDate());
  });
});
