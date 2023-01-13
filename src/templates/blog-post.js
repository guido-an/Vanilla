import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Seo from '../components/seo'
import Layout from '../components/layout'
import FooterCta from '../components/footerCta'
import './blog-post.css'

const excapeSpecialHtmlCharacter = string => {
  return string
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
}

const BlogTemplate = ({ pageContext: { locale }, data }) => {
  const post = data.wordpressPost
  return (
    <Layout locale={locale} data={data}>
      <Seo title={post.yoast_title} description={excapeSpecialHtmlCharacter(post.yoast_meta[0].content)} />
      <div className='image-container-blog-post'>
      {post.featured_media && <img src={post.featured_media.source_url} />}
        {/* {post.featured_media && <Img fluid={post.featured_media.localFile.childImageSharp.fluid} />} */}
      </div>
      <div
        className='post'
        dangerouslySetInnerHTML={{ __html: post.content }}
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

export default BlogTemplate

export const query = graphql`
  query currentPostQuery($id: String!) {
    header: file(name: { eq: "it" }, relativeDirectory: { eq: "header" }) {
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
    footerCta: file(
      name: { eq: "it" }
      relativeDirectory: { eq: "footer-cta" }
    ) {
      childFooterCtaJson {
        title
        subtitle
      }
    }
    wordpressPost(id: { eq: $id }) {
      title
      content
      yoast_title
      featured_media {
        source_url
        localFile {
          childImageSharp {
            fluid(maxWidth: 2050) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      yoast_meta{
        property
        content
      }
    }
  }
`
