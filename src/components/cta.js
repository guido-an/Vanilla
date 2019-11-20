import React from "react"
import LocalizedLink from "./LocalizedLink"

const buttonStyle = {
    textDecoration: "none",
    backgroundColor: "#272727",
    borderRadius: "28px",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "14px"
}

export default function cta() {
  return <LocalizedLink style={buttonStyle} to="#">Get Free Advice</LocalizedLink>
}
