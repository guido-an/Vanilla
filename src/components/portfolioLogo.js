import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ overtitle, title, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      comune: file(relativePath: { eq: "portfolio/comune-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frolla: file(relativePath: { eq: "portfolio/logo_frolla.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gambino: file(relativePath: { eq: "portfolio/gambino-vini-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      affinitis: file(relativePath: { eq: "portfolio/logo_affinitis.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      habitat: file(relativePath: { eq: "portfolio/habitat.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hobo: file(relativePath: { eq: "portfolio/hobo-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      altrapelle: file(relativePath: { eq: "portfolio/logo_altrapelle.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avalon: file(relativePath: { eq: "portfolio/logo_avalon.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesLandes: file(
        relativePath: { eq: "portfolio/les-landes-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mewa: file(
        relativePath: { eq: "portfolio/mewa-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oroConero: file(relativePath: { eq: "portfolio/oro-del-conero-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      perspirex: file(relativePath: { eq: "portfolio/logo_perspirex.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      argento: file(relativePath: { eq: "portfolio/logo_argentovivo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      filotea: file(relativePath: { eq: "portfolio/logo_filotea.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yumyum: file(relativePath: { eq: "portfolio/logo_yumyum.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      giampaoli: file(relativePath: { eq: "portfolio/logo_giampaoli.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rami: file(
        relativePath: { eq: "portfolio/rami-logo.png" }
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
    <div className='portfolio-section'>
      <span className='overtitle-dark'>{overtitle}</span>
      <h1>{title}</h1>
      <p style={{ marginBottom: '60px' }} className='subtitle-page'>
        {subtitle}
      </p>
      <div className='logo-portfolio-container'>
        <Img
          className='logo-portfolio'
          fluid={data.comune.childImageSharp.fluid}
        />

        <Img
          className='logo-portfolio'
          fluid={data.frolla.childImageSharp.fluid}
        />

        <Img
          className='logo-portfolio'
          fluid={data.gambino.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.habitat.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.affinitis.childImageSharp.fluid}
        />
      </div>
      <div className='logo-portfolio-container'>
        <Img
          className='logo-portfolio'
          fluid={data.perspirex.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.altrapelle.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.avalon.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.argento.childImageSharp.fluid}
        />
     
        <Img
          className='logo-portfolio'
          fluid={data.filotea.childImageSharp.fluid}
        />

      </div>
      <div className='logo-portfolio-container'>
        <Img
          className='logo-portfolio'
          fluid={data.yumyum.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.giampaoli.childImageSharp.fluid}
        />
   

      </div>
    </div>
  )
}
