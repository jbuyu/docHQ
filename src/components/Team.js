import React, { Component } from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const Team = () => {
  const data = useStaticQuery(graphql`
    query Images {
      doc1: file(relativePath: { eq: "doc1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doc2: file(relativePath: { eq: "doc2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doc3: file(relativePath: { eq: "doc3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      doc4: file(relativePath: { eq: "doc4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="meet-team">
      <div className="profiles">
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc1.childImageSharp.fluid}
          />
          <h3 className="user-name">John</h3>
          <h5>Head Nurse</h5>
          <p>Our head doc on the platform</p>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc2.childImageSharp.fluid}
          />
          <h3 className="user-name">Andrew</h3>
          <h5>Head Nurse</h5>
          <p>Our head doc on the platform</p>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc3.childImageSharp.fluid}
          />
          <h3 className="user-name">Loice</h3>
          <h5>Head Nurse</h5>
          <p>Our head doc on the platform</p>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc4.childImageSharp.fluid}
          />
          <h3 className="user-name">Loice</h3>
          <h5>Head Nurse</h5>
          <p>Our head doc on the platform</p>
        </div>
      </div>
    </div>
  )
}
export default Team
