import React, { useState } from "react"
import { css, cx } from "emotion"
const Quoter = () => {
  const quotes = {
    0: {
      client: "Brenda wairimu",
      quote:
        "Received great advice from resident doctors. Would work with them again",
    },
    1: {
      client: "morris andeli",
      quote:
        "Had painful joints and wasn't even sure i'd be walking again if it wasn't for KHD",
    },
    2: {
      client: "Loice Abonyo",
      quote:
        "It works! I received great pre-natal care when my water broke and I had to dial in!",
    },
    3: {
      client: "Aldi Ochieng",
      quote:
        "Had bouts of migraines for a while and Kisumu home doctors helped a great deal",
    },
  }

  const [current, setCurrent] = useState(quotes[0])
  const [active, setActve] = useState(0)
  const handleClick = () => {
    console.log("meau")
  }
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        max-width: 700px;

        p{
        margin-top:10%;
        text-align:center;
        margin-bottom:20px;
        color:#E5E5E5;
        font-size:18px;
      `}
    >
      <p>{current.quote}</p>
      <p>{current.client}</p>
      <div
        className={css`
          display: flex;

          span {
            height: 20%;
            width: 20%;
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          span::before {
            content: "";
            height: 10px;
            width: 10px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }
          span:hover::before {
            backgrund-color: #45454d;
          }
          span[data-quote="${active}"]:: before {
              background-color:#45454d;
          }
        `}
      >
        {Object.keys(quotes).map(index => (
          <span
            onClick={event => handleClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
export default Quoter
