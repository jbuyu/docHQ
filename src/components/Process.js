import React from "react"

// import Form from "../../static/assets/form.svg"
// import Contact from "../../static/assets/contact.svg"
// import Examine from "../../static/assets/examine.svg"
// import Pills from "../../static/assets/pills.svg"
import Img from "gatsby-image"
const Process = ({ process }) => {
  return (
    <div id="process" className="process">
      <h3 className="process-header">
        <span>how</span> It Works
      </h3>
      <div className="process-list">
        {process.map((proc, index) => {
          return (
            <li key={index} className="process-card">
              <img
                src={proc.image.asset.url}
                style={{
                  width: "200px",
                  height: "180px",
                  alignContent: "center",
                  textAlign: "center",
                }}
              />
              <h5 className="process-title">{proc.step}</h5>
              <p className="process-desc">{proc.description}</p>
            </li>
          )
        })}
      </div>
    </div>
  )
}
export default Process
