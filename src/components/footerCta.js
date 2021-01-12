import React from 'react'
import './footerCta.css'
import Cta from './cta'

export default function footerCta ({
  linkGetStarted,
  textGetStarted,
  title,
  subtitle
}) {
  return (
    <footer className='footerCta'>
      <div className='footerCta-container'>
        <div className='footerCta-cta'>
          <span className='overtitle-yellow'>DIGITAL CREATORS</span>
          <h2 className='title-section'>{title}</h2>
          <p className='footerCta-subtitle'>{subtitle}</p>
          {/* <Cta
            linkGetStarted={linkGetStarted}
            textGetStarted={textGetStarted}
          /> */}
          <span class='hs-cta-wrapper' id='hs-cta-wrapper-3376f63c-38c7-42cb-8631-04f2705bed18'>
            <span class='hs-cta-node hs-cta-3376f63c-38c7-42cb-8631-04f2705bed18' id='hs-cta-3376f63c-38c7-42cb-8631-04f2705bed18'>
              <div id='hs-cta-ie-element' />
              <a href='https://cta-redirect.hubspot.com/cta/redirect/8068265/3376f63c-38c7-42cb-8631-04f2705bed18' target='_blank'><img class='hs-cta-img' id='hs-cta-img-3376f63c-38c7-42cb-8631-04f2705bed18' src='https://no-cache.hubspot.com/cta/default/8068265/3376f63c-38c7-42cb-8631-04f2705bed18.png' alt='Comincia da qui' /></a>
            </span><script charset='utf-8' src='https://js.hscta.net/cta/current.js' /><script type='text/javascript'> hbspt.cta.load(8068265, '3376f63c-38c7-42cb-8631-04f2705bed18', {}); </script>
          </span>
        </div>
      </div>
      <div className='divider-footerCta' />
    </footer>
  )
}
