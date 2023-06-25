import React, { useState } from 'react'

import ModalForm from '../Modal/ModalForm'
import Modal from '../Modal/Modal'

import './style.css'

const Header = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <div className="main wrapper clearfix" id="section__home-1">
        <article className="main__article">
          <header className="main__header">
            <h1 className="title__head-block">
              Креативные сайты <br />- наша особенность
            </h1>
            <div
              className="js-modal-open button-primary"
              onClick={() => {
                setModalActive(true)
              }}
            >
              Рассчитать стоимость
            </div>
            <picture>
              <img
                className="logo-rocket"
                src="img/rocket.png"
                alt="Logo rocket"
              />
            </picture>
            <div className="circle-blue"></div>
          </header>

          <section className="main__section-wrapper main__services">
            <h6>
              Мы знаем
              <br />
              как разработать сайт
              <br />
              который принесет прибыль!
            </h6>

            <section>
              <div className="link-block js-modal-open" href="#modal-test">
                <h2 className="text-color-brand text-color-brand-hover">
                  Сайт-визитка
                </h2>
                <h5 className="link-block-content">
                  Создаем интуитивно понятну навигацию по сайту с входами,
                  переходами и захватывающим дизайном
                </h5>
                <p>14-21 день</p>
              </div>
              <div className="link-block js-modal-open" href="#modal-test">
                <h2 className="text-color-brand text-color-brand-hover">
                  Интернет-магазин
                </h2>
                <h5 className="link-block-content">
                  Разработаем полноценный магазин с корзиной, листингом и
                  карточками товара, чтобы делать покупки легко
                </h5>
                <p>21-28 дней</p>
              </div>
              <div className="link-block js-modal-open" href="#modal-test">
                <h2 className="text-color-brand text-color-brand-hover">
                  Лендинг
                </h2>
                <h5 className="link-block-content">
                  Продумаем и разработаем так, чтобы пользователь точно достиг
                  цели
                </h5>
                <p>5-7 дней</p>
              </div>
            </section>
            <picture>
              <img
                className="logo-stars__services"
                src="img/stars.png"
                alt="Logo stars"
              />
            </picture>
          </section>
        </article>
      </div>
      <div className="main main_dark wrapper clearfix" id="section__home-2">
        <article className="main__article">
          <section className="main__section-wrapper main__advantages">
            <h3 className="main__services-h2">Почему мы?</h3>
            <section>
              <div className="link-block">
                <div className="link-block-content">
                  <div className="link-block-text">
                    <h4>Быстро</h4>
                    <p>
                      Мы уделяем больше времени исследованию и анализу Вашего
                      продукта, и не тратим время на сложное программирование
                    </p>
                  </div>
                  <span className="text-transparent-color">1</span>
                </div>
                <span>
                  Запускаем лендинг за 3-7 дней Интернет-магазин будет готов за
                  21 день
                </span>
              </div>
              <div className="link-block">
                <picture>
                  <img
                    className="logo-stars__advantages"
                    src="img/stars.png"
                    alt="Logo stars"
                  />
                </picture>
                <div className="link-block-content">
                  <div className="link-block-text">
                    <h4>Удобно</h4>
                    <p>
                      Реализуем все необходимые функции - онлайн оплата, CRM
                      системы, онлайн расписание, настраиваем ботов
                    </p>
                  </div>
                  <span className="text-transparent-color">2</span>
                </div>
                <span>
                  А в дальнейшем вы сможете самостоятельно менять тексты и
                  картинки
                </span>
              </div>
              <div className="link-block">
                <div className="link-block-content">
                  <div className="circle-brand"></div>
                  <div className="link-block-text">
                    <h4>Круто</h4>
                    <p>
                      В нашем штате профессиональные дизайнеры и маркетологи,
                      которые сделают Ваш сайт отличным от конкурентов, покажут
                      продукт с лучшей стороны и решат Ваши задачи креативно и
                      современно
                    </p>
                  </div>
                  <span className="text-transparent-color">3</span>
                </div>
                <span>
                  Никаких готовых решений - только уникальный дизайн и
                  продуманная навигация по сайту
                </span>
              </div>
            </section>
            <a className="js-modal-open button-primary" href="#modal-test">
              Обсудить проект
            </a>
          </section>
        </article>
      </div>
      <div className="main main_dark wrapper clearfix" id="section__home-4">
        <article className="main__article">
          <section className="main__section-wrapper main__work-steps">
            <h3 className="main__services-h2">Понятная схема работы</h3>
            <section>
              <div className="link-block">
                <h4>Подготовка</h4>
                <ul className="work-steps__ul">
                  <li>
                    <span>Подписываем договор с техническим заданием</span>
                  </li>
                  <li>
                    <span>Проводим маркетинговое исследование</span>
                  </li>
                  <li>
                    <span>Разрабатываем прототип сайта</span>
                  </li>
                  <li>
                    <span>Согласуем первичные работы</span>
                  </li>
                </ul>
              </div>

              <div className="link-block">
                <h4>Дизайн</h4>
                <ul className="work-steps__ul">
                  <li>
                    <span>Отрисовываем дизайн сайта</span>
                  </li>
                  <li>
                    <span>Адаптируем под нужные устройства</span>
                  </li>
                  <li>
                    <span>Подключаем анимации</span>
                  </li>
                  <li>
                    <span>Проводим согласование</span>
                  </li>
                </ul>
              </div>
              <div className="link-block">
                <picture className="work-steps__image">
                  <img
                    className="logo-neon_Like"
                    src="img/neon_Like.png"
                    alt="Logo Like"
                  />
                </picture>
                <h4>Запуск</h4>
                <ul className="work-steps__ul">
                  <li>
                    <span>Подключаем домен и корпоративную почту</span>
                  </li>
                  <li>
                    <span>Яндекс Метрику</span>
                  </li>
                  <li>
                    <span>
                      Настраиваем телеграмм-бот и другие необходимые виджеты
                    </span>
                  </li>
                  <li>
                    <span>Обучаем управлению сайтом</span>
                  </li>
                </ul>
              </div>
            </section>
            <a className="js-modal-open button-primary" href="#modal-test">
              Пройти БРИФ
            </a>
          </section>
        </article>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        name={'modal-form'}
      >
        <ModalForm />
      </Modal>
    </div>
  )
}

export default Header
