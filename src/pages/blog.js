import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            title
            date
          }
          id
        }
      }
    }
  `)

  const blogs = data.allMdx.nodes

  return (
    <Layout>
      <h1>MY BLOG</h1>
      {blogs.map(blog => (
        <div key={blog.frontmatter.id}>
          <h1>{`${blog.frontmatter.title}`}</h1>{" "}
          {`Posted: ${blog.frontmatter.date}`}
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
