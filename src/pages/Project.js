import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import { projects } from './../helpers/projectsList'

const Project = () => {
  const { id } = useParams()
  let project
  projects.forEach((e) => {
    if (e.pathtitle === id) project = e
  })

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {<BtnGitHub link={project.gitHubLink} />}
        </div>
      </div>
    </main>
  )
}

export default Project
