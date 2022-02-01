import React from "react"
import {Link} from "gatsby";

import GridCell from "./grid/grid-cell";
import GridRow from "./grid/grid-row";

import "../styles/index.scss"
import * as menuStyles from "./styles/menu.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const Menu = (props) => {

  return (
    <GridRow {...props} className={menuStyles.menu}>
      <GridCell className={menuStyles.menuButton}
                onClick={() => scrollTo("#first-section")}>Projectos</GridCell>
      <GridCell className={`${menuStyles.menuButton} ${menuStyles.right}`}
                onClick={() => scrollTo("#second-section")}>Estúdio</GridCell>
    </GridRow>
  )
}

export default Menu
