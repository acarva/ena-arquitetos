import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import * as layoutStyles from "./styles/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
