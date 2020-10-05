import React from "react"
import { Icon } from "semantic-ui-react"

import "./SocialMedia.scss"
import socialData from "./data"

export const SocialMedia = () => {
  // console.log(socialData);
  return (
    <div className="social-media">
      {socialData.map((item, i) => (
        <a href={item.url} key={i} target="_blank" rel="noopener noreferrer">
          <Icon circular link name={item.name} className={item.name}></Icon>
        </a>
      ))}
    </div>
  )
}
