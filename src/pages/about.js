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
            <span className="overtitle-dark">DIGITAL CREATORS</span>
            <h1>Vanilla Manifesto</h1>
            <p className="subtitle-page">
              {data.about.childAboutJson.subtitle}
            </p>
            <div className="text-service-container">
              <p>
                Crediamo nel nostro lavoro. Ci crediamo tanto che per migliorare
                ci mettiamo in discussione, giriamo il mondo, frequentiamo
                corsi, leggiamo libri perché, solo così, possiamo essere certi
                di creare qualità, una qualità che funziona. Crediamo nella
                nostra qualità. Dopo anni di esperienza, giorno dopo giorno,
                seduti con umiltà e umanità davanti a un computer abbiamo capito
                che quello che stavamo facendo sarebbe diventato grande perché
                grande era il cuore che ci mettevamo. Crediamo che il nostro
                lavoro sia fatto più di persone che di dispositivi ed email.
                Crediamo nei sorrisi: quelli che una ciurma affiatata come la
                nostra riesce a mantenere anche nelle giornate di burrasca.
                Crediamo che solo dando il meglio otterremo la vostra fiducia.
                Ecco perché ogni cosa che passa da qui, anche la più piccola, ha
                valore e richiede tempo e concentrazione.
              </p>
              <p>
                Qui in Vanilla parliamo quattro lingue, creiamo siti, e-commerce
                e applicazioni web e siamo tra le prime agenzia in Italia a
                utilizzare l'approccio JAMstack. Sviluppiamo strategie social e
                campagne SEM e SEO che danno risultati concreti. Ci occupiamo di
                copy, di brand, immagini coordinate e concept. Facciamo
                formazione sia in aziende che in convegni, business school e
                università. Dopo anni di problemi risolti, urgenze placate e
                soluzioni trovate siamo diventati i super eroi della customer
                care :) Abbiamo, quindi, deciso di passare al livello successivo
                creando un’area riservata ai clienti Vanilla:
                www.premiumsupport.vanillamarketing.it. Ci guida la passione, ci
                guida la curiosità, ci guida la consapevolezza. Noi siamo
                Vanilla, siamo Digital Creators.
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
        subtitle
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
