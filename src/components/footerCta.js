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
          <h2 className="title-section">Pronto a fare il passo successivo?</h2>
          <p className="footerCta-subtitle">
          Ottieni la tua consulenza gratuita in meno di 24 ore.
          </p>
          <Cta linkGetStarted={linkGetStarted}/>
        </div>
      </div>
      <div className="divider-footerCta"></div>
    </footer>
  )
}
