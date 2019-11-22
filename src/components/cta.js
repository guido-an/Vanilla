import React, { useState } from "react"
import LocalizedLink from "./LocalizedLink"
import styled from 'styled-components';
import './cta.css'


export default function cta() {
  return <LocalizedLink style={{textDecoration: "none"}} to="#"><span className="cta">Get started for Free</span></LocalizedLink>
}
