import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

import {
  MenuLinks,
  MenuWrapper,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
} from "./NavbarElements";

const Navbar = ({ toggle, isOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          Kev<span>Portfolio</span>
        </NavLogo>
        <MobileIcon>
          <MenuIcon onClick={toggle} />
        </MobileIcon>
        <MenuWrapper isOpen={isOpen}>
          <MenuLinks to="about" smooth={true} duration={500} spy={true} exact="true">
            About
          </MenuLinks>
          <MenuLinks to="experience" smooth={true} duration={500} spy={true} exact="true">
            Experience
          </MenuLinks>
          <MenuLinks to="skills" smooth={true} duration={500} spy={true} exact="true">
            Skills
          </MenuLinks>
          <MenuLinks to="contact" smooth={true} duration={500} spy={true} exact="true">
            Contact
          </MenuLinks>
        </MenuWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
