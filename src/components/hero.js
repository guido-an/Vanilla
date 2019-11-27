import React from "react"
import Cta from "./cta"
import "./hero.css"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'



export default ({linkGetStarted}) => {
  

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-cta-container">
          <span className="overtitle">JAMSTACK DEVELOPERS FOR HIRE</span>
          <h1 className="hero-title">
          Meet faster,<br />
     more secure web.
          </h1>
          <p className="section-desc">
            Let us maximize your business potential with the latest and<br/>
            innovative technologies.
          </p>
          <Cta linkGetStarted={linkGetStarted} />
          <p className="btn-desc">
            Get one-to-one consultation in less than 24h.
          </p>
        </div>
        
      </div>
    </section>
  )
}

