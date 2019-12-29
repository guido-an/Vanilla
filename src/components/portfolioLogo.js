import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      blomdahl: file(relativePath: { eq: "portfolio/blomdahl-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      difar: file(relativePath: { eq: "portfolio/difar-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mongrip: file(relativePath: { eq: "portfolio/mongrip-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curandera: file(relativePath: { eq: "portfolio/curandera-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yumyum: file(relativePath: { eq: "portfolio/yum-yum-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      univpm: file(relativePath: { eq: "portfolio/univpm-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      autoritaPortuale: file(
        relativePath: { eq: "portfolio/autorita-portuale-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cameraCommercio: file(
        relativePath: { eq: "portfolio/camera-di-commercio-ancona-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aroundAwt: file(relativePath: { eq: "portfolio/around-awt-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      walkingEolie: file(
        relativePath: { eq: "portfolio/walking-eolie-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="portfolio-section">
      <span className="overtitle-dark">È UNA QUESTIONE DI FIDUCIA</span>
      <h1>I nostri clienti</h1>
      <p style={{ marginBottom: "60px" }} className="subtitle-page">
        Ecco alcune delle realtà che hanno scelto di collaborare con noi.
      </p>
      <div className="logo-portfolio-container">
        <Img
          className="logo-portfolio"
          fluid={data.cameraCommercio.childImageSharp.fluid}
        />

        <Img
          className="logo-portfolio"
          fluid={data.univpm.childImageSharp.fluid}
        />
        <Img
          className="logo-portfolio"
          fluid={data.mongrip.childImageSharp.fluid}
        />

        <Img
          className="logo-portfolio"
          fluid={data.autoritaPortuale.childImageSharp.fluid}
        />

        <Img
          className="logo-portfolio"
          fluid={data.curandera.childImageSharp.fluid}
        />
      </div>

      <div className="logo-portfolio-container">
        <Img
          className="logo-portfolio"
          fluid={data.blomdahl.childImageSharp.fluid}
        />
        <Img
          className="logo-portfolio"
          fluid={data.yumyum.childImageSharp.fluid}
        />

        <Img
          className="logo-portfolio"
          fluid={data.aroundAwt.childImageSharp.fluid}
        />
        <Img
          className="logo-portfolio"
          fluid={data.walkingEolie.childImageSharp.fluid}
        />
        <Img
          className="logo-portfolio"
          fluid={data.difar.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}
