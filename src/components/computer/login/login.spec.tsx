import { LoginWindows } from "./login";
import { fireEvent, render, screen } from "@testing-library/react"

describe('testing the login component', () => {
  it('should render the component correctfully', () => {
    render(<LoginWindows href="/desktop" defaultValue={"qwe"} isText={false} setIsText={() => { }} />)

    expect(screen.getByTestId('component')).toHaveAttribute("href", "/desktop")
    expect(screen.getByTestId('fake-input')).toBeDisabled()
  });

  it('should click to show the password', () => {
    let isText = false;
    const setIsText = () => isText = !isText;

    render(<LoginWindows href="/desktop" defaultValue={"qwe"} isText={isText} setIsText={setIsText} />)

    expect(isText).toBe(false)

    fireEvent.click(screen.getByTestId('show-login'))
    expect(isText).toBe(true)

    fireEvent.click(screen.getByTestId('show-login'))
    expect(isText).toBe(false)
  });
});