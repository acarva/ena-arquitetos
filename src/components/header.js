import React from "react"

import "../styles/index.scss"
import * as headerStyles from "./styles/header.module.scss"

import GridCell from "./grid/grid-cell";
import GridRow from "./grid/grid-row";

const Header = () => {

  return (
    <GridRow>
      <GridCell>
        <header className={headerStyles.header}></header>
      </GridCell>
    </GridRow>
  )
}

export default Header
