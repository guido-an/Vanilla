import React from "react"
import { graphql, Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import {LocaleConsumer} from "../components/layout"

import Logo from "../components/logo"

const getStarted = ({ pageContext: { locale }, data }) => {
  console.log("data get started ", data, locale)
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
              fontWeight: "500",
            }}
            to="/"
          >
            No, I don't want any advice
          </Link>
        </header>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            We are JAMstack developers.
          </h1>
          <div>
            <form
              name="Contact Form"
              method="POST"
              data-netlify="true"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label>Name:</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label>Your Email:</label>
                <input type="email" name="email" placeholder="*Email" />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" placeholder="How can we help?" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        {/* <Footer/> */}
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
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
        childHeaderJson {
          home
          homeLink
          about
          aboutLink
          services
          contact
          contactLink
        }
      }
  }
`

export default getStarted
