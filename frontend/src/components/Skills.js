import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image';
import SkillsStyles from '../styles/SkillsStyles';

const Skills = () => {
  const data = useStaticQuery(graphql`
query MyQuery {
  allSanitySkills(sort: {order: ASC, fields: order}) {
    nodes {
      name
      order
      icon {
        asset {
          gatsbyImageData(backgroundColor: "transparent", width: 250)
        }
      }
    }
  }
}
`)

  const skills = data.allSanitySkills.nodes;

  return (
    <SkillsStyles id='skills'>
      <h2>Skills</h2>
    <div className='skills-wrapper'>
     {skills.map((skill, i) => {
      return (
        <div key={`skill-${i}`} className='skill-card'>
            <GatsbyImage image={skill.icon.asset.gatsbyImageData} alt='icon image'></GatsbyImage>
            <p>{skill.name}</p>
        </div>
      )
     })}
    </div>
    </SkillsStyles>
  )
}

export default Skills

