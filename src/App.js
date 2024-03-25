// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  NavLink,
} from "react-router-dom";
import FrontendInterns from "./components/FrontendInterns";
import BackendInterns from "./components/BackendInterns";
import Web3Interns from "./components/Web3Interns";
import ProductDesignInterns from "./components/ProductDesign";
import LandingPage from "./components/LandingPage";
import "./App.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <div>
      {/* Check if the current location is not the landing page */}
      {location.pathname !== "/" && (
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/frontend">
                <button
                  className={location.pathname === "/frontend" ? "active" : ""}
                >
                  Frontend
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/backend">
                <button
                  className={location.pathname === "/backend" ? "active" : ""}
                >
                  Backend
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/web3">
                <button
                  className={location.pathname === "/web3" ? "active" : ""}
                >
                  Web3
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/productdesign">
                <button
                  className={
                    location.pathname === "/productdesign" ? "active" : ""
                  }
                >
                  Product Design
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/frontend" element={<FrontendInterns />}></Route>
          <Route path="/backend" element={<BackendInterns />}></Route>
          <Route path="/web3" element={<Web3Interns />}></Route>
          <Route
            path="/productdesign"
            element={<ProductDesignInterns />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
