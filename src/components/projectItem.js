import React from "react"

import "../styles/index.scss"
import * as projectStyles from "./styles/project.module.scss"
import { Link } from "gatsby";

const ProjectItem = ({ id, name, cover, date, type }) => {
  const year = new Date(date).getFullYear()

  return (
    <Link to={`/project/${id}`} className={projectStyles.item}>
      <div className={projectStyles.cover}><img src={cover} /></div>
      <div className={projectStyles.subtitle}>
        <span>{name}</span>
        <span>{year}</span>
      </div>
      <div className={projectStyles.subtitle}>
        <span>{type}</span>
      </div>
    </Link>
  )
}

export default ProjectItem
