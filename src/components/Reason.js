import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Reason = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "stethoscope.png" }) {
        id
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="reason">
      <ul className="reason-list">
        <li className="feature-card">
          <Img fixed={data.image.childImageSharp.fixed} />
          <h5 className="feature-title">
            Get answers, consultations and Diagnosis
          </h5>
          <p className="feature-desc">
            Have you symptomps assessed by a fully acredited medical
            practitioner. Whether it's a simple question or a prescription,
            you'll be contented with the services delivered
          </p>
        </li>
        <li className="feature-card">
          <Img fixed={data.image.childImageSharp.fixed} />
          <h5 className="feature-title">
            Get answers, consultations and Diagnosis
          </h5>
          <p className="feature-desc">
            Have you symptomps assessed by a fully acredited medical
            practitioner. Whether it's a simple question or a prescription,
            you'll be contented with the services delivered
          </p>
        </li>
        <li className="feature-card">
          <Img fixed={data.image.childImageSharp.fixed} />
          <h5 className="feature-title">
            Get answers, consultations and Diagnosis
          </h5>
          <p className="feature-desc">
            Have you symptomps assessed by a fully acredited medical
            practitioner. Whether it's a simple question or a prescription,
            you'll be contented with the services delivered
          </p>
        </li>
        {/* <li className="feture-card"></li>
        <li className="feture-card"></li> */}
      </ul>
    </div>
  )
}
export default Reason
