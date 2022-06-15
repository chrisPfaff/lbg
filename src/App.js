import { React, useState } from "react";
import { render } from "react-dom";
import { StrictMode } from "react";
import ErrorBoundary from "./ErrorBoundary.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Test from "./components/Test.js";

const App = () => {
  const [stickyMargin, setStickyMargin] = useState(0);

  return (
    <StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <Header setStickyMargin={setStickyMargin} />
          <Test stickyMargin={stickyMargin} />
          <About />
          {/* <Routes>
            <Route path="/about/" element={<About />} />
          </Routes> */}
        </ErrorBoundary>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
