import React, { useState } from "react"
import { css, cx } from "emotion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStopCircle } from "@fortawesome/free-solid-svg-icons"
const Quoter = () => {
  const quotes = {
    0: {
      client: "Brenda wairimu",
      quote:
        "Received great advice from resident doctors.Had painful joints and wasn't even sure i'd walk again. I'm amazed we have such services in Kisumu. Would work with them again",
    },
    1: {
      client: "morris andeli",
      quote:
        "The onboarding process was surprisingly seamless. I used both the telemedicine and home doctor options and honestly, the quality of service blew my mind.",
    },
    2: {
      client: "Loice Abonyo",
      quote:
        "It works! I received great pre-natal care when my water broke and I had to dial in! Also, the doctors attended to me faster than I thought",
    },
    3: {
      client: "Aldi Ochieng",
      quote:
        "To all the doctors and nurses I met at KHD, thank you. May God continue giving you strength. I couldn't have made it if it wasn't for the good care offered.",
    },
  }

  const [current, setCurrent] = useState(quotes[0])
  const [active, setActive] = useState(0)
  const handleClick = event => {
    setCurrent(quotes[event.target.getAttribute("data-quote")])
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
        {current.quote}
      </p>
      <p
        style={{
          height: "20%",
        }}
      >
        {current.client}
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
        {Object.keys(quotes).map(index => (
          <span
            style={{
              height: "20%",
            }}
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
