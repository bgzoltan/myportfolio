import React from "react"
import Nav from "../components/nav"
import * as headerStyle from "../styles/header.module.scss" //There is a problem without "* as"

const Header = () => {
  return (
    <header>
      <div className={headerStyle.siteTitle}>My Portfolio Site</div>
      <Nav />
    </header>
  )
}

export default Header
