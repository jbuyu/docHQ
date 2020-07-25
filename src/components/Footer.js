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
          <p className="footer-p">&#169; 2020 Doqhq. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
