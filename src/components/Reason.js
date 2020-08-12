import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDotCircle } from "@fortawesome/free-solid-svg-icons"
const Reason = () => {
  return (
    <div id="reason" className="reason">
      <h3 className="reason-header">
        <span>why</span> Kisumu Home Doctors?
      </h3>
      <div className="reason-content">
        <h4>
          More than 90% of patients who visit hospitals do not need in-patient
          care. In this era where hospitals are hotspots for spread of
          infectious diseases, we give you a feasible alternative to have
          quality medical care at the comfort of your home.
        </h4>
      </div>
      <div className="reason-list">
        <ul>
          <li>
            <FontAwesomeIcon
              style={{
                marginRight: "5px",
              }}
              icon={faDotCircle}
            />
            No hospital queues
          </li>
          <li>
            <FontAwesomeIcon
              style={{
                marginRight: "5px",
              }}
              icon={faDotCircle}
            />
            personalised touch to your healthcare.
          </li>
          <li>
            <FontAwesomeIcon
              style={{
                marginRight: "5px",
              }}
              icon={faDotCircle}
            />
            cost effective in the long run.
          </li>
          <li>
            <FontAwesomeIcon
              style={{
                marginRight: "5px",
              }}
              icon={faDotCircle}
            />
            Qualified doctors.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Reason
