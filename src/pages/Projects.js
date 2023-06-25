import Project from '../components/project/Project'
import { projects } from './../helpers/projectsList'
import Slider from 'react-slick'

const Projects = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '42px',
    slidesToShow: 1,
    speed: 500,
  }
  return (
    <main className="section">
      <div className="container">
        {/* <!-- Главный экран Лендинг --> */}
        <div className="main wrapper clearfix">
          <article className="main__article">
            <header className="header__service-landing">
              <h1>
                Разработка
                <br />
                <span>Landing Page</span>
              </h1>
            </header>
            <section className="main__section-wrapper main__service-landing">
              <img
                className="title-img-page"
                src="/img/landing.png"
                alt="Разработка landing page"
              />
              <h2 className="header__service-landing-h2">
                для продажи товаров/услуг, чтобы увеличить конверсию и прибыль!
                <br />
              </h2>
            </section>
          </article>
        </div>

        {/* <!-- Наши клиенты --> */}
        <div className="main main_dark wrapper clearfix">
          <article className="main__article">
            <section className="main__section-wrapper main__service-landing-clients">
              <h3>Наши клиенты</h3>
              <section>
                {/* <!-- 2 --> */}
                <div className="link-block none-list-style-type">
                  <h4>Успешно торгующие на маркетплейсах</h4>
                  <ul>
                    <li>
                      <span>OZON</span>
                    </li>
                    <li>
                      <span>Wildberries</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- 2 --> */}
                <div className="link-block none-list-style-type">
                  <h4>Продающие свои услуги, продвигающие личный бренд</h4>
                  <ul>
                    <li>
                      <span>Психологи</span>
                    </li>
                    <li>
                      <span>Адвокаты</span>
                    </li>
                    <li>
                      <span>Тарологи</span>
                    </li>
                    <li>
                      <span>Нутрицилоги</span>
                    </li>
                    <li>
                      <span>Таргетологи</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- 2 --> */}
                <div className="link-block none-list-style-type">
                  <h4>
                    Планирующие провести
                    <br />
                    событие/мероприятие
                  </h4>
                  <ul>
                    <li>
                      <span>Вебинары</span>
                    </li>
                    <li>
                      <span>Прямые эфиры</span>
                    </li>
                    <li>
                      <span>Анонсы курсов</span>
                    </li>
                    <li>
                      <span>Туры</span>
                    </li>
                  </ul>
                </div>
              </section>
            </section>
          </article>
        </div>

        {/* <!-- Стоимость --> */}
        <div className="main wrapper clearfix">
          <article className="main__article">
            <header className="header__service-landing">
              <h3>
                Стоимость <span className="title">Landing Page</span> <br />
                <span className="big bold none-uppercase">
                  от 25 000 руб.
                </span>{' '}
                <br />
                <span className="price-small-text">
                  Срок исполнения 3 - 14 дней
                </span>
              </h3>
            </header>
            <section className="main__section-wrapper main__service-price">
              {/* <!-- 2 --> */}
              <div className="link-block">
                <section>
                  <p className="bold">Включено в пакет:</p>
                  <ul>
                    <li>
                      <span>Адаптивный дизайн</span>
                    </li>
                    <li>
                      <span>Верстка из 5 блоков</span>
                    </li>
                    <li>
                      <span>Целевое действие заявка/продажа</span>
                    </li>
                    <li>
                      <span>Квиз или форма обратной связи</span>
                    </li>
                    <li>
                      <span>SEO оптимизация для индексации</span>
                    </li>
                    <li>
                      <span>Понятная система управления</span>
                    </li>
                    <li>
                      <span>Подключение Яндекс и Google метрик</span>
                    </li>
                    <li>
                      <span>Установка домена + SSL защита сайта</span>
                    </li>
                    <li>
                      <span>Обучение администрированию в CMS</span>
                    </li>
                    <li>
                      <span>Оптимизация скорости загрузки сайта</span>
                    </li>
                    <li>
                      <span>Бонус: политика конфиденциальности</span>
                    </li>
                  </ul>
                </section>
                <section>
                  <p className="bold">
                    Опциональные возможности:
                    <br />
                    <span className="price-small-text">
                      Оплачиваются дополнительно по необходимости:
                    </span>
                  </p>
                  <ul>
                    <li>
                      <span>Онлайн касса</span>
                    </li>
                    <li>
                      <span>Форма доставки</span>
                    </li>
                    <li>
                      <span>Поиск по сайту</span>
                    </li>
                    <li>
                      <span>Онлайн запись</span>
                    </li>
                    <li>
                      <span>Интеграция CRM</span>
                    </li>
                    <li>
                      <span>Подключить телеграмм-бота</span>
                    </li>
                    <li>
                      <span>Система уведомлений и рассылка</span>
                    </li>
                  </ul>
                </section>
              </div>
              <button
                className="js-modal-open button-primary"
                type="button"
                href="#modal-test"
              >
                Заказать сайт
              </button>
            </section>
          </article>
        </div>

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
                      skills={project.skills}
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
