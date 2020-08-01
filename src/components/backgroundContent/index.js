import React from "react"
// import { StaticQuery, graphql } from "gatsby"
import BgWrapper from "./bgStyles/BgWrapper"
import FakeBgImage from "./bgStyles/FakeBgImage"
import Content from "./bgStyles/Content"
const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  className,
  children,
}) => (
  <BgWrapper>
    fluid={fluid}
    <FakeBgImage
      mobileHeight={mobileHeight}
      height={height}
      fluid={fluid}
      title={title}
    >
      <Content className={className}>{children}</Content>
    </FakeBgImage>
  </BgWrapper>
)
export default BgImage
