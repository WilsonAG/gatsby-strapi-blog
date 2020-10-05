import React from "react"
import { Button, Icon } from "semantic-ui-react"
import { useStaticQuery, graphql } from "gatsby"

import { BlogLayout } from "../layouts/BlogLayout"

const Home = () => {
  const query = useStaticQuery(graphql`
    query {
      allStrapiPost {
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
  `)

  console.log(query)

  return (
    <BlogLayout>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis modi
        incidunt odio reiciendis saepe. Cumque.
      </p>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </BlogLayout>
  )
}

export default Home
