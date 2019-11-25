import React from "react"
import "./footer.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "logo-vanilla-marketing-bianco.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section-container">
          <Img
            className="logo-footer"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </div>
        <div className="footer-section-container">
            <p className="footer-title">Services</p>
            <p>Web Development</p>
            <p>Social Media</p>
            <p>Web Marketing</p>
            <p>Graphic Design</p>
        </div>
        <div className="footer-section-container">
            <p className="footer-title">Contact</p>
            <p>Corso garibaldi 91/b, Ancona</p>
            <p>info@vanilla.marketing</p>
            <p>+39 351 671 1311 </p>
            <p>+39 071 204002</p>
        </div>
        <div className="footer-section-container">
            <p className="footer-title">Social</p>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
      </div>
    </footer>
  )
}
