import React from "react"
import {Link} from "gatsby";

import GridCell from "../grid/grid-cell";
import GridRow from "../grid/grid-row";

import "../../styles/index.scss"
import * as menuStyles from "../styles/menu.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const MenuButton = ({ target, optionName }) => {

  return (
    <GridCell className={menuStyles.menuButton}
      onClick={() => scrollTo(target)}>{optionName}</GridCell>
  )
}

export default MenuButton
