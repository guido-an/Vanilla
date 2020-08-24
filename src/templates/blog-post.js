//  import React from 'react'
//  import { graphql } from 'gatsby'
//  import Layout from '../components/layout'

//  const BlogTemplate = ({ pageContext: { locale }, data }) => {
//     const post = data.wordpressPost
//    console.log(data, 'data')
//    return (
//       <Layout data={data}>
//      <div className='blog-post'>

//        {/* <div
//          dangerouslySetInnerHTML={{ __html: post.content }}
//        /> */}
//      </div>
//     </Layout>
//    )
//  }

//  export default BlogTemplate

//  export const pageQuery = graphql`
//  query Post {
//    wordpressPost(id: { eq: $id }) {
//      title
//      content
//     }
//    }
//  `

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import FooterCta from '../components/footerCta'

const BlogTemplate = ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout path='/' locale='it' data={data}>
      <div>blog</div>
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

export const pageQuery = graphql`
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
         }
     }
 `
