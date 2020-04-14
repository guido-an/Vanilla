import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  console.log(data.allWordpressPost.edges)
  return (

    <div>
       blog
    </div>

  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
