import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Projects from '../../data/Projects'

const Project = () => {
  const { slug } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)

  useEffect(() => {
    const foundProject = Projects.find((project) => project.slug === slug)

    setCurrentProject(foundProject)
  }, [slug])

  if (!currentProject) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>{currentProject.title}</h1>
        <p>{currentProject.content}</p>
      </div>

    )
  }
}

export default Project