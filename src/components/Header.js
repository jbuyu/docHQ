import React, { useState } from "react"
import Doq from "../images/doc.svg"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  outline: none;
  @media (max-width: 1024px) {
    position: absolute;
  }
  @media (min-width: 1024px) {
    display: none;
  }

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 10px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  width: 100%;
  background: #dff0e1;
  position: ${({ nav }) => (nav ? "relative" : "absolute")};
  top: 0;
  right: 0;
  transition: transform 300ms;
  // width: 50%;
  transform: ${({ nav }) => (nav ? "translatex(0)" : "translatex(100%)")};
  ul {
    list-style-type: none;
  }
  li {
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;
    :hover {
      color: #5fb769;
    }
  }
`
const Header = () => {
  const [nav, showNav] = useState(false)
  return (
    <header className="nav">
      <div className="logo">
        <a href="/">
          <Doq
            className="logo-img"
            style={{ height: "100px", width: "100px" }}
          />
        </a>
        KHD
      </div>
      <MenuIcon
        nav={nav}
        onClick={() => {
          showNav(!nav)
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => scrollTo("#home")}
            >
              <a>Home</a>
            </span>
          </li>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => scrollTo("#process")}
            >
              <a>Process</a>
            </span>
          </li>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => scrollTo("#team")}
            >
              <a>Team</a>
            </span>
          </li>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => scrollTo("#reviews")}
            >
              <a>Reviews</a>
            </span>
          </li>
          {/* <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => scrollTo("#contact")}
            >
              <a>Contact</a>
            </span>
          </li> */}
        </ul>
      </MenuLinks>
    </header>
  )
}

export default Header
