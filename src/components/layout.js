import React, {useEffect, useRef, useState} from "react"
import Header from "./header"

import "../styles/index.scss"
import * as gridStyles from "./styles/grid.module.scss"
import GridRow from "./grid/grid-row"
import GridMain from "./grid/grid-main"
import GridCell from "./grid/grid-cell"
import Grid from "./grid/grid"
import Menu from "./menu/menu"
import MenuButton from "./menu/menu.button";
import Footer from "./footer";

const Layout = ({ firstSection, firstSectionTitle, secondSection, secondSectionTitle }) => {
  return (
    <>
      <Grid className={gridStyles.firstPage}>
        <GridRow><GridCell className={gridStyles.empty} /></GridRow>
        <Header />
        <Menu id={"first-section"}>
          {secondSection ?
            <>
              <MenuButton target={"#first-section"} optionName={firstSectionTitle} className={gridStyles.title}/>
              <MenuButton target={"#second-section"} optionName={secondSectionTitle}  className={gridStyles.title}/>
            </> :
            <GridCell className={gridStyles.title}>
              {firstSectionTitle}
            </GridCell>
          }
        </Menu>
        <GridMain>
          <GridCell>
            {firstSection}
          </GridCell>
        </GridMain>
      </Grid>
      {
        secondSection ?
          <Grid>
            <Menu id={"second-section"}>
              <MenuButton target={"#second-section"} optionName={secondSectionTitle}/>
            </Menu>
            <GridRow><GridCell>{secondSection}</GridCell></GridRow>
          </Grid> :
          null
      }
      <Grid>
        <Footer />
      </Grid>
    </>
  )
}

export default Layout
