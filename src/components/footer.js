import React from "react"
import GridCell from "./grid/grid-cell";
import * as footerStyles from "./styles/footer.module.scss";
import GridRow from "./grid/grid-row";

const Footer = () => {
  return (
    <GridRow>
      <GridCell>
        <footer className={footerStyles.footer}>
          <span className={footerStyles.left}>mail@ena</span>
          <span className={footerStyles.right}>arquitetos.pt</span>
        </footer>
      </GridCell>
    </GridRow>
  )
}

export default Footer
