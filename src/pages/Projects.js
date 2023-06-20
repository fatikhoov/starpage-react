import Project from '../components/project/Project'
import { projects } from './../helpers/projectsList'
import Slider from 'react-slick'

const Projects = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '32px',
    slidesToShow: 1,
    speed: 500,
  }
  return (
    <main className="section">
      <div className="container">
        <div className="main wrapper clearfix overflow-hidden">
          <article className="main__article">
            <section className="main__section-wrapper main__service-landing-clients">
              <h3>Кейсы, которые работают</h3>

              <Slider {...settings}>
                {projects.map((project, index) => {
                  return (
                    <Project
                      key={index}
                      title={project.title}
                      img={project.img}
                      index={project.pathtitle}
                    />
                  )
                })}
              </Slider>
            </section>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Projects
