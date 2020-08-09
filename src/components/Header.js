import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DesktopNavMenu from "./DesktopNav"

const Header = () => {
  return (
    <>
      <DesktopNavMenu />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
