import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { AppRoutes } from "./routes";
import React, { useState } from "react";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import Visitor from "./components/Visitor";

function App() {
  return (
    <>
      <div className="App">
        <Visitor />
        <Router>
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              {AppRoutes?.map((r, i) => (
                <Route key={i} path={r?.path} element={r?.component} />
              ))}
            </Routes>
          </React.Suspense>
        </Router>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
