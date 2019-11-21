import React from 'react'
import './footer.css'
import Cta from "./cta"

export default function footer(){
    return(
        <footer className="footer">
        <div className="footer-container">
        <div className="footer-cta">
        <span className="footer-overtitle">DIGITAL CREATORS</span>
        <h2>Ready to join JAMstack revolution?</h2>
        <p className="footer-subtitle">Start your super-fast project with us or take your existing product to the next level.</p>
        <Cta/>
        </div>
        </div>
        <div className="divider-footer"></div>
        <h2>testo</h2>
        </footer>
    )
}