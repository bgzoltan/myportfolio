import React from "react"

import * as footerStyle from "../styles/footer.module.scss" //There is a problem without "* as"

const Footer = ({ siteMeta }) => {
  return (
    <footer className={footerStyle.container}>
      <div className={footerStyle.created}>
        Created by {siteMeta.author} {siteMeta.copyright}
      </div>
    </footer>
  )
}

export default Footer
