import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import WorkStyles from '../styles/WorkStyles';

const Work = () => {
  const data = useStaticQuery(graphql`
  query {
    allSanityWorks(sort: { fields: [order], order: ASC })  {
    nodes {
      name
      id
      projectLink
      codeLink
      tech
      description
      order
      imgUrl {
        asset {
          gatsbyImageData(layout: CONSTRAINED, width: 1500)
        }
      }
    }
  }
}
`);


const work = data.allSanityWorks.nodes;

  return (
    <WorkStyles id="work">
    <div className='container'>
      <h1>Work</h1>
      {work.map((work, i) => (
      <div className='work' key={`${work.id}-${i}`}>
          <div className='title'>
            <h2>{work.name}</h2>
            <div className='links'>
              <a href={work.projectLink} className='padding-border'>Live Site</a>
              <a href={work.codeLink} className='padding-border'>GitHub</a>
            </div>
            </div>    
          <div className='image'>
            <GatsbyImage image={work.imgUrl?.asset?.gatsbyImageData} alt='picture of work'></GatsbyImage>
          </div>  
          <div className='details'>
              {work.tech.map((tech, i) => (
                <div key={`${tech.id}-${i}`} className='padding-border'>{tech}</div>
              ))}
            </div>      
      </div>
    ))}
    </div>
    </WorkStyles>
  )
}

export default Work