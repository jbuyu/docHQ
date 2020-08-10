import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserMd,
  faBabyCarriage,
  faVials,
  faUserNurse,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons"
const Services = () => {
  return (
    <div id="services">
      <h4 className="services-header">
        <span>our</span> Services
      </h4>

      <div className="services">
        <div>
          <ul className="service-types">
            <li>
              <FontAwesomeIcon icon={faUserMd} /> General Medical Consultation
            </li>
            <li>
              <FontAwesomeIcon icon={faBabyCarriage} /> Home Based Antenatal
              Clinic
            </li>
            <li>
              <FontAwesomeIcon icon={faVials} /> Laboratory diagnosis
            </li>
            <li>
              <FontAwesomeIcon icon={faUserNurse} /> Home Based Nursing care
            </li>
            <li>
              <FontAwesomeIcon icon={faIdCard} /> Admission and Follow up within
              kisumu
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
