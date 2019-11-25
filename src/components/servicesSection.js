import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./servicesSection.css"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      webDevIcon: file(relativePath: { eq: "monitor-sketch-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webMarketingIcon: file(relativePath: { eq: "dollars.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graphicDesignIcon: file(relativePath: { eq: "heart-sketch.png" }) {
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
    <section className="services-section">
      <div className="services-section-container">
        <p className="overtitle">FEATURED JAMSTACK CASE STUDY</p>
        <h2 className="title-section">
          Road To a Better And Faster
          <br /> SEOmonitor Website
        </h2>
        <p className="section-desc">
          GatsbyJS, Contentful and Netlify for a faster and more secure
          <br />
          SEOmonitor website.
        </p>
        <div className="services-container">
          <div>
            <div className="services-container-img">
              <Img fluid={data.webDevIcon.childImageSharp.fluid} />
            </div>

            <p className="service-title">
              <strong>WEB DEVELOPMENT</strong>
            </p>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              <strong className="service-cta-home">> Web Development</strong>
            </p>
          </div>
          <div>
            <p className="service-title">
              <div className="services-container-img">
                {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
              </div>
              <strong>SOCIAL MEDIA</strong>
            </p>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              <strong className="service-cta-home">> Social Media</strong>
            </p>
          </div>
          <div>
            <p className="service-title">
              <div className="services-container-img">
                <Img fluid={data.webMarketingIcon.childImageSharp.fluid} />
              </div>
              <strong>WEB MARKETING</strong>
            </p>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              <strong className="service-cta-home">> Web Marketing</strong>
            </p>
          </div>
          <div>
            <p className="service-title">
              <div className="services-container-img">
                <Img fluid={data.graphicDesignIcon.childImageSharp.fluid} />
              </div>
              <strong>GRAPHIC DESIGN</strong>
            </p>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              <strong className="service-cta-home">> Graphic Design</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
