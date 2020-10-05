import React from "react"
import { Image } from "semantic-ui-react"

import data from "./data"
import "./Courses.scss"

export const Courses = () => {
  // console.log(data)
  return (
    <div className="courses">
      {data.map((item, i) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="courses__item"
          key={i}
        >
          <Image src={item.img} alt={item.title} />
        </a>
      ))}
    </div>
  )
}
