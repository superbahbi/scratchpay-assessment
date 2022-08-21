import { render, screen } from "@testing-library/react";
import IconButton from "../../Components/IconButton";
import { ThemeProvider } from "styled-components";
import Theme from "../../../src/Theme";
test("renders the icon button component", () => {
  const mockCallBack = jest.fn();
  render(
    <ThemeProvider theme={Theme}>
      <IconButton onHandleClick={mockCallBack}>Test</IconButton>
    </ThemeProvider>
  );
  expect(screen.getByRole("iconbutton")).toBeInstanceOf(HTMLElement);
});
