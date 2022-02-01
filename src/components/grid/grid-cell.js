import React from "react"

import "../../styles/index.scss"

import * as gridStyles from "../styles/grid.module.scss"

const GridCell = ({ children, className = '', ...other }) => {

  return (
    <div {...other} className={ `${className} ${gridStyles.cell} ${gridStyles.center}` }>{children}</div>
  )
}

export default GridCell
