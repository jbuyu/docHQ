import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import CopyToClipboard from "react-copy-to-clipboard"

import Doq from "../../static/images/doq.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhoneSquareAlt,
  faEnvelopeOpenText,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons"
const DesktopNavMenu = () => {
  const [background, setBackground] = useState(false)
  const [copy, copied] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <StyledHeader background={background}>
      <ul>
        <li>
          <a href="/">
            <Doq
              className="logo-img"
              style={{
                fontSize: "1.6em",
                fonWeight: "400",
                marginLeft: "5rem",
                marginTop: "0.36em",
                height: "125px",
                width: "150px",
              }}
            />
          </a>
        </li>
        <li className="center-div">
          <span>
            <span>
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
                  marginRight: "10px",
                  marginLeft: "10px",
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
                }}
              >
                copied
              </span>
            ) : null} */}
          </span>
          <span>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              style={{
                marginRight: "10px",
              }}
            />
            kisumudoctors@gmail.com
          </span>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default DesktopNavMenu

const StyledHeader = styled.header`
  display: none;
  top: 0;
  /* height: 2em; */
  @media ${breakpoints.lg} {
    margin-bottom: 0px !important;
    height: 4.2rem;
    display: flex;
    flex-direction: space-between;
    position: fixed;
    width: 100%;
    z-index: 10;

    /* padding: 0.5rem; */
    transition: background 300ms;
    background: ${({ background }) => (background ? "white" : "transparent")};
    ul {
      margin-bottom: 0px !important;
      padding-bottom: 0px !important;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      margin-top: 0px !important;
      li:first-child {
        list-style: none;
        display: flex;
        width: 50%;
        a {
          text-decoration: none;
          color: black;
          transition: color 300ms;
          :hover {
            color: red;
          }
        }
      }
      li:last-child {
        width: 50%;
        display: flex;
        flex-direction: row;
        margin-right: 4rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #198c65;
        span {
          flex: 1;
        }
        /* span:first-child {
          float: right;
        } */
      }
    }
  }
`
