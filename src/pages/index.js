import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

import Hero from "../components/hero"
import FooterCta from "../components/footerCta"
import ServicesSection from "../components/servicesSection"
import Testimonials from "../components/testimonials"

const IndexPage = ({ pageContext: { locale }, data }) => {


  return (
    <Layout path="/" locale={locale} data={data} linkGetStarted={data.home.childIndexJson.linkGetStarted} >
  
    {/* site title gets from graphql query and pass it to layout component */}
      <SEO title="" />
      <Hero linkGetStarted={data.home.childIndexJson.linkGetStarted} />
      <ServicesSection />
      <Testimonials testimonials={data.testimonials.childTestimonialsJson} />
      <FooterCta linkGetStarted={data.home.childIndexJson.linkGetStarted}/>
    </Layout>
  )
}


export const query = graphql`
  query Home($locale: String) {
    home: file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        NextPage
        page
        siteTitle
       linkGetStarted
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
    testimonials: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "testimonials" }
    ) {
      childTestimonialsJson {
        client0
        quote0
        client1
        quote1
        client2
        quote2
        client3
        quote3
        client4
        quote4
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
