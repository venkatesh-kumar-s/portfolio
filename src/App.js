import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { AppRoutes } from "./routes";
import React from "react";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App bg-info">
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
      <Footer />
    </div>
  );
}

export default App;
