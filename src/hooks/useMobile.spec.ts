import { renderHook, act } from "@testing-library/react";
import { useMobile } from "./useMobile";

describe("useMobile hook", () => {
  it("should check if the app is open", () => {
    const { result } = renderHook(() => useMobile());
    expect(result.current.isAppOpen).toBe(false);

    act(() => result.current.handleApp());
    expect(result.current.isAppOpen).toBe(true);
  });

  it("should check if the app is locked", () => {
    const { result } = renderHook(() => useMobile());
    expect(result.current.isLocked).toBe(true);

    act(() => result.current.handleIsLocked());

    expect(result.current.isLocked).toBe(false);
  });

  it("should check if the menu is open", () => {
    const { result } = renderHook(() => useMobile());
    expect(result.current.isShowMenu).toBe(false);

    act(() => result.current.handleMenu());
    expect(result.current.isShowMenu).toBe(true);
  });
});
