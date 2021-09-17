import React from "react"
import Nav from "../components/nav"

import * as headerStyle from "../styles/header.module.scss" //There is a problem without "* as"

const Header = ({ siteMeta }) => {
  return (
    <header>
      <div className={headerStyle.siteTitle}>{siteMeta.title}</div>
      <Nav />
    </header>
  )
}

export default Header
