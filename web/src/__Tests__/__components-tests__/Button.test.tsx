import { render, screen } from "@testing-library/react";
import Button from "../../Components/Button";
import { ThemeProvider } from "styled-components";
import Theme from "../../../src/Theme";
describe("renders the button component", () => {
  it("should create a disabled button", () => {
    const mockCallBack = jest.fn();
    render(
      <ThemeProvider theme={Theme}>
        <Button onHandleClick={mockCallBack} disabled type="submit">
          Test
        </Button>
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("should create a not disabled button", () => {
    const mockCallBack = jest.fn();
    render(
      <ThemeProvider theme={Theme}>
        <Button onHandleClick={mockCallBack} type="submit">
          Test
        </Button>
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toBeEnabled();
  });
  it("should create a not disabled button", () => {
    const mockCallBack = jest.fn();
    render(
      <ThemeProvider theme={Theme}>
        <Button onHandleClick={mockCallBack} type="submit">
          Test
        </Button>
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
