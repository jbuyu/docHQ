import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { useStaticQuery, graphql } from "gatsby"
import Doq from "../images/doq.svg"
import Img from "gatsby-image"

const DesktopNavMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      doc: file(relativePath: { eq: "doc.png" }) {
        childImageSharp {
          fluid(maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [background, setBackground] = useState(false)
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
                height: "125px",
                width: "150px",
              }}
            />
          </a>
        </li>
        {/* <li>
          <button
            style={{
              color: "white",
              backgroundColor: "white",
              border: "none",
              outline: "none",
            }}
          >
            <a
              style={{
                cursor: "pointer",
                background: "transparent",
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "2rem",
                outline: "none",
                border: "none",
                zIndex: "11",
              }}
              href="#"
            >
              <div
                style={{
                  width: "1.95rem",
                  height: "0.25rem",
                  borderRadius: "10px",
                  transformOrigin: "1px",
                  transition: "opacity 300ms, transform 300ms",
                  background: "#4ca64c",
                }}
              />
              <div
                style={{
                  width: "1.95rem",
                  height: "0.25rem",
                  borderRadius: "10px",
                  transformOrigin: "1px",
                  transition: "opacity 300ms, transform 300ms",
                  background: "#4ca64c",
                }}
              />
              <div
                style={{
                  width: "1.95rem",
                  height: "0.25rem",
                  borderRadius: "10px",
                  transformOrigin: "1px",
                  transition: "opacity 300ms, transform 300ms",
                  background: "#4ca64c",
                }}
              />
            </a>
          </button>
          <ul>
            <li>
              <a href="" className="formm"></a>
            </li>
            <li>
              <a href="" className="process"></a>
            </li>
            <li>
              <a href="" className="team"></a>
            </li>
            <li>
              <a href="" className="services"></a>
            </li>
          </ul>
        </li> */}
      </ul>
    </StyledHeader>
  )
}

export default DesktopNavMenu

const StyledHeader = styled.header`
  display: none;
  top: 0;
  @media ${breakpoints.lg} {
    display: flex;
    flex-direction: space-between;
    position: fixed;
    width: 100%;
    z-index: 10;
    /* padding: 0.5rem; */
    transition: background 300ms;
    background: ${({ background }) => (background ? "white" : "transparent")};
    ul {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      margin: auto;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: black;
          transition: color 300ms;
          :hover {
            color: red;
          }
        }
        Img {
        }
      }
      li:last-child {
        margin-right: 8rem;
      }
    }
  }
`
