import { renderHook, act } from "@testing-library/react";
import { useComputer } from "./useComputer";

describe("useComputer hook", () => {
  it("should check if the app is minimized", () => {
    const { result } = renderHook(() => useComputer());
    expect(result.current.isFullScreen).toBe(false);

    act(() => result.current.handleFullScreen());
    expect(result.current.isFullScreen).toBe(true);
  });

  it("should check if the app is open", () => {
    const { result } = renderHook(() => useComputer());
    expect(result.current.isAppOpen).toBe(false);

    act(() => result.current.minimizeApp());
    expect(result.current.isAppOpen).toBe(true);
  });

  it("should check if the background change", () => {
    const { result } = renderHook(() => useComputer());
    expect(result.current.isChangeBackground).toBe(false);

    act(() => result.current.changeBackground());
    expect(result.current.isChangeBackground).toBe(true);
  });

  it("should check if the app is fullScreen", () => {
    const { result } = renderHook(() => useComputer());
    expect(result.current.isFullScreen).toBe(false);

    act(() => result.current.handleFullScreen());
    expect(result.current.isFullScreen).toBe(true);
  });
});
