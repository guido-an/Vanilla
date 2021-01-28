import React from 'react'
import Cta from './cta'
import './hero.css'
// import ReactPlayer from 'react-player'

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
          {/* <!--HubSpot Call-to-Action Code --> */}
          <span class='hs-cta-wrapper' id='hs-cta-wrapper-3376f63c-38c7-42cb-8631-04f2705bed18'>
            <span class='hs-cta-node hs-cta-3376f63c-38c7-42cb-8631-04f2705bed18' id='hs-cta-3376f63c-38c7-42cb-8631-04f2705bed18'>
              {/* <!--[if lte IE 8]> */}
              <div id='hs-cta-ie-element' />
              {/* <![endif]--> */}
              <a href='https://cta-redirect.hubspot.com/cta/redirect/8068265/3376f63c-38c7-42cb-8631-04f2705bed18' target='_blank'>
                <img class='hs-cta-img' id='hs-cta-img-3376f63c-38c7-42cb-8631-04f2705bed18' src='https://no-cache.hubspot.com/cta/default/8068265/3376f63c-38c7-42cb-8631-04f2705bed18.png' alt='Get started' />
              </a>
            </span><script charset='utf-8' src='https://js.hscta.net/cta/current.js' />
            <script type='text/javascript'> hbspt.cta.load(8068265, '3376f63c-38c7-42cb-8631-04f2705bed18', {});
            </script>
          </span>
          {/* <!-- end HubSpot Call-to-Action Code --> */}

          {/* <Cta linkGetStarted={linkGetStarted} textGetStarted={textGetStarted} /> */}
          <p className='btn-desc'>
            {ctaSubtitle}
          </p>
        </div>
        <div className='video-container' id='video-desktop'>
          {/* <ReactPlayer
            url='https://www.youtube.com/watch?v=Z_12MmcTHig&feature=youtu.be'
          /> */}
          <iframe width='560' height='315' src='https://www.youtube.com/embed/Z_12MmcTHig' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
        <div className='video-container' id='video-mobile'>
          {/* <iframe width='560' height='315' src='https://www.youtube.com/watch?v=Z_12MmcTHig&feature=youtu.be' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen /> */}
          <iframe width='560' height='315' src='https://www.youtube.com/embed/Z_12MmcTHig' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
      </div>
    </section>
  )
}
