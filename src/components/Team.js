import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const Team = ({ doctors }) => {
  const data = useStaticQuery(graphql`
    query Images {
      moroga: file(relativePath: { eq: "moroga.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ominde: file(relativePath: { eq: "ominde.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faith: file(relativePath: { eq: "faith.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oyoo: file(relativePath: { eq: "oyoo.jpg" }) {
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
      <ul className="profiles">
        {doctors.map((doc, index) => {
          return (
            <li className="profile" key={index}>
              <img
                className="profile-img"
                src={doc.image.asset.url}
                alt="doctor_image"
              />
              <h4 className="user-name">{doc.name}</h4>
              <h5>{doc.bio}</h5>
            </li>
          )
        })}
      </ul>
      {/* <div className="profiles">
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.oyoo.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. Oyoo Carl(MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.moroga.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. William Moroga(MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.faith.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. Faith Ondago (MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
        <div className="profile">
          <Img
            className="profile-img"
            fluid={data.ominde.childImageSharp.fluid}
          />
          <h4 className="user-name">Dr. Ominde Francis (MBChB)</h4>
          <h5>General Practitioner</h5>
        </div>
      </div> */}
    </div>
  )
}
export default Team
