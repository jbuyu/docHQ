import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Form from "../images/form.svg"
import Contact from "../images/contact.svg"
import Examine from "../images/examine.svg"
import Pills from "../images/pills.svg"
const Reason = () => {
  // const data = useStaticQuery(graphql`
  //   query Images {
  //     stethoscope: file(relativePath: { eq: "stethoscope.png" }) {
  //       id
  //       childImageSharp {
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     form: file(relativePath: { eq: "form.png" }) {
  //       id
  //       childImageSharp {
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div className="process">
      <h3 className="process-header">How it works</h3>
      <ul className="process-list">
        <li className="feature-card">
          <Form
            style={{
              width: "40%",
              height: "40%",
            }}
            // fixed={data.form.childImageSharp.fixed}
          />
          <h5 className="feature-title">Fill in the consultancy form</h5>
          <p className="feature-desc">
            Add your details and symptoms in a correct and precise manner on the
            form above, then click send.
          </p>
        </li>
        <li className="feature-card">
          <Contact
            style={{
              width: "40%",
              height: "40%",
            }}
          />
          <h5 className="feature-title">Contact from doctor</h5>
          <p className="feature-desc">
            Once received, our doctor will contact you and verify details before
            making a visit with all the necessary medical equipment for testing
          </p>
        </li>
        <li className="feature-card">
          <Examine
            style={{
              width: "40%",
              height: "40%",
            }}
          />
          <h5 className="feature-title">Examination &amp; Diagnosis</h5>
          <p className="feature-desc">
            Our doctor will then proceed to examine your medical history,
            diagnose and collect lab tests if requiered.
          </p>
        </li>
        <li className="feature-card">
          <Pills
            style={{
              width: "40%",
              height: "40%",
            }}
          />
          <h5 className="feature-title">Prescriptions &amp; Delivery</h5>
          <p className="feature-desc">
            Once your diagnosis is complete and tests received, a prescription
            will be made and dispatched to your location.
          </p>
        </li>
      </ul>
    </div>
  )
}
export default Reason
