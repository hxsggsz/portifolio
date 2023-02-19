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

  it('should render with about component', () => {
    const about = [
      {
        id: "id",
        text: "test text",
        image: "/urltest",
      }
    ]
    render(
      <App
        isShow={true}
        isFullScreen={false}
        onMinus={() => { }}
        onFullScreen={() => { }}
        onClose={() => { }}
        about={about}
      />
    );

    const aboutTest = screen.getByText(/text/i)
    expect(aboutTest).toBeInTheDocument()
  });

  it('should render the component cert component', () => {
    const cert = [
      {
        id: "id test",
        name: "name test",
        images: "/urltest",
        description: "description test",
      }
    ]
    render(
      <App
        isShow={true}
        isFullScreen={false}
        onMinus={() => { }}
        onFullScreen={() => { }}
        onClose={() => { }}
        cert={cert}
      />
    );

    const certTest = screen.getByText(/name/i)
    expect(certTest).toBeInTheDocument()
  });

  it('should render the component lang component', () => {
    const lang = [
      {
        id: "id",
        name: "test text",
        images: "/urltest",
      }
    ]
    render(
      <App
        isShow={true}
        isFullScreen={false}
        onMinus={() => { }}
        onFullScreen={() => { }}
        onClose={() => { }}
        lang={lang}
      />
    );

    const langTest = screen.getByText(/text/i)
    expect(langTest).toBeInTheDocument()
  });

  it('should render the component project component', () => {
    const project = {
      id: "id test",
      icon: "/iconurl",
      images: "/urltest",
      name: "name test",
      description: "desc test",
      urlRepository: "url test",
      url: "url test",
      languages: "lang test",
    }

    render(
      <App
        isShow={true}
        isFullScreen={false}
        onMinus={() => { }}
        onFullScreen={() => { }}
        onClose={() => { }}
        isProject={true}
        project={project}
      />
    );

    const projectTest = screen.getByText(/desc/i)
    expect(projectTest).toBeInTheDocument()
  });

  it('should render the component config component', () => {
    const config = {
      title: "title test",
      titleLang: "string",
      handleTheme() { },
      isDisabledEng: false,
      isDisabledPt: false,
      hrefEng: "string",
      hrefPt: "string",
    }
    render(
      <App
        isShow={true}
        isFullScreen={false}
        onMinus={() => { }}
        onFullScreen={() => { }}
        onClose={() => { }}
        isConfig={true}
        config={config}
      />
    );

    const configTest = screen.getByText(/title/i)
    expect(configTest).toBeInTheDocument()
  });
});
