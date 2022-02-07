import React from "react"
import GridRow from "../grid/grid-row";

import "../../styles/index.scss"
import * as menuStyles from "../styles/menu.module.scss"

const Menu = ({ children, ...other }) => {

  return (
    <GridRow {...other} className={menuStyles.menu}>
      {children}
    </GridRow>
  )
}

export default Menu
