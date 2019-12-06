import React from "react"
import { graphql, Link } from "gatsby"
import Footer from "../components/footer"
import Logo from "../components/logo"
import './get-started.css'
import {LocaleProvider} from '../constants/localeProviders'
import LocalizedLink from "../components/LocalizedLink"

const getStarted = ({ pageContext: { locale }, data }) => {
  return (
     <LocaleProvider value={locale}>
        <header className="header-get-started">
        <div style={{margin: "10px 0"}}>
        <LocalizedLink to="/"><Logo/></LocalizedLink>
        </div>
       
          {/* <LocalizedLink to="/"
            style={{
              position: "relative",
              top: "35px",
              color: "#777",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
            }}
            to="/"
          >
            No, I don't want any advice
          </LocalizedLink> */}
          <LocalizedLink to="/"
            style={{
              position: "relative",
              top: "35px",
              color: "#777",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
            }}
            to="/"
          >
            No, non voglio nessun consiglio
          </LocalizedLink>
        </header>
        <section className="get-started-section">
        <div>
          <h1 style={{marginTop: "60px" }}>
            {data.getStarted.childGetStartedJson.title}
          </h1>
          <span> {data.getStarted.childGetStartedJson.subtitle} 
          </span>
          <p style={{color: "#777", fontSize: "20px", marginTop: "40px"}}><strong> {data.getStarted.childGetStartedJson.ctaText}</strong></p>
          <div>
            <form
              name="Contact Form"
              method="POST"
              data-netlify="true"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
            
                <input type="text" name="name" placeholder={data.getStarted.childGetStartedJson.namePlaceHolder} required />
              </div>
              <div>
           
                <input type="email" name="email" placeholder={data.getStarted.childGetStartedJson.emailPlaceHolder} required />
              </div>
              <div>
                <textarea name="message" placeholder={data.getStarted.childGetStartedJson.textAreaPlaceHolder} required />
              </div>
              <button type="submit">{data.getStarted.childGetStartedJson.ctaButton}</button>
            </form>
          </div>
        </div>
      </section>
       <Footer />
     </LocaleProvider>
  )
}


export const query = graphql`
  query getStarted($locale: String) {
    getStarted: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "get-started" }
    ) {
      childGetStartedJson {
        title
        subtitle
        ctaText
        namePlaceHolder
        emailPlaceHolder
        textAreaPlaceHolder
        ctaButton
        homeLink
      }
    }
  }
`

export default getStarted
