import React from "react"
import { graphql } from "gatsby"

import { BlogLayout } from "../layouts/BlogLayout"
import { PostList } from "../components/PostList/PostList"
import { Pagination } from "../components/Pagination"
import Seo from "../components/seo"

import imageBlog from "../images/web-programacion.jpg"

const blog = props => {
  const { data, pageContext } = props
  const posts = data.allStrapiPost.nodes

  return (
    <BlogLayout>
      <Seo
        title="Blog de prueba"
        description="Blog de prueba hecho en gatsby"
        image={imageBlog}
      />
      <PostList posts={posts} />
      <Pagination data={pageContext} />
    </BlogLayout>
  )
}

export default blog

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        title
        url
        content
        createdAt
        thumbnail {
          publicURL
        }
      }
    }
  }
`
