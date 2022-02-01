import React, {useEffect, useRef, useState} from "react"
import Header from "./header"

import "../styles/index.scss"
import * as gridStyles from "./styles/grid.module.scss"
import GridRow from "./grid/grid-row"
import GridMain from "./grid/grid-main"
import GridCell from "./grid/grid-cell"
import Grid from "./grid/grid"
import Menu from "./menu"

const Layout = ({ menu, firstSection, firstSectionTitle, secondSection, secondSectionTitle }) => {
  const menuRef = useRef()
  const [showMenu, setShowMenu] = useState(!!menu)

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    }
  }, [showMenu])

  const listenToScroll = () => {
    setShowMenu(!!menu && menuRef.current.getBoundingClientRect().y > 0)
  }

  return (
    <>
      <Grid className={gridStyles.firstPage}>
        <GridRow><GridCell className={gridStyles.empty} /></GridRow>
        <Header />
        {showMenu ?
          <Menu  id={"first-section"} innerRef={menuRef}/> :
          <GridRow  id={"first-section"} innerRef={menuRef}>
            <GridCell>
              {firstSectionTitle}
            </GridCell>
          </GridRow>
        }
        <GridMain>
          <GridCell>
            {firstSection}
          </GridCell>
        </GridMain>
      </Grid>
      {
        secondSection ?
          <Grid>
            <GridRow><GridCell id={"second-section"}>{secondSectionTitle}</GridCell></GridRow>
            <GridRow><GridCell>{secondSection}</GridCell></GridRow>
          </Grid> :
          null
      }
    </>
  )
}

export default Layout
