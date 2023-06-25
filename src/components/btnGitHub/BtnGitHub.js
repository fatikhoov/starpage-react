/* import gitHubIcon from './gitHub-black.svg' */
import './style.css'

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      {/* <img src={gitHubIcon} alt="сайт проекта" /> */}
      <strong>Перейти на сайт проекта</strong>
    </a>
  )
}

export default BtnGitHub
