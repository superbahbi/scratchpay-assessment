import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import ManageUser from "./Views/ManageUser";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ManageUser />
    </ThemeProvider>
  );
}

export default App;
