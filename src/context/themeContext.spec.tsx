import { ThemesProvider, ThemeContext } from "./themeContext"
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("testing the ThemeContext", () => {
  it("should change the theme from purple to red", async () => {
    render(
      <ThemesProvider>
        <ThemeContext.Consumer>
          {({ colors, handleTheme }) => (
            <>
              <h1>{colors}</h1>
              <button onClick={() => handleTheme("red")}>mudar cor</button>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemesProvider>
    );

    screen.logTestingPlaygroundURL();
    expect(screen.getByText(/purple/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /mudar cor/i }))
    await waitFor(() => expect(screen.getByText(/red/i)).toBeInTheDocument());
  });

});
