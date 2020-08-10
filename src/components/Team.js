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
            fluid={data.doc4.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. Oyoo Carl(MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc1.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. William Moroga(MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc3.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. Faith Ondago (MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.doc2.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. Ominde Francis (MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
      </div>
    </div>
  )
}
export default Team
