import React from "react";
import { render } from "react-dom";
import { StrictMode } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/about/" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
