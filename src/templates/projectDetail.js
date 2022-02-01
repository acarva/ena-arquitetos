import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  query($contentfulId: String!) {
    contentfulProject(contentful_id: { eq: $contentfulId })
      {
        title,
        date,
      }
  }`

const ProjectDetail = ({ data }) => {
  const detailInfo = <div>ok</div>

  return <Layout firstPage={detailInfo} />
}

export default ProjectDetail
