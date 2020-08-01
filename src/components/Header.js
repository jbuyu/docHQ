import React from "react"
import Doq from "../images/doc.svg"
const Header = () => (
  <header className="nav">
    <h3 className="logo">
      <a href="/">
        <Doq className="logo-img" style={{ height: "100px", width: "100px" }} />
      </a>
      KHD
    </h3>
  </header>
)

export default Header
