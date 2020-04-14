import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node

  return (

    <div className='blog-post'>
      <h1>{post.title}</h1>

    </div>

  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
