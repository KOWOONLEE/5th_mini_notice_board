import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
