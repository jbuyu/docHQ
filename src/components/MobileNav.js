import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import Doq from "../../static/images/doq.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import CopyToClipboard from "react-copy-to-clipboard"

// import {
//   faClipboard,
//   faEnvelopeOpenText,
// } from "@fortawesome/free-solid-svg-icons"
const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)
  const [copy, copied] = useState(false)

  return (
    <MenuBar>
      <Link
        style={{
          width: "20%",
        }}
        to="/"
      >
        <Doq
          className="logo-img"
          style={{
            fontSize: "1.6em",
            fonWeight: "400",
            marginTop: "0.36em",
            // marginBottom: "1.8rem",
            // marginLeft: "0em",
            // padding: "0em",
            height: "125px",
            width: "150px",
          }}
        />
      </Link>
      <CenterContainer>
        <li className="center-div">
          <span
            style={{
              marginRight: "0.6em",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "#6CB66C",
              }}
              href="tel:0742464878"
            >
              0742464878
            </a>
          </span>

          {/* <CopyToClipboard text="0703468112" onCopy={() => copied(true)}>
            <FontAwesomeIcon
              onKeyDown={() => copied(false)}
              icon={faClipboard}
              style={{
                outline: "none",
                border: "none",
                borderWidth: "0px !important",
                background: "none !important",
                cursor: "pointer",
              }}
            />
          </CopyToClipboard>
          {copy ? (
            <span
              style={{
                color: "#AFE6C3",
                marginLeft: "0.6em",
              }}
            >
              copied
            </span>
          ) : null} */}
          <span>
            {/* <FontAwesomeIcon icon={faEnvelopeOpenText} /> */}
            kisumudoctors@gmail.com
          </span>
        </li>
      </CenterContainer>
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
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                scrollTo("#form")
                toggleMenuOpen(!menuOpen)
              }}
            >
              Form
            </span>
          </li>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                scrollTo("#process")
                toggleMenuOpen(!menuOpen)
              }}
            >
              Process
            </span>
          </li>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                scrollTo("#team")
                toggleMenuOpen(!menuOpen)
              }}
            >
              Team
            </span>
          </li>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                scrollTo("#services")
                toggleMenuOpen(!menuOpen)
              }}
            >
              Services
            </span>
          </li>
          <li>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                scrollTo("#reason")
                toggleMenuOpen(!menuOpen)
              }}
            >
              why KHD?
            </span>
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
  top: 0;
  height: 4.2rem;
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: "blue";
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CenterContainer = styled.div`
  display: flex;
  /* width: 50%; */
  /* justify-content: center;
  align-items: center; */
  li {
    list-style-type: none;
    display: flex;
    flex-direction: flex-start;
    color: #4ca64c;
    margin-top: 1em;
    margin-left: 3em;
    span {
      flex: 1;
    }
    span:first-child {
      width: 50%;
    }
    span:last-child {
      width: 50%;
      display: flex-end;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`
const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 20%; */
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

    background: ${({ menuOpen }) => (menuOpen ? "#4c4c4c" : "#4ca64c")};
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
  height: 100vh;
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

      span {
        text-decoration: none;
        color: white;
        :hover {
          color: "#34453a";
        }
      }
    }
  }
`
