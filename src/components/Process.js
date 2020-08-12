import React from "react"

// import Form from "../../static/assets/form.svg"
// import Contact from "../../static/assets/contact.svg"
// import Examine from "../../static/assets/examine.svg"
// import Pills from "../../static/assets/pills.svg"
import Img from "gatsby-image"
const Reason = ({ process }) => {
  return (
    <div id="process" className="process">
      <h3 className="process-header">
        <span>how</span> It Works
      </h3>
      {process.map(({ image, step, description }, index) => {
        return (
          <li className="process-card">
            <svgCover
              style={{
                width: "40%",
                height: "40%",
              }}
            />
            <h5 className="process-title">{step}</h5>
            <p className="process-desc">{description}</p>
          </li>
        )
      })}
      <ul className="process-list">
        <li className="process-card">
          <Contact
            style={{
              width: "40%",
              height: "40%",
            }}
          />
          <h5 className="process-title">Contact from doctor</h5>
          <p className="process-desc">
            Once received, our doctor will contact you and verify details before
            making a visit with all the necessary medical equipment for testing
          </p>
        </li>
        <li className="process-card">
          <Examine
            style={{
              width: "40%",
              height: "40%",
            }}
          />
          <h5 className="process-title">Examination &amp; Diagnosis</h5>
          <p className="process-desc">
            Our doctor will then proceed to examine your medical history,
            diagnose and collect lab tests if requiered.
          </p>
        </li>
        <li className="process-card">
          <Pills
            style={{
              width: "40%",
              height: "40%",
            }}
          />
          <h5 className="process-title">Prescriptions &amp; Delivery</h5>
          <p className="process-desc">
            Once your diagnosis is complete and tests received, a prescription
            will be made and dispatched to your location.
          </p>
        </li>
      </ul>
    </div>
  )
}
export default Reason
