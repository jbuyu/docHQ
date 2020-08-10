import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import Doq from "../images/doq.svg"

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)

  return (
    <MenuBar>
      <Link to="/">
        <Doq
          className="logo-img"
          style={{
            fontSize: "1.6em",
            fonWeight: "400",
            // marginTop: "1rem",
            marginLeft: "5rem",
            height: "125px",
            width: "150px",
          }}
        />
      </Link>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/about">Process</Link>
          </li>
          <li>
            <Link to="/merch">Team</Link>
          </li>
          <li>
            <Link to="/about">Services</Link>
          </li>
        </ul>
      </MenuLinks>
    </MenuBar>
  )
}

export default MobileNavMenu

const MenuBar = styled.header`
  @media ${breakpoints.lg} {
    display: none;
  }
  height: 3rem;
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: "blue";
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: none;
  border: none;
  z-index: 11;
  div {
    width: 1.95rem;
    height: 0.25rem;

    background: ${({ menuOpen }) => (menuOpen ? "#4c4c4c" : "black")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #afe6c3;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 50vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};

  ul {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 28px;
    li {
      list-style: none;
      margin-top: 1em;
      margin-bottom: 1em;
      &:hover {
        color: "#34453a";
      }
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`
