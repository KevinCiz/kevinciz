import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  opacity: ${({ scrollNav }) => (scrollNav ? "70%" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: opacity 1s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  flex-wrap: wrap;
`;

export const NavLogo = styled(LinkRouter)`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  /* font-family: "Big Shoulders Stencil"; */
  span {
    font-weight: 400;
    font-size: 1.3rem;
    color: gainsboro;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : 0)};
    transition: max-height 0.5s ease-in-out;
  }
`;

export const MenuLinks = styled(LinkScroll)`
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease-in;

  &.active {
    color: #7b7fda;
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #7b7fda;
  }
`;
