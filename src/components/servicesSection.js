import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import "./servicesSection.css"
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "monitor-sketch.png" }) {
      childImageSharp {
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <section className="services-section">
      <div className="services-section-container">
        <p className="overtitle">
          FEATURED JAMSTACK CASE STUDY
        </p>
        <h2 className="title-section">Road To a Better And Faster<br/> SEOmonitor Website</h2>
        <p className="section-desc">
          GatsbyJS, Contentful and Netlify for a faster and more secure<br/>
          SEOmonitor website.
        </p>
        <div className="services-container">
            <div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid}
          />
                <p className="service-title"><strong>WEB DEVELOPMENT</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p><strong>> Find out more</strong></p>
            </div>
            <div>
            <p className="service-title"><strong>SOCIAL MEDIA</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p><strong>> Find out more</strong></p>
            </div>
            <div>
            <p className="service-title"><strong>WEB MARKETING</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p><strong>> Find out more</strong></p>
            </div>
            <div>
            <p className="service-title"><strong>GRAPHIC DESIGN</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p><strong>> Find out more</strong></p>
            </div>

        </div>
      </div>
    </section>
  )
}
