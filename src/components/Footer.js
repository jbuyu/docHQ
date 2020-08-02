import React from "react"
import Doq from "../images/doc.svg"
import Facebook from "../images/facebook.svg"
import Linkedin from "../images/linkedin.svg"
import Twitter from "../images/twitter.svg"

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
          <p className="footer-copywright">&#169; 2020 KHD. All Rights Reserved.</p>
        </div>
        <div className="vertical"></div>
        <div className="detail">
          <p>Kisumu Home Doctors</p>
          <p>+254700456768</p>
          <p>info@kisumuhomedoctors.com</p>
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
        <div className="vertical"></div>
        <div className="social">
          <strong>
            <h4>Get in Touch</h4>
            <div className="media-icons">
              <div className="icon">
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook style={{ width: "32px", height: "32px" }} />
                </a>
              </div>
              <div className="icon">
                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter style={{ width: "32px", height: "32px" }} />
                </a>
              </div>

              <div className="icon">
                <a
                  href="http://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin style={{ width: "32px", height: "32px" }} />
                </a>
              </div>
            </div>
          </strong>
        </div>
      </div>
    </footer>
  )
}
export default Footer
