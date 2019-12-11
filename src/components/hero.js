import React from "react"
import Cta from "./cta"
import "./hero.css"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'



export default ({linkGetStarted}) => {
 console.log("Link get started from hero", linkGetStarted)
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-cta-container">
          <span className="overtitle-dark">WE ARE DIGITAL CREATORS</span>
          <h1 className="hero-title">
          Digital Products,<br />
     That Work.
          </h1>
          <p className="section-desc">
            Innovazione, creatività ed eleganza,<br />
            è quello che stai cercando?
            
          </p>
          <Cta linkGetStarted={linkGetStarted} />
          <p className="btn-desc">
            Per la tua consulenza gratuita in meno di 24 ore. 
          </p>
        </div>
        
      </div>
    </section>
  )
}

