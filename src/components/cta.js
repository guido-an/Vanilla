import React, { useState } from "react"
import LocalizedLink from "./LocalizedLink"
import styled from 'styled-components';
import './cta.css'


export default function cta({linkGetStarted}) {
  return <LocalizedLink style={{textDecoration: "none"}} to={linkGetStarted}><span className="cta">Get started for Free</span></LocalizedLink>
}
