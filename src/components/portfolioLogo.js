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
      frolla: file(relativePath: { eq: "portfolio/frolla-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
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
      gramineta: file(relativePath: { eq: "portfolio/gramineta-logo.png" }) {
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
          fluid={data.gramineta.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.habitat.childImageSharp.fluid}
        />
      </div>

      <div className='logo-portfolio-container'>
        <Img
          className='logo-portfolio'
          fluid={data.hobo.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.lesLandes.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.oroConero.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.mewa.childImageSharp.fluid}
        />
        <Img
          className='logo-portfolio'
          fluid={data.rami.childImageSharp.fluid}
        />

      </div>
    </div>
  )
}
