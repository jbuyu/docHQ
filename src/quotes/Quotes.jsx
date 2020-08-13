import React, { useState } from "react"
import { css } from "emotion"

const Quotes = ({ reviews }) => {
  const [current, setCurrent] = useState(reviews[0])
  const [active, setActive] = useState(0)
  const handleClick = event => {
    setCurrent(reviews[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        max-width: 700px;

        p {
          margin-top: 10%;
          text-align: center;
          margin-bottom: 20px;
          color: #e5e5e5;
          font-size: 18px;
        }
      `}
    >
      <p
        style={{
          height: "60%",
        }}
      >
        {current.comment}
      </p>
      <p
        style={{
          height: "20%",
        }}
      >
        {current.name}
      </p>
      <div
        className={css`
          display: flex;
          span {
            height: 30%;
            width: 30%;
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          span::before {
            content: "";
            height: 15px;
            width: 15px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }
          span:hover::before {
            background-color: #45454d;
          }
          span[data-quote="${active}"]::before {
              background-color:#45454d;
          }
        `}
      >
        {Object.keys(reviews).map(index => (
          <span
            role="button"
            tabIndex={0}
            style={{
              height: "15%",
            }}
            onClick={event => handleClick(event)}
            onKeyDown={event => handleClick(event)}
            data-quote={index}
            key={index}
            aria-label="next review"
          />
        ))}
      </div>
    </div>
  )
}
export default Quotes
