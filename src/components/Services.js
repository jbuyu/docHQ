import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserMd } from "@fortawesome/free-solid-svg-icons"
const Services = () => {
  return (
    <div className="services">
      <h4 className="services-header">
        <span>our</span> Services
      </h4>
      <div className="service-types">
        <h5>
          <FontAwesomeIcon icon={faUserMd} /> General Medical Consultation
        </h5>
      </div>
    </div>
  )
}

export default Services
