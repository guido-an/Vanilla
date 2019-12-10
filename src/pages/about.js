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
  // const aboutData = useStaticQuery(graphql`
  //   query {
  //     bigV: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 600) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title="Chi Siamo" />
      <section className="margin-top">
        <div>
        <Img className="big-icon" fluid={data.bigV.childImageSharp.fluid} />
        </div>
      </section>

      {/* <LocalizedLink to="/">back to hoem</LocalizedLink> */}
      <FooterCta linkGetStarted={data.header.childHeaderJson.linkGetStarted}/>
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
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
