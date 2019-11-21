import React, { useState } from "react"
import LocalizedLink from "./LocalizedLink"
import styled from 'styled-components';
import './cta.css'

const buttonStyle = {
    textDecoration: "none",
    backgroundColor: "#f6ec32",
    borderRadius: "28px",
    color: "#272727",
    padding: "15px 30px",
    fontSize: "14px"
}

export default function cta() {
  return <LocalizedLink style={{textDecoration: "none"}} to="#"><span className="cta">Get Free Advice</span></LocalizedLink>
}
