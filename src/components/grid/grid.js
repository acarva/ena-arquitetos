import React from "react"

import "../../styles/index.scss"

import * as gridStyles from "../styles/grid.module.scss"

const Grid = ({ children, className = '' }) => {

  return (
    <div className={ `${className} ${gridStyles.grid}` }>{children}</div>
  )
}

export default Grid
