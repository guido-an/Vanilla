import React from "react"
import { graphql, Link } from "gatsby"

import Logo from "../components/logo"

const getStarted = ({ pageContext: { locale }, data }) => {
  console.log("data get started ", data)
  return (
    <section>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 4%",
        }}
      >
        <Logo />
        <Link
          style={{
            position: "relative",
            top: "30px",
            color: "#777",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "500"
          }}
          to="/"
        >
          No, I don't want any advice
        </Link>
      </header>
      <div>
      <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label>Name:</label>
        <input type="email" name="name" />
      </div>
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
      </div>
    </section>
  )
}

export const query = graphql`
  query getStarted($locale: String) {
    getStarted: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "get-started" }
    ) {
      childGetStartedJson {
        getStarted
      }
    }
  }
`

export default getStarted
