import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import FooterCta from "../components/footerCta"
import PageBody from "../components/pageBody"
import './about.css'

const About = ({ pageContext: { locale }, data }) => {

  const { overtitle, title, subtitle, multiline1 } = data.about.childAboutJson

  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title="Chi Siamo" />
      <PageBody 
      bigIcon={data.bigIcon.childImageSharp.fluid} 
      overtitle={overtitle} 
      title={title} 
      subtitle={subtitle} 
      multiline1={multiline1}
      />
      <div className="about-photo-container">
       <span className="overtitle-dark">PIACERE DI CONOSCERTI :)</span>
            <h1>Ecco chi siamo</h1>
            <p className="subtitle-page">
            Si! Anche Olivia, il bulldog pigro e paffuto, fa parte di Vanilla."
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
     
      <FooterCta 
      linkGetStarted={data.header.childHeaderJson.linkGetStarted} 
      textGetStarted={data.header.childHeaderJson.textGetStarted} 
      title={data.footerCta.childFooterCtaJson.title}
      subtitle={data.footerCta.childFooterCtaJson.subtitle}
      />
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
        textGetStarted
      }
    }
    about: file(name: { eq: $locale }, relativeDirectory: { eq: "about" }) {
      childAboutJson {
      overtitle
      title
       subtitle
       multiline1
      }
    }
  bigIcon: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    footerCta: file( name: { eq: $locale } relativeDirectory: { eq: "footer-cta" }) {
      childFooterCtaJson {
      title
      subtitle
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



  // bigV: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
  //     childImageSharp {
  //       fluid(maxWidth: 400) {
  //         ...GatsbyImageSharpFluid
  //       }
  //     }
  //   }
  //     fotoV: file(relativePath: { eq: "foto-test.jpg" }) {
  //     childImageSharp {
  //       fluid(maxWidth: 600) {
  //         ...GatsbyImageSharpFluid
  //       }
  //     }
  //   }