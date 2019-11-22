import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import LocalizedLink from '../components/LocalizedLink'
import Hero from '../components/hero'
import ServicesSection from '../components/servicesSection'

const IndexPage = ({ pageContext: { locale }, data }) => {
const {hello,NextPage,page } = data.home.childIndexJson
  return(
    <Layout path="/" locale={locale} data={data}> {/* site title gets from graphql query and pass it to layout component */}
      <SEO title="Home" />
     
   <Hero/>
   <ServicesSection/>
   
    </Layout>
  )
}
// graphql query is used to read or fetch values from json file.
export const query = graphql`
  query Home($locale: String) {
home: file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        NextPage
        page
        siteTitle
      }
    }
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
// IndexPage.propTypes = {
//   pageContext: PropTypes.shape({
//     locale: PropTypes.string.isRequired
//   }).isRequired,
//   data: PropTypes.shape({
//     file: PropTypes.shape({
//       childIndexJson: PropTypes.shape({
//         // title: PropTypes.string.isRequired,
//         // about: PropTypes.string.isRequired
//       }).isRequired
//     }).isRequired
//   }).isRequired
// }


export default IndexPage




