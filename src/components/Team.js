import React from "react"
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
    <div id="team" className="meet-team">
      <h1 className="heading">
        <span>meet</span> Our Team
      </h1>
      <div className="profiles">
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc1.childImageSharp.fluid}
          />
          <h3 className="user-name">Brenda</h3>
          <h5>Pharmacologist</h5>
          <p>
            A doctor since 2005. She leads and advices our team of medical
            experts on all aspects relating to health
          </p>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc2.childImageSharp.fluid}
          />
          <h3 className="user-name">Andrew</h3>
          <h5>Head Nurse</h5>
          <p>
            Our head doc on the platform. She is particularly interested in
            familly medicine and mental health
          </p>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc3.childImageSharp.fluid}
          />
          <h3 className="user-name">Stacy</h3>
          <h5>Dentist</h5>
          <p>
            Stacy is a Lienced Dental Doctor with 10 years of experience
            treating patients from alll over the country
          </p>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc4.childImageSharp.fluid}
          />
          <h3 className="user-name">Loice</h3>
          <h5>Doctor</h5>
          <p>
            Loice is our mandated Surgical dctor. She leads the surgical team.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Team
