import React from "react"

import "../styles/index.scss"
import * as projectStyles from "./styles/project.module.scss"
import ProjectItem from "./projectItem"

const ProjectList = ({ projects }) => {

  return (
    <div className={projectStyles.list} id={"projects"}>
      { projects.map(project => (
        <ProjectItem key={project.id}
          id={project.id} cover={project.cover} name={project.name}
          date={project.date} type={project.type}
        />
      ))}
    </div>
  )
}

export default ProjectList
