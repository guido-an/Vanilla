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
              <LocalizedLink to="/" className="service-cta-home"><strong>> Web Development</strong></LocalizedLink>
            </p>
          </div>
          <div>
            <div className="services-container-img">
              <Img fluid={data.socialMediaIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>SOCIAL MEDIA</strong>
            </p>

            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
            <LocalizedLink to="/" className="service-cta-home"><strong>> Social Media</strong></LocalizedLink>            </p>
          </div>
          <div>
            <div className="services-container-img">
              <Img fluid={data.webMarketingIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>WEB MARKETING</strong>
            </p>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
            <LocalizedLink to="/" className="service-cta-home"><strong>> Web Marketing</strong></LocalizedLink>
            </p>
          </div>
          <div>
            <div className="services-container-img">
              <Img fluid={data.graphicDesignIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>GRAPHIC DESIGN</strong>
            </p>
            <p className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
            <LocalizedLink to="/" className="service-cta-home"><strong>> Graphic Design</strong></LocalizedLink>            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
