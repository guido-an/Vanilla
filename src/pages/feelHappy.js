import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import FooterCta from "../components/footerCta"

const feelHappy = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title={data.feelGood.childFeelGoodJson.titleSeo} description={data.feelGood.childFeelGoodJson.descriptionSeo} />
      <PageBody
        feelHappyGif={true}
        gif={true}
        overtitle={data.feelGood.childFeelGoodJson.overtitle}
        title={data.feelGood.childFeelGoodJson.title}
        subtitle={data.feelGood.childFeelGoodJson.subtitle}
        multiline1={data.feelGood.childFeelGoodJson.multiline1}
      />

      <FooterCta
        linkGetStarted={data.header.childHeaderJson.linkGetStarted}
        textGetStarted={data.header.childHeaderJson.textGetStarted}
        title={data.footerCta.childFooterCtaJson.title}
        subtitle={data.footerCta.childFooterCtaJson.subtitle}
      />
    </Layout>
  )
}

export const query = graphql`
  query feelHappy($locale: String) {
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
        textGetStarted
        ctaHeader
        feelHappy
      }
    }
    feelGood: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "feel-good" }
    ) {
      childFeelGoodJson {
        overtitle
        title
        multiline1
        subtitle
        titleSeo
        descriptionSeo
      }
    }
    bigIcon: file(relativePath: { eq: "feel2-happy.gif" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    footerCta: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "footer-cta" }
    ) {
      childFooterCtaJson {
        title
        subtitle
      }
    }
  }
`
export default feelHappy
