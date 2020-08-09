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
                // marginTop: "1rem",
                marginLeft: "5rem",
                height: "150px",
                width: "150px",
              }}
            />
          </a>
        </li>
        <li>
          <Link to="/about">Menu</Link>
        </li>
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
