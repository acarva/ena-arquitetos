import React from "react"

import "../styles/index.scss"
import * as headerStyles from "./styles/header.module.scss"

const Header = () => {

  return (
    <header className={"grid-row"}>
      <div className={"grid-left-cell"}></div>
      <div className={"grid-cell"}></div>
      <div className={"grid-right-cell"}></div>
    </header>
  )
}

export default Header
