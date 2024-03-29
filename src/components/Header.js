import PropTypes from "prop-types"
import React from "react"
import DesktopNavMenu from "./DesktopNav"
import MobileNavMenu from "./MobileNav"

const Header = () => {
  return (
    <>
      <DesktopNavMenu />
      <MobileNavMenu />
    </>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
