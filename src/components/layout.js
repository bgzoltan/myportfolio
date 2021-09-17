import React from "react"
import Header from "./header"
import Footer from "./footer"
import { graphql, useStaticQuery } from "gatsby"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
          copyright
        }
      }
    }
  `)

  const siteMeta = data.site.siteMetadata
  console.log(siteMeta)
  return (
    <div className="container">
      <Header siteMeta={siteMeta} />
      <div className="content"> {props.children}</div>
      <Footer siteMeta={siteMeta} />
    </div>
  )
}

export default Layout
