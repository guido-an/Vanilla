import React from 'react'
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PortfolioLogo from "../components/portfolioLogo"
import FooterCta from "../components/footerCta"

const socialMedia = ({ pageContext: { locale }, data }) => {
    return(
        <Layout path="/" locale={locale} data={data}>
        <SEO title="Social Media Marketing" />
         <PageBody 
         bigIcon={data.bigIcon.childImageSharp.fluid} 
         overtitle={data.about.childSocialMediaJson.overtitle} 
         title={data.about.childSocialMediaJson.title} 
         subtitle={data.about.childSocialMediaJson.subtitle} 
         multiline1={data.about.childSocialMediaJson.multiline1}/>
         <PortfolioLogo/>
          <FooterCta linkGetStarted={data.header.childHeaderJson.linkGetStarted} />
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
     about: file(name: { eq: $locale }, relativeDirectory: { eq: "social-media" }) {
      childSocialMediaJson {
      overtitle
      title
       subtitle
       multiline1
      }
    }
  bigIcon: file(relativePath: { eq: "social-media-marketing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default socialMedia