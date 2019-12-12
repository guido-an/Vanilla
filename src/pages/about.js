import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"
import FooterCta from "../components/footerCta"
import './about.css'

const About = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title="Chi Siamo" />
      <section className="margin-top">
        <div className="about-section-container">

          <div>
            <Img className="big-icon" fluid={data.bigV.childImageSharp.fluid} />
          </div>


          <div className="page-bg">
            <span className="overtitle-dark">DIGITAL CREATORS</span>
            <h1>Vanilla Manifesto</h1>
            <p className="subtitle-page">
              {data.about.childAboutJson.subtitle}
            </p>
            <div className="text-service-container">
 
             <div>
              {data.about.childAboutJson.multiline1.map((string, i) => {
              
                return <p key={i}>{string}</p>
              })}
              </div>
              <div>
              {data.about.childAboutJson.multiline2.map((string, i) => {
                   
                   if(string.includes("www")){
                      var str = "www.premiumsupport.vanillamarketing.it";
                      var URL = "http://www.premiumsupport.vanillamarketing.it";  
                       return <a style={{textDecoration: "none"}} href={URL} target="_blank"><p>{string}</p></a>
                  
                   } else {
                       return <p key={i}>{string}</p>
                   }    
    
              })}
            </div>
            </div>
          </div>
        </div>
        
      <div className="about-photo-container">
       <span className="overtitle-dark">DIGITAL CREATORS</span>
            <h1>Vanilla Manifesto</h1>
            <p className="subtitle-page">
              {data.about.childAboutJson.subtitle}
            </p>
      <div className="photo-row-1">
      <Img className="about-photo" fluid={data.fotoV.childImageSharp.fluid} />
      <Img className="about-photo" fluid={data.fotoV.childImageSharp.fluid} />
      <Img className="about-photo" fluid={data.fotoV.childImageSharp.fluid} />
      </div>
      <div className="photo-row-2">
      <Img className="about-photo" fluid={data.fotoV.childImageSharp.fluid} />
      <Img className="about-photo" fluid={data.fotoV.childImageSharp.fluid} />
      <Img className="about-photo" fluid={data.fotoV.childImageSharp.fluid} />
      </div>

      </div>
      </section>

      {/* <LocalizedLink to="/">back to hoem</LocalizedLink> */}
      <FooterCta linkGetStarted={data.header.childHeaderJson.linkGetStarted} />
    </Layout>
  )
}

export const query = graphql`
  query About($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
        linkGetStarted
      }
    }
    about: file(name: { eq: $locale }, relativeDirectory: { eq: "about" }) {
      childAboutJson {
       subtitle
       multiline1
       multiline2
      }
    }

    bigV: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
      fotoV: file(relativePath: { eq: "foto-test.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
   
  }
`

export default About
