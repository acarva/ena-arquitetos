import React from "react"

import "../../styles/index.scss"

import * as gridStyles from "../styles/grid.module.scss"

const GridMain = ({ children }) => {

  return (
    <div className={`${gridStyles.row} ${gridStyles.main}`}>
      <div className={ `${gridStyles.cell} ${gridStyles.empty}` }></div>
      {children}
      <div className={ `${gridStyles.cell} ${gridStyles.empty}` }></div>
    </div>
  )
}

export default GridMain
