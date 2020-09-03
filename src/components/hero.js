import React from 'react'
import Cta from './cta'
import './hero.css'
import ReactPlayer from 'react-player'

export default ({ linkGetStarted, textGetStarted, heroSubtitle1, heroSubtitle2, ctaSubtitle }) => {
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className='hero-cta-container'>
          <span className='overtitle-dark'>WE ARE DIGITAL CREATORS</span>
          <h1 className='hero-title'>
          Digital Products,<br />
     That Work.
          </h1>
          <p className='section-desc'>
            {heroSubtitle1}<br /> {heroSubtitle2}
          </p>
          <Cta linkGetStarted={linkGetStarted} textGetStarted={textGetStarted} />
          <p className='btn-desc'>
            {ctaSubtitle}
          </p>
        </div>
        <div class='video-container' id='video-desktop'>
          <ReactPlayer
            url='https://youtu.be/N6mvPVrWqXc'

          />
        </div>
        <div class='video-container' id='video-mobile'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/N6mvPVrWqXc' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />

        </div>
      </div>
    </section>
  )
}
