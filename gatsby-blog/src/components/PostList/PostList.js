import React from "react"
import { Grid, Icon, Card, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import moment from "moment"
import "moment/locale/es"

import "./PostList.scss"

export const PostList = props => {
  const { posts } = props

  console.log(posts)

  return (
    <Grid className="post-list">
      {posts.map(post => (
        <Link to={`/${post.url}`} key={post.id}>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <Card className="post-list__item">
              <Image src={post.thumbnail.publicURL} />
              <Card.Content>
                <Card.Header>{post.title}</Card.Header>
              </Card.Content>

              <Card.Content>
                <Card.Meta>
                  <Icon name="calendar alternate outline" />
                  {moment(post.createdAt).format("ll")}
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Link>
      ))}
    </Grid>
  )
}
