import React from "react"

import "../styles/index.scss"
import * as projectStyles from "./styles/project.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectItem = ({ id, name, cover, date, type }) => {
  const year = new Date(date).getFullYear()

  return (
    <AniLink fade to={`/project/${id}`} className={projectStyles.item} duration={3}>
      <div className={projectStyles.cover}><img src={cover} /></div>
      <div className={projectStyles.subtitle}>
        <span>{name}</span>
        <span>{year}</span>
      </div>
      <div className={projectStyles.subtitle}>
        <span>{type}</span>
      </div>
    </AniLink>
  )
}

export default ProjectItem
