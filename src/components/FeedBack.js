import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const FeedBack = () => {
  const data = useStaticQuery(graphql`
    query Images {
      cute: file(relativePath: { eq: "cute.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="feedback">
      {/* <Img
        style={{
          width: "100%",
          // height: "100%",
        }}
        fixed={data.cute.childImageSharp.fixed}
      /> */}
      <div className="text-overlay">
        <h3>Doctor patient notes</h3>
      </div>
    </div>
  )
}

export default FeedBack
