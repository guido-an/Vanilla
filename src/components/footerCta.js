import React from "react"
import "./footerCta.css"
import Cta from './cta'
import LocalizedLink from './LocalizedLink'


export default function footerCta({linkGetStarted}) {
  return (
    <footer className="footerCta">
      <div className="footerCta-container">
        <div className="footerCta-cta">
          <span className="footerCta-overtitle">DIGITAL CREATORS</span>
          <h2 className="title-section">Ready to join JAMstack revolution?</h2>
          <p className="footerCta-subtitle">
            Start your super-fast project with us or take your existing product
            to the next level.
          </p>
          <Cta linkGetStarted={linkGetStarted}/>
        </div>
      </div>
      <div className="divider-footerCta"></div>
    </footer>
  )
}
