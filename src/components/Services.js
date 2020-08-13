import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import {
//   faUserMd,
//   faBabyCarriage,
//   faVials,
//   faUserNurse,
//   faIdCard,
// } from "@fortawesome/free-solid-svg-icons"
const Services = ({ services }) => {
  const { background, kid, colhue } = useStaticQuery(graphql`
    query {
      kid: file(relativePath: { eq: "cute.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "cute.jpeg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colhue: file(relativePath: { eq: "crystal.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const backgroundFluidImageStack = [
    background.childImageSharp.fluid,
    kid.childImageSharp.fluid,
    colhue.childImageSharp.fluid,
  ].reverse()
  return (
    <div id="services">
      <h4 className="services-header">
        <span>our</span> Services
      </h4>
      <BackgroundImage
        className="services-back-image"
        fluid={backgroundFluidImageStack}
      >
        <div className="services">
          <div className="service-types">
            {services.map((service, index) => {
              return (
                <li className="single-service" key={index}>
                  {service.description}
                </li>
              )
            })}
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Services
