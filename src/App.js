import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          {AppRoutes?.map((r, i) => (
            <Route key={i} path={r?.path} element={r?.component} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
