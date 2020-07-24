import React from "react"
import Doq from "../images/doc.svg"
const Header = () => (
  <header className="nav">
    <h3 className="logo">
      <a className="logo-img" href="/">
        <Doq style={{ height: "100px", width: "100px" }} />
      </a>
      DOQHQ
    </h3>
  </header>
)

export default Header
