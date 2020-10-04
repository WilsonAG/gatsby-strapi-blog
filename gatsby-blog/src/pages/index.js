import React from "react"
import { Button, Icon } from "semantic-ui-react"
import { BlogLayout } from "../layouts/BlogLayout"

const Home = () => {
  return (
    <BlogLayout>
      <h1>Home Page</h1>
      <p> lorem15 </p>
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
