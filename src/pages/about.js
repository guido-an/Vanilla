import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import LocalizedLink from "../components/LocalizedLink"
import FooterCta from "../components/footerCta"
import PageBody from "../components/pageBody"
import './about.css'

const About = ({ pageContext: { locale }, data }) => {
  console.log("data", data)
  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title="Chi Siamo" />
      <PageBody bigIcon={data.bigIcon.childImageSharp.fluid} overtitle={data.about.childAboutJson.overtitle} title={data.about.childAboutJson.title} subtitle={data.about.childAboutJson.subtitle} multiline1={data.about.childAboutJson.multiline1}/>
      {/* <section className="margin-top">
        <div className="about-section-container">

      
            <Img className="big-icon" fluid={data.bigV.childImageSharp.fluid} />
          


          <div className="page-bg">
            <span className="overtitle-dark">DIGITAL CREATORS</span>
            <h1>Vanilla Manifesto</h1>
            <p className="subtitle-page">
              {data.about.childAboutJson.subtitle}
            </p>
            <div className="text-service-container">
             <div>
              {data.about.childAboutJson.multiline1.map((string, i) => {
               if(string.includes("www")){
                      var str = "www.premiumsupport.vanillamarketing.it";
                      var URL = "http://www.premiumsupport.vanillamarketing.it";  
                       return <a style={{textDecoration: "none"}} href={URL} target="_blank"><p style={{position: "relative", bottom:"22px"}}>{string}</p></a>
                  
                   } else {
                       return <p key={i}>{string}</p>
                   }    
              
              })}
            
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="about-photo-container">
       <span className="overtitle-dark">PIACERE DI CONOSCERTI</span>
            <h1>La ciurma Vanilla</h1>
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