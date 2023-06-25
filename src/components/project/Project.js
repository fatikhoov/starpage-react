import { NavLink } from 'react-router-dom'
import './style.css'

const Project = ({ title, skills, img, index }) => {
  return (
    <li className="project">
      <img src={img} alt={title} className="project__img" />
      <h3 className="project__title">{title}</h3>
      <p>{skills}</p>
      <NavLink to={`/landing/${index}`}>
        <button>Открыть кейс</button>
      </NavLink>
    </li>
  )
}

export default Project
