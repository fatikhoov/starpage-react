import gitHubIcon from './gitHub-black.svg'
import './style.css'

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="сайт проекта" />
      &nbsp; Перейти на сайт проекта
    </a>
  )
}

export default BtnGitHub
