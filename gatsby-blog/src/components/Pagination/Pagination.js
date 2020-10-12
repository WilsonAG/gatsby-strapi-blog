import React from "react"
import PropType from "prop-types"
import { Link } from "gatsby"

import "./Pagination.scss"

export const Pagination = props => {
  const { data } = props
  const { previousPagePath, nextPagePath } = data

  return (
    <div className="pagination">
      {previousPagePath && <Link to={previousPagePath}>Atras</Link>}
      {nextPagePath && <Link to={nextPagePath}>Siguiente</Link>}
    </div>
  )
}

Pagination.prototype = {
  data: PropType.object.isRequired,
}
