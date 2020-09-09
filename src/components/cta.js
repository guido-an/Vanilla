import React from 'react'
import LocalizedLink from './LocalizedLink'
import './cta.css'

export default function cta ({ linkGetStarted, textGetStarted }) {
  return <LocalizedLink style={{ textDecoration: 'none' }} to={linkGetStarted}><span className='cta'>{textGetStarted}</span></LocalizedLink>
}
