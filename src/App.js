import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Notice from "./pages/Notice";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
