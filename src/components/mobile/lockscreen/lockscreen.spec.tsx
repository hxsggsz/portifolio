import { render, screen, fireEvent } from "@testing-library/react";
import { LoockScreen } from "./lockscreen";

describe('Lockescreen', () => {
  it('should render the lockscreen correctly', () => {
    render(<LoockScreen isLocked={true} handleLocked={() => { }} />)

    const lock = screen.getByText(/leitor/i)

    expect(lock).toBeInTheDocument();
  });

  it('should not render the lockscreen after unlock', async () => {
    let isLocked = true;
    const handleLocked = () => isLocked = !isLocked;
    render(<LoockScreen isLocked={isLocked} handleLocked={handleLocked} />)

    const button = screen.getByTestId('button')

    const lock = screen.queryByText(/leitor/i)
    expect(lock).toBeInTheDocument()

    fireEvent.click(button)

    expect(isLocked).toBe(false)
  });

});