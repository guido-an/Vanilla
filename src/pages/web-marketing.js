import React from 'react'
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PortfolioLogo from "../components/portfolioLogo"
import FooterCta from "../components/footerCta"

const webMarketing = ({ pageContext: { locale }, data }) => {
    return(
        <Layout path="/" locale={locale} data={data}>
        <SEO title="Web Marketing" />
         <PageBody 
         bigIcon={data.bigIcon.childImageSharp.fluid} 
         overtitle={data.webMarketing.childWebMarketingJson.overtitle} 
         title={data.webMarketing.childWebMarketingJson.title} 
         subtitle={data.webMarketing.childWebMarketingJson.subtitle} 
         multiline1={data.webMarketing.childWebMarketingJson.multiline1}/>
         <PortfolioLogo/>
          <FooterCta linkGetStarted={data.header.childHeaderJson.linkGetStarted} />
        </Layout>
    )
}

export const query = graphql`
  query WebMarketing($locale: String) {
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
     webMarketing: file(name: { eq: $locale }, relativeDirectory: { eq: "web-marketing" }) {
      childWebMarketingJson {
      overtitle
      title
       subtitle
       multiline1
      }
    }
  bigIcon: file(relativePath: { eq: "web-marketing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default webMarketing