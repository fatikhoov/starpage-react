import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container" id="section__footer">
        {/* <!-- вопросы-ответы --> */}
        <div className="main wrapper clearfix" id="section__home-5">
          <article className="main__article">
            <section className="main__section-wrapper main__req-res">
              <h3 className="main__services-h2">
                Вы спрашивали
                <br />- Мы отвечаем
              </h3>
              <picture className="req-res__image">
                <img
                  className="logo-megaphone"
                  src="/img/megaphone.png"
                  srcSet="/img/megaphone.png 2x"
                  alt="Logo megaphone"
                />
              </picture>
              <section className="main__req-res-accordion-items">
                <div className="accordion__req-res">
                  <button className="btn-accordion">
                    <h4 className="title-req-res">
                      За сколько дней будет готов сайт?
                    </h4>
                    <span>&times;</span>
                  </button>

                  <p className="content-accordion hidden-accordion">
                    Всё зависит от того, какой сайт требуется разработать.
                    Например: интернет-магазин мы запускаем в среднем за 21
                    день, а лендинг можно разработать и за 3 дня.
                  </p>
                </div>

                <div className="accordion__req-res">
                  <button className="btn-accordion">
                    <h4 className="title-req-res">Какая средняя стоимость?</h4>
                    <span>&times;</span>
                  </button>
                  <p className="content-accordion hidden-accordion">
                    В среднем цены на услуги разработки сайта начинаются от 35
                    000 руб. Всё зависит от вашего желания по наполнению
                    функционалом сайта, для вашего удобства мы подготовили
                    выгодное предложение с необходимым набором в разделе Тарифы
                    Доменное имя сайта и год пользованием хостинга входит в
                    стоимость пакетов
                  </p>
                </div>

                <div className="accordion__req-res">
                  <button className="btn-accordion">
                    <h4 className="title-req-res">
                      Вдруг мне не понравится результат?
                    </h4>
                    <span>&times;</span>
                  </button>
                  <p className="content-accordion hidden-accordion">
                    Наша с вами работа состоит из нескольких этапов БРИФ - мы
                    прислушиваемся к вашим знаниям о продукте/услуге. Исследуем
                    рынок, анализируем конкурентов и целевую аудиторию,
                    учитываем все детали. Подписание Договора с техническим
                    заданием. Оплата производится после согласования в три
                    этапа. Ваш крутой результат - это наша гордость!
                  </p>
                </div>

                <div className="accordion__req-res">
                  <button className="btn-accordion">
                    <h4 className="title-req-res">
                      Если через месяц я захочу что-то изменить на сайте?
                    </h4>
                    <span>&times;</span>
                  </button>
                  <p className="content-accordion hidden-accordion">
                    Мы подготовим удобную навигацию для администрирования и вы
                    сможете легко изменить фотографию, добавить карточку товара
                    или текст на сайте. Так же мы можем дополнительно обучить
                    вас, провести интенсив по "администрированию сайта".
                  </p>
                </div>

                <div className="accordion__req-res">
                  <button className="btn-accordion">
                    <h4 className="title-req-res">
                      У меня нет логотипа и фирменного стиля
                    </h4>
                    <span>&times;</span>
                  </button>
                  <p className="content-accordion hidden-accordion">
                    В нашей команде опытные дизайнеры, которые могут создать
                    уникальный фирменный стиль.
                  </p>
                </div>

                <div className="accordion__req-res">
                  <button className="btn-accordion">
                    <h4 className="title-req-res">
                      У меня нет контента (заготовленного текста, фотографий и
                      др.)
                    </h4>
                    <span>&times;</span>
                  </button>
                  <p className="content-accordion hidden-accordion">
                    Мы можем предоставить услуги копирайтера и подобрать весь
                    необходимый контент для вашего сайта.
                  </p>
                </div>

                <div className="accordion__req-res">
                  <button className="btn-accordion">
                    <h4 className="title-req-res">
                      Почему разработка сайта на Тильде?
                    </h4>
                    <span>&times;</span>
                  </button>
                  <p className="content-accordion hidden-accordion">
                    Мы не тратим время на сложное программирование, а уделяем
                    больше времени исследованию продукта, это увеличивает
                    продажи. При этом реализуем все необходимые функции- онлайн
                    оплата, CRM системы, онлайн расписание, настраиваем ботов В
                    дальнейшем администрировать сайт вы сможете самостоятельно.
                  </p>
                </div>
              </section>
            </section>
          </article>
        </div>

        <footer className="main main_dark footer__wrapper">
          <h3 className="footer__wrapper-title" data-ind="FeedbackForm">
            Остались еще вопросы?
          </h3>

          <div className="Feedback-body">
            <h4 className="form-ul" data-ind="FeedbackForm">
              Свяжитесь с нами
              <br />
              удобным для вас способом!
            </h4>

            <form
              id="FeedbackForm"
              data-ind="FeedbackForm"
              encType="multipart/form-data"
              method="post"
              autoComplete="off"
            >
              <input
                type="hidden"
                id="FeedbackForm-website"
                name="website"
                value="Форма обратной связи"
              />
              <input type="hidden" name="sender" value="hello@starpage.ru" />

              <ul className="form-ul">
                <li className="form__input-wrapper">
                  <input
                    className="starpage__input"
                    type="text"
                    name="name"
                    id="namecallback"
                    placeholder=" "
                    title="Как мы будем к вам обращаться?"
                    data-required="true"
                    data-min-length="2"
                    data-max-length="50"
                  />
                  <label
                    htmlFor="namecallback"
                    className="starpage__input-label"
                  >
                    Ваше имя
                  </label>
                </li>
                <li className="form__input-wrapper">
                  <input
                    className="starpage__input"
                    type="text"
                    name="telegram"
                    id="telegramnamecallback"
                    placeholder=" "
                    data-required="true"
                    data-min-length="2"
                    data-max-length="100"
                  />
                  <label
                    htmlFor="telegramnamecallback"
                    className="starpage__input-label"
                  >
                    Контакт для связи
                  </label>
                </li>
                <li className="form__input-wrapper starpage__input-textarea">
                  <textarea
                    className="starpage__input starpage__input-textarea"
                    name="comment"
                    rows="4"
                    id="messagecallback"
                    placeholder=" "
                    data-required="true"
                  ></textarea>
                  <label
                    htmlFor="messagecallback"
                    className="starpage__input-label"
                  >
                    Напишите всё, что считаете важным
                  </label>
                </li>
                <li>
                  <div className="input__wrapper input__wrapper-files">
                    <input
                      className="input__file-upload"
                      type="file"
                      name="file-callback"
                      id="FeedbackForm-file-callback"
                    />
                    <div
                      className="buttons__file-upload"
                      id="FeedbackForm-buttons__file-upload"
                    ></div>
                    <div
                      className="images__file-upload-pre"
                      id="FeedbackForm-images__file-upload-pre"
                    ></div>
                  </div>
                </li>
              </ul>
            </form>
            <div id="FeedbackForm__success-content"></div>

            <div className="form-ul" data-ind="FeedbackForm">
              <div className="btn__footer-wrapper">
                <button
                  className="button-primary"
                  type="submit"
                  form="FeedbackForm"
                  id="btnFeedbackForm"
                  data-ind="FeedbackForm-button"
                >
                  Отправить
                </button>
              </div>
            </div>
            <div
              className="modal__dialog-loader hidden"
              data-ind="FeedbackForm-loader"
            >
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <ul className="ul-footer">
            <li>
              <a href="https://t.me/my_starpage">
                <img
                  className="logo-telegram"
                  src="/img/telegram.svg"
                  srcSet="/img/telegram.svg 2x"
                  alt="starpage telegram"
                />
                <span className="footer__social-text">Написать в Telegram</span>
              </a>
            </li>
          </ul>
          <ul className="ul-footer">
            <li>
              <a href="mailto:hello@starpage.ru">
                <img
                  className="logo-email"
                  src="/img/email.png"
                  srcSet="/img/email.png 2x"
                  alt="starpage email"
                />
                <span className="footer__social-text">hello@starpage.ru</span>
              </a>
            </li>
          </ul>

          <div id="inner_link"></div>
        </footer>
      </div>
    </footer>
  )
}

export default Footer
