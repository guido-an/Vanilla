import React, { useState } from "react"
import LocalizedLink from "./LocalizedLink"
import styled from 'styled-components';
import './cta.css'


export default function cta({linkGetStarted}) {
  console.log("link get start", linkGetStarted)
  return <LocalizedLink style={{textDecoration: "none"}} to={linkGetStarted}><span className="cta">Comincia da qui</span></LocalizedLink>
}
