import React from 'react'
import Cta from "./cta"
import './hero.css'

export default function hero() {
    return(
    <section className="hero">
      <div className="hero-container">
      <span>JAMSTACK DEVELOPERS FOR HIRE</span>
      <h1>Meet faster, <br/>more secure web.</h1>
      <p>Let us maximize your business potential with the latest and innovative technologies.</p>
      <Cta/>
      <p>Get one-to-one consultation in less than 24h.</p>
      </div>
  </section>
    )
}