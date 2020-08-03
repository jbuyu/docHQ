import React, { useState } from "react"
import Doq from "../images/doc.svg"
import styled from "styled-components"

const MenuIcon = styled.button`
  position: absolute;
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
  // @media (max-width: 768px) {
  //   position: fixed;
  // }

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
  height: 100vh;
  width: 100%;
  background: #dff0e1;
  position: absolute;
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Process</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
        </ul>
      </MenuLinks>
    </header>
  )
}

export default Header
