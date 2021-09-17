import React from "react"
import { Link } from "gatsby"
import * as navStyle from "../styles/nav.module.scss"

const Nav = () => {
  return (
    <div>
      <ul className={navStyle.navBar}>
        <Link activeClassName={navStyle.activeMenu} to="/">
          Home
        </Link>
        <Link activeClassName={navStyle.activeMenu} to="/about">
          About
        </Link>
        <Link activeClassName={navStyle.activeMenu} to="/blog">
          Blog
        </Link>
        <Link activeClassName={navStyle.activeMenu} to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  )
}

export default Nav
