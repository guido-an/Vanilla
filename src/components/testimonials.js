import React, { useState } from "react"
import { css, cx } from "emotion"

export default function Testimonial({data}) {
const quotes = [
    {
      client: data.client0,
      quote: data.quote0,
    },
    {
      client: data.client1,
      quote: data.quote1,
    },
    {
      client: data.client2,
      quote: data.quote2,
    }
]

  const [current, setCurrent] = useState(quotes[0])
  const [active, setActive] = useState(0)

  const handleSetClick = e => {
     setCurrent(quotes[e.target.getAttribute("data-quote")])
     setActive(e.target.getAttribute("data-quote"))
  }

  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        max-width: 700px p {
          text-align: center;
          margin-bottom: 20px;
        }
      `}
    >
      <p>{current.quote}</p>
      <p>{current.client}</p>
      <div
        className={css`
          display: flex;
          span {
            height: 20px;
            width: 20px;
            margin: 0 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          span::before {
            content: "";
            height: 6px;
            width: 6px;
            background-color: #777;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }
          span:hover::before {
            background-color: #000;
          }
          span[data-quote="${active}"]::before{
              background-color: #000
          }
        `}
      >
        {Object.keys(quotes).map(index => (
          <span
            onClick={e => handleSetClick(e)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
