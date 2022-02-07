import React from "react"

import "../styles/index.scss"
import * as aboutStyles from "./styles/about.module.scss"
import {graphql, useStaticQuery} from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const AboutSection = () => {
  const data = useStaticQuery(graphql`query {
    contentfulInfoSection(title: { eq: "About Section" })
    {
      title,
      info {
        raw
      },
      photos {
        title,
        file {
          url
        }
      }
    }
  }`)

  return (
    <div className={aboutStyles.main} id={"about"}>
      <div className={aboutStyles.photoSection}>
        {
          data.contentfulInfoSection.photos.map(({ title, file }, idx) => (
            <div className={aboutStyles.photo} key={idx}>
              <div className={aboutStyles.image}><img src={file.url} /></div>
              <div className={aboutStyles.subtitle}>{title}</div>
            </div>
          ))
        }
      </div>
      <div className={aboutStyles.text}>
        { renderRichText(data.contentfulInfoSection.info, {}) }
      </div>
    </div>
  )
}

export default AboutSection
