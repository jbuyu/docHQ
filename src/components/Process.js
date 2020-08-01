import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Reason = () => {
  const data = useStaticQuery(graphql`
    query Images {
      stethoscope: file(relativePath: { eq: "stethoscope.png" }) {
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
      form: file(relativePath: { eq: "form.png" }) {
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
  return (
    <div className="process">
      <h3 className="process-header">How it works</h3>
      <ul className="process-list">
        <li className="feature-card">
          <Img
            style={{
              width: "20%",
              height: "20%",
            }}
            fixed={data.form.childImageSharp.fixed}
          />
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
          <Img
            style={{
              width: "30%",
              height: "30%",
            }}
            fixed={data.stethoscope.childImageSharp.fixed}
          />
          <h5 className="feature-title">
            Get answers, consultations and Diagnosis
          </h5>
          <p className="feature-desc">
            Have you symptomps assessed by a fully acredited medical
            practitioner. Whether it's a simple question or a prescription,
            you'll be contented with the services delivered
          </p>
        </li>
      </ul>
    </div>
  )
}
export default Reason
