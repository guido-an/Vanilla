import React from 'react'
import Cta from './cta'
import './hero.css'
import banner from '../images/start-the-future.png'

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
            {heroSubtitle1}<br />
            {heroSubtitle2}
          </p>
          <Cta linkGetStarted={linkGetStarted} textGetStarted={textGetStarted} />
          <p className='btn-desc'>
            {ctaSubtitle}
          </p>
        </div>

      </div>
      <a href='https://www.webmarketingfestival.it/start-the-future/?utm_source=vanillamarketing&utm_medium=banner&utm_campaign=start_the_future' target='_blank'>
        <img style={{ margin: '0px auto', display: 'block' }} src={banner} alt='italy-flag' />
      </a>
    </section>
  )
}
