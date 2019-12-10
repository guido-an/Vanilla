import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./servicesSection.css"
import Img from "gatsby-image"
import LocalizedLink from "./LocalizedLink"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      webDevIcon: file(relativePath: { eq: "realizzazione-siti-web.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socialMediaIcon: file(
        relativePath: { eq: "social-media-marketing.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webMarketingIcon: file(relativePath: { eq: "web-marketing.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graphicDesignIcon: file(relativePath: { eq: "graphic-design.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data, "data")

  return (
    <section onScroll={console.log("scroll")} className="services-section">
      <div className="services-section-container">
        <p className="overtitle">I NOSTRI SERVIZI</p>
        <h2 className="title-section">
         Quello che possiamo fare per te
          <br />
        </h2>
        <p className="section-desc">
          Siti, applicazioni web, social, web marketing e graphic design
          <br />
          dall'effetto wow :)
        </p>
        <div className="services-container">
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.webDevIcon.childImageSharp.fluid} />
            </div>

            <p className="service-title">
              <strong>WEB DEVELOPMENT</strong>
            </p>
            <p className="service-desc">
          Siti, e-commerce e applicazioni web. Siamo tra le prime agenzia in Italia a utilizzare l'approcco JAMstack per risultati dannatamente migliori. 
            </p>
            <p>
              <LocalizedLink to="/" className="service-cta-home">
                <strong>> Web Development</strong>
              </LocalizedLink>
            </p>
          </div>
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.socialMediaIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>SOCIAL MEDIA</strong>
            </p>

            <p className="service-desc">
              Strategia, competenza e buon gusto sono garantiti. Questi gli
              aspetti che rendono riconoscibili ed efficaci le nostre gestioni
              social media.
            </p>
            <p>
              <LocalizedLink to="/" className="service-cta-home">
                <strong>> Social Media</strong>
              </LocalizedLink>{" "}
            </p>
          </div>
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.webMarketingIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>WEB MARKETING</strong>
            </p>
            <p className="service-desc">
              Ottimizzazione SEO e link building, campagne Google Adwords e analisi dati per
              aumentare, finalmente, il traffico e le conversioni
            
            </p>
            <p>
              <LocalizedLink to="/" className="service-cta-home">
                <strong>> Web Marketing</strong>
              </LocalizedLink>
            </p>
          </div>
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.graphicDesignIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>GRAPHIC DESIGN</strong>
            </p>
            <p className="service-desc">
             Creatività, studio dell'immagine e grafica coordinata. Creiamo brand efficaci capaci di essere riconoscibili anche a occhi chiusi.
            </p>
            <p>
              <LocalizedLink to="/" className="service-cta-home">
                <strong>> Graphic Design</strong>
              </LocalizedLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
