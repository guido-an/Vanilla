import React from 'react'
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PortfolioLogo from "../components/portfolioLogo"
import FooterCta from "../components/footerCta"

const graphicDesign = ({ pageContext: { locale }, data }) => {
    return(
        <Layout path="/" locale={locale} data={data}>
        <SEO title="Graphic Desing" />
         <PageBody 
         bigIcon={data.bigIcon.childImageSharp.fluid} 
         overtitle={data.graphicDesign.childGraphicDesignJson.overtitle} 
         title={data.graphicDesign.childGraphicDesignJson.title} 
         subtitle={data.graphicDesign.childGraphicDesignJson.subtitle} 
         multiline1={data.graphicDesign.childGraphicDesignJson.multiline1}/>
         <PortfolioLogo/>
          <FooterCta linkGetStarted={data.header.childHeaderJson.linkGetStarted} />
        </Layout>
    )
}

export const query = graphql`
  query GraphicDesign($locale: String) {
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
     graphicDesign: file(name: { eq: $locale }, relativeDirectory: { eq: "graphic-design" }) {
      childGraphicDesignJson {
      overtitle
      title
       subtitle
       multiline1
      }
    }
  bigIcon: file(relativePath: { eq: "graphic-design.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default graphicDesign