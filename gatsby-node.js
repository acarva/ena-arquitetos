const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplatePath = path.resolve('./src/templates/projectDetail.js')

  const res = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            contentful_id
          }
        }
      }
    }`
  )

  res.data.allContentfulProject.edges.forEach(edge => {
    console.log(JSON.stringify(edge));

    createPage({
      component: blogTemplatePath,
      path: `/project/${edge.node.contentful_id}`,
      context: {
        contentfulId: edge.node.contentful_id
      }
    })
  })
}