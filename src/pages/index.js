import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectList from "../components/projectList"
import Menu from "../components/menu"
import AboutSection from "../components/aboutSection";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: {
        fields: date,
        order:DESC
      }) {
        edges {
          node {
            contentful_id,
            title,
            type,
            date,            
            area,
            cover {
              file {
                url
              }
            }
          }
        }
      }
    }`
  )

  const projects = data.allContentfulProject.edges.map(
    ({ node }) => ({
        id: node.contentful_id,
        name: node.title,
        date: node.date,
        type: node.type,
        cover: node.cover.file.url
      })
  )

  const projectList = <ProjectList projects={projects} />

  return <Layout menu={<Menu />}
                 firstSectionTitle={"Projetos"}
                 firstSection={projectList}
                 secondSectionTitle={"Estúdio"}
                 secondSection={<AboutSection />} />
}

export default IndexPage
