import { App } from "./app";
import { fireEvent, render, screen } from "@testing-library/react";

describe("App component", () => {
  it("should render the App component", () => {
    render(
      <App
        isShow={false}
        isFullScreen={false}
        onMinus={() => { }}
        onFullScreen={() => { }}
        onClose={() => { }}
      />
    );
  });

  it('should work all the funcionalities of the App component', () => {
    let isShow = true;
    let isFullScreen = false;

    const handleShow = () => {
      isShow = !isShow;
    }
    const onFullScreen = () => {
      isFullScreen = !isFullScreen;
    }
    render(
      <App
        isShow={isShow}
        isFullScreen={isFullScreen}
        onMinus={handleShow}
        onFullScreen={onFullScreen}
        onClose={handleShow}
      />
    );

    expect(isShow).toBe(true);
    expect(isFullScreen).toBe(false);

    fireEvent.click(screen.getByTestId("minus"))
    expect(isShow).toBe(false);

    fireEvent.click(screen.getByTestId("close"))
    expect(isShow).toBe(true);

    fireEvent.click(screen.getByTestId("fullScreen"))
    expect(isFullScreen).toBe(true);
  });
});
