import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'

const NotFoundPage = ({ pageContext: { locale }, data }) => (
  <Layout path="/" locale={locale} data={data}>
    <SEO title="404: Not found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p><br/>
    <Link to="/">Go back home!</Link>
  </Layout>
)

export const query = graphql`
  query page404($locale: String) {
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
      }
    }
}
`


//   function NotFoundPage(){
//       return(
//           <section>
//               page not found
//           </section>
//       )
//   }
export default NotFoundPage