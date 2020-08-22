import React from "react"

import Form from "../../static/images/form.svg"
import Contact from "../../static/images/contact.svg"
import Examine from "../../static/images/examination.svg"
import Pills from "../../static/images/pills.svg"
import Img from "gatsby-image"
const Process = ({ process }) => {
  return (
    <div id="process" className="process">
      <h3 className="process-header">
        <span>how</span> It Works
      </h3>
      {/* <div className="process-list">
        {process.map((proc, index) => {
          return (
            <li key={index} className="process-card">
              <img
                src={proc.image.asset.url}
                alt="process-card"
                style={{
                  width: "200px",
                  height: "180px",
                  alignContent: "center",
                  textAlign: "center",
                }}
              />
              <h5 className="process-title">{proc.step}</h5>
              <p className="process-desc">{proc.description}</p>
            </li>
          )
        })}
      </div> */}
      <ul className="process-list">
        <li className="process-card">
          <Form
            style={{
              width: "200px",
              height: "180px",
            }}
          />
          <h5 className="process-title">Fill in the consultation form</h5>
          <p className="process-desc">
            Add your details and symptoms in a correct and precise manner on the
            form above, then click send.
          </p>
        </li>
        <li className="process-card">
          <Contact
            style={{
              width: "200px",
              height: "180px",
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
              width: "200px",
              height: "180px",
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
              width: "200px",
              height: "180px",
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
export default Process
