import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDotCircle } from "@fortawesome/free-solid-svg-icons"
const Reason = ({ reason, reasonList }) => {
  return (
    <div id="reason" className="reason">
      <h3 className="reason-header">
        <span>why</span> Kisumu Home Doctors?
      </h3>
      <div className="reason-content">
        <h4>{reason.description}</h4>
      </div>
      <ul className="reason-list">
        {reasonList.map((reason, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon
                style={{
                  marginRight: "5px",
                }}
                icon={faDotCircle}
              />
              {reason.description}
            </li>
          )
        })}
      </ul>
      {/* <ul>
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
      </ul> */}
    </div>
  )
}

export default Reason
