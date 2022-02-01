import React from "react"

import "../../styles/index.scss"

import * as gridStyles from "../styles/grid.module.scss"

const GridMain = ({ children }) => {

  return (
    <div className={gridStyles.main}>
      <div className={ `${gridStyles.cell} ${gridStyles.side}` }></div>
      <div className={ `${gridStyles.cell} ${gridStyles.center}` }>{children}</div>
      <div className={ `${gridStyles.cell} ${gridStyles.side}` }></div>
    </div>
  )
}

export default GridMain
