import React from "react";

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
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      expand="lg"
      variant="dark"
      //fixed="top"
      className="shadow bg-black"
    >
      <Container fluid className="row mx-sm-0">
        <Link to="/" className="navbar-brand col">
          <span className="text-warning">V</span>enkatesh Kumar
        </Link>

        <div className="col d-none d-md-block">
          <TechStack />
        </div>
        <NavbarToggle aria-controls="navbar-hook" className="col-auto" />
        <NavbarCollapse
          id="navbar-hook"
          className="col-auto justify-content-end"
        >
          <nav className="nav navbar-nav">
            {Menu?.map((r, i) => (
              <Link key={i} className="nav-link" to={r?.path}>
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
