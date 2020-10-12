import React from "react"
import { Link } from "gatsby"

import { SocialMedia } from "../SocialMedia/SocialMedia"
import { Courses } from "../Courses"

import "./Menu.scss"

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog Developer</h2>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
        provident delectus repudiandae ipsum voluptatibus magnam nostrum
        cupiditate aut laborum.
      </p>
      <h5>Lista de cursos</h5>
      <SocialMedia />

      <Courses />
    </div>
  )
}
