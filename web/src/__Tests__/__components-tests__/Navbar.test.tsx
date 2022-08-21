import { render, screen } from "@testing-library/react";
import Navbar from "../../Components/Navbar";
import { ThemeProvider } from "styled-components";
import Theme from "../../../src/Theme";
test("renders the navigation component", () => {
  render(
    <ThemeProvider theme={Theme}>
      <Navbar />
    </ThemeProvider>
  );

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Account")).toBeInTheDocument();
});
