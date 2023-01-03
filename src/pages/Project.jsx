import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../db/data'
import styles from '../style'

export default function Project() {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className='flex flex-col'>
        <h1 className={`${styles.heading2} text-center`}>Projects</h1>
        <div className={`${styles.boxWidth}`}>
          {
            projects.map((selectedProject, index) => (
              <ProjectCard key={index} proj={selectedProject} />
            ))
          }
        </div>
      </div>
    </div>

  )
}
