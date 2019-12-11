import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"
import FooterCta from "../components/footerCta"


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
            
           
            <span className="overtitle-dark">NICE TO MEET YOU</span>
            <h1>Chi Siamo</h1>
            <p className="subtitle-page"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                veritatis commodi unde doloribus laboriosam</p>
            <div className="text-service-container">
           
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis commodi unde doloribus laboriosam, placeat est
                dignissimos, reprehenderit repudiandae, non qui temporibus culpa
                soluta praesentium? 
                
                Quia ipsum minima eaque voluptate
                dignissimos? Maxime tenetur nesciunt unde minima reiciendis quia
                quos, architecto eveniet! Dolorum qui enim obcaecati,
                accusantium unde sed totam harum cupiditate iure ipsa dolore
                aspernatur laboriosam odio neque nostrum similique magnam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis commodi unde doloribus laboriosam, placeat est
                dignissimos, reprehenderit repudiandae, non qui temporibus culpa
                soluta praesentium? 
                
                Quia ipsum minima eaque voluptate
                dignissimos? Maxime tenetur nesciunt unde minima reiciendis quia
                quos, architecto eveniet! Dolorum qui enim obcaecati,
                accusantium unde sed totam harum cupiditate iure ipsa dolore
                aspernatur laboriosam odio neque nostrum similique magnam.
              </p>
              
            </div>
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
        about
      }
    }
    bigV: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
