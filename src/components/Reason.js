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
      <div className="reason-list">
        <div
          style={{
            width: "1%",
          }}
        ></div>
        <ul>
          {reasonList.map((reason, index) => {
            return (
              <li
                style={{
                  width: "98%",
                }}
                key={index}
              >
                <FontAwesomeIcon
                  style={{
                    marginRight: "0.6em",
                  }}
                  icon={faDotCircle}
                />
                {reason.description}
              </li>
            )
          })}
        </ul>
      </div>
      <div
        style={{
          width: "1%",
        }}
      ></div>
    </div>
  )
}

export default Reason
