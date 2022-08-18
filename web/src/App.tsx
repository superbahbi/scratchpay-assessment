import React from "react";
import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import ManageUser from "./Views/ManageUser";
import Navbar from "./Components/Navbar";

const Layout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Navbar />
        <ManageUser />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
