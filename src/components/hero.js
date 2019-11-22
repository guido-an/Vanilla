import React from "react"
import Cta from "./cta"
import "./hero.css"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-test.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data.placeholderImage.childImageSharp.fluid, "data")
  return (
   
    <section className="hero">
      <div className="hero-container">
        <div className="hero-cta-container">
          <span className="overtitle">JAMSTACK DEVELOPERS FOR HIRE</span>
          <h1 className="h1">
            Dormi tranquillo, <br />
            c'è Vanilla.
          </h1>
          <p className="section-desc">
            Let us maximize your business potential with the latest and<br/>
            innovative technologies.
          </p>
          <Cta />
          <p className="btn-desc">
            Get one-to-one consultation in less than 24h.
          </p>
        </div>
        <div className="hero-image-container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid}
          alt="hero-image"/>
        </div>
      </div>
    </section>
  )
}

