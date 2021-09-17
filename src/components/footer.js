import React from "react"

import * as footerStyle from "../styles/footer.module.scss" //There is a problem without "* as"

const Footer = () => {
  return (
    <footer className={footerStyle.container}>
      <div className={footerStyle.created}>Created by Zoltán Bagdány 2021</div>
    </footer>
  )
}

export default Footer
