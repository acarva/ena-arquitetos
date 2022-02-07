import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import * as projectDetailStyles from "./styles/project.detail.module.scss"

export const query = graphql`
  query($contentfulId: String!) {
    contentfulProject(contentful_id: { eq: $contentfulId })
      {
        title,
        date,
        description {
          raw
        }
      }
    allContentfulProject(sort: {
        fields: date,
        order:DESC
      }) {
        edges {
          node {
            contentful_id,
            title
          }
        }
      }
  }`

const ProjectDetail = ({ data }) => {
  const detailInfo = <div className={projectDetailStyles.detail}>
    <div className={projectDetailStyles.photos} />
    <div className={projectDetailStyles.description}>
      { renderRichText(data.contentfulProject.description) }
    </div>
  </div>

  return <Layout firstSectionTitle={data.contentfulProject.title} firstSection={detailInfo} />
}

export default ProjectDetail
