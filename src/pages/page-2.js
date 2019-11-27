import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import LocalizedLink from "../components/LocalizedLink"
import Footer from "../components/footer"



const SecondPage = ({ pageContext: { locale }, data }) => {
  
  return(
    <Layout path="/" locale={locale} data={data}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <LocalizedLink to="/">test</LocalizedLink>
    </Layout>
  )
} 


export const query = graphql`
  query About($locale: String) {
  header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
    childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
      }
  }
  }
`

export default SecondPage
