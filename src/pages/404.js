import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

// const NotFoundPage = ({ pageContext: { locale }, data }) => (
//   <Layout path="/" locale={locale} data={data}>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )
// export const query = graphql`
//   query page404($locale: String) {
//     file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
//       childIndexJson {
//         siteTitle
//       }
//     }
//   }
//   `

  function NotFoundPage(){
      return(
          <section>
              page not found
          </section>
      )
  }
export default NotFoundPage