import { React, useState } from "react";
import { render } from "react-dom";
import { StrictMode } from "react";
import ErrorBoundary from "./ErrorBoundary.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer.js";

const App = () => {
  const [stickyMargin, setStickyMargin] = useState(0);

  return (
    <StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <Header setStickyMargin={setStickyMargin} />
          <Hero stickyMargin={stickyMargin} />
          <About />
          {/* <Routes>
            <Route path="/about/" element={<About />} />
          </Routes> */}
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
