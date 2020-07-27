import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Reason = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "stethoscope.png" }) {
        id
        childImageSharp {
          fixed {
            src
            srcSet
          }
          fluid {
            src
            srcSet
          }
        }
      }
    }
  `)
  console.log("data", data)
  return (
    <div className="reason">
      <ul className="reason-list">
        <li className="feture-card"></li>
        <li className="feture-card"></li>
        <li className="feture-card"></li>
      </ul>
    </div>
  )
}
export default Reason
