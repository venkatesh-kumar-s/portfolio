import React, { useState } from "react";

//Bootstrap Components
import { Container, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

//Router
import { Link } from "react-router-dom";

//Static Data
import { Menu } from "../data/menu";
import TechStack from "./TechStack";

const Nav = () => {
  const [state, setState] = useState(false);
  return (
    <Navbar
      bg="dark"
      expand="lg"
      expanded={state}
      variant="dark"
      //fixed="top"
      className="shadow bg-black"
    >
      <Container fluid className="row mx-sm-0 ps-3 pe-1 px-md-4">
        <Link to="/" className="navbar-brand col">
          <span className="text-warning">V</span>enkatesh Kumar
        </Link>

        <div className="col d-none d-md-block">
          <TechStack />
        </div>
        <NavbarToggle
          aria-controls="navbar-hook"
          className="col-auto p-0"
          onClick={() => setState(!state)}
        />
        <NavbarCollapse
          id="navbar-hook"
          className="col-auto justify-content-end"
        >
          <nav className="nav navbar-nav">
            {Menu?.map((r, i) => (
              <Link
                key={i}
                className="nav-link"
                to={r?.path}
                onClick={() => setState(false)}
              >
                <img
                  src={r?.icon}
                  style={{ objectFit: "contain", width: 20, marginRight: 5 }}
                  alt={r?.label}
                />
                {r?.label}
              </Link>
            ))}
          </nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
