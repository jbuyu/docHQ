import React, { Component } from "react"
import Doq from "../images/doc.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-img">
          <a href="/">
            <Doq
              className="logo-img"
              style={{ height: "100px", width: "100px" }}
            />
          </a>
          <p className="footer-p">
            &#169; 2020 Kisumu Home Doctors. All Rights Reserved.
          </p>
        </div>
        <div className="detail">
          <p>Kisumu Home Doctors</p>
          <p>+254700456768</p>
          <p>info@healthdoctors.com</p>
        </div>
        <div className="terms">
          <p>
            <a className="ts" href="/">
              Terms and Service
            </a>
          </p>
          <p>
            <a className="policy" href="/">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="copywright">
          <strong>
            <h4>Get in Touch</h4>
          </strong>
        </div>
      </div>
    </footer>
  )
}
export default Footer
