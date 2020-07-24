import { Link } from "gatsby"
import React from "react"
import Doq from "../images/doc.svg"
const Header = () => (
  <header className="nav">
    <h3 className="logo">
      <a href="/">
        <Doq />
      </a>
      DOQHQ
    </h3>
  </header>
)

export default Header
