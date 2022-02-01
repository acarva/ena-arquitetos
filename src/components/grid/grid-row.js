import React from "react"

import "../../styles/index.scss"

import * as gridStyles from "../styles/grid.module.scss"

const GridRow = ({ children, innerRef, className, ...other }) => {

  return (
    <div {...other} ref={innerRef} className={`${className} ${gridStyles.row}`}>
      <div className={ `${gridStyles.cell} ${gridStyles.empty}` }></div>
      {children}
      <div className={ `${gridStyles.cell} ${gridStyles.empty}` }></div>
    </div>
  )
}

export default GridRow
