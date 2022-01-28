import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  query ($slug: String!) 
  {
    markdownRemark(fields: { slug: { eq: $slug } }) 
    {
      frontmatter {
        title
        date
      }
      html
    }
  }`

const BlogPostPage = ({ data }) => {

  return (
    <Layout>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default BlogPostPage
