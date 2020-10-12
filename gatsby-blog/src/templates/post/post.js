import React from "react"
import { BlogLayout } from "../../layouts/BlogLayout"
import Oembed2Iframe from "../../utils/TransformOembedToIframe"
import Seo from "../../components/seo"

import "./post.scss"

const post = props => {
  const {
    pageContext: { data: post },
  } = props

  console.log(post)
  return (
    <BlogLayout className="post">
      <Seo
        title={post.seo_title}
        description={post.seo_description}
        image={post.thumbnail.publicURL}
      />
      {/* <h1>{post.title}</h1> */}
      <div className="markdown-body">
        <div
          dangerouslySetInnerHTML={{ __html: Oembed2Iframe(post.content) }}
        ></div>
      </div>
    </BlogLayout>
  )
}

export default post
