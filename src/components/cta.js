import React from 'react'
import LocalizedLink from './LocalizedLink'
import './cta.css'

// export default function cta ({ linkGetStarted, textGetStarted }) {
//   return <LocalizedLink style={{ textDecoration: 'none' }} to={linkGetStarted}><span className='cta'>{textGetStarted}</span></LocalizedLink>
// }

export default function cta ({ linkGetStarted, textGetStarted }) {
  return (
    <div>
      <span className='hs-cta-wrapper' id='hs-cta-wrapper-3064d71e-3bfd-4b67-b471-1544ee790d2d'>
        <span className='hs-cta-node hs-cta-3064d71e-3bfd-4b67-b471-1544ee790d2d' id='hs-cta-3064d71e-3bfd-4b67-b471-1544ee790d2d'>
          <div id='hs-cta-ie-element' />
          <a href={linkGetStarted}>
            <span className='cta'>{textGetStarted}</span>
          </a>
        </span>
        <script charSet='utf-8' src='https://js.hscta.net/cta/current.js' />
        <script type='text/javascript'> hbspt.cta.load(8068265, '3064d71e-3bfd-4b67-b471-1544ee790d2d', {});
        </script>
      </span>
    </div>
  )
}
