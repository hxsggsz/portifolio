import { TaskBarContext, TaskBarProvider } from "./taskBarContext";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("testing the TaskBarContext", () => {
  it("should add one image to the taskBar Array Context", async () => {
    render(
      <TaskBarProvider>
        <TaskBarContext.Consumer>
          {({ setIconToTaskBar, taskBar }) => (
            <>
              <button
                data-testid="add-button"
                onClick={() => setIconToTaskBar("task")}
              >
                Adicionar tarefa
              </button>

              <ul>
                {taskBar.map((item) => (
                  <li key={item.id}>
                    <h1>{item.image}</h1>
                  </li>
                ))}
              </ul>
            </>
          )}
        </TaskBarContext.Consumer>
      </TaskBarProvider>
    );

    expect(screen.getByText(/\/img\.jpg/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole("list")).toBeInTheDocument());

    fireEvent.click(screen.getByTestId("add-button"));
    await waitFor(() => expect(screen.getByText("task")).toBeInTheDocument());
  });
  it("should remove the image from taskBar", async () => {
    render(
      <TaskBarProvider>
        <TaskBarContext.Consumer>
          {({ removeIconFromTaskBar, taskBar }) => (
            <ul>
              {taskBar.map((item) => (
                <li key={item.id}>
                  <h1>{item.image}</h1>
                  <button
                    data-testid="remove-button"
                    onClick={() => removeIconFromTaskBar(item.image)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          )}
        </TaskBarContext.Consumer>
      </TaskBarProvider>
    );

    fireEvent.click(screen.getByTestId("remove-button"));
    await waitFor(() =>
      expect(screen.queryByText("/img.jpg")).not.toBeInTheDocument()
    );
  });
});
