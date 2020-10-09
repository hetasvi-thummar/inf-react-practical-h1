import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import autodigglogo from "../images/logo-autodigg.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="shadow" light expand="md">
      <NavbarBrand>
        <img src={autodigglogo} alt="autodigg" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/categories" title="categories">
              HOE DOES IT WORKS?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tags" title="tags">
              WHY US?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/demo" title="demo">
              CONTACT US
            </NavLink>
          </NavItem>
        </Nav>

        <NavLink href="/demo" title="demo">
          BLOG
        </NavLink>

        <NavLink href="/demo" title="demo">
          DEALERS
        </NavLink>

        <Link to="/login" title="login">
          <Button className="signin-btn">SIGN IN/ REGISTER</Button>
        </Link>
      </Collapse>
    </Navbar>
  );
};

export default Header;
