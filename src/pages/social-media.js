import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"


const socialMedia = ({ pageContext: { locale }, data }) => {
    return(
        <Layout path="/" locale={locale} data={data}>
        <SEO title="Social Media Marketing" />
        <h1>Social media page</h1>
     {/* <PageBody bigIcon={data.bigIcon.childImageSharp.fluid} overtitle={data.about.childAboutJson.overtitle} title={data.about.childAboutJson.title} subtitle={data.about.childAboutJson.subtitle} multiline1={data.about.childAboutJson.multiline1}/> */}
        </Layout>
    )
}

export const query = graphql`
  query SocialMedia($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
        linkGetStarted
      }
    }
  }
`

export default socialMedia