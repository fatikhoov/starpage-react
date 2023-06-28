import { useState, useEffect } from 'react'
import LoaderForm from './LoaderForm'

const Bodyform = ({ myformdata, myonchange }) => {
  const whatsite = 'Какой сайт вам нужен?'
  const whatdesign = 'Есть ли у Вас фирменный стиль?'

  const tabFieldsets = document.querySelectorAll('fieldset.tab')
  const totalSteps = tabFieldsets.length

  const [state, setState] = useState({
    'Заявка на разработку сайта': 'Квиз - модалка',
    Имя: '',
    'Название проекта': '',
    'Цель разработки сайта': '',
    'Есть ли у Вас фирменный стиль?': 'Нет',
    'Какой сайт вам нужен?': 'Сайт-визитка',
    Комментарии: '',
    Почта: '',
    Telegram: '',
    sender: 'hello@starpage.ru',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    if (currentStep < totalSteps && validation(state)) {
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1)
    }
  }

  const handleInputChange = (event) => {
    const { target } = event
    const { name } = target

    const value = target.type === 'checkbox' ? target.checked : target.value

    setState({ ...state, [name]: value })

    myonchange({ ...state, [name]: value })
  }

  useEffect(() => {
    if (state !== undefined) {
      myonchange(state)
    }
  }, [state, myonchange])

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    validation(state)
    myformdata(state)
    setIsLoading(false)
  }

  const validation = (event) => {
    console.log('Валидация прошла успешно')
    return true
  }

  return (
    <>
      <div className="modal__dialog-body">
        <form id="regForm" onSubmit={handleSubmit}>
          <input
            type="hidden"
            id="regForm-website"
            name="Заявка на разработку сайта"
            value={state['Заявка на разработку сайта']}
            onChange={handleInputChange}
          />
          <input
            type="hidden"
            name="sender"
            value={state.sender}
            onChange={handleInputChange}
          />

          <fieldset className={currentStep === 1 ? 'tab' : 'tab hidden'}>
            <legend>1. {whatsite}</legend>
            <ul className="form-ul form-ul-radio">
              <li className="starpage_input-radio-wrapper">
                <label
                  className="starpage_input-radio-label"
                  htmlFor="landing-radio"
                >
                  <div className="starpage_input-radio-label-wrapper">
                    <input
                      className="starpage__input starpage__input-radio"
                      type="radio"
                      name={whatsite}
                      checked={state[whatsite] === 'Лендинг'}
                      onChange={handleInputChange}
                      id="landing-radio"
                      value="Лендинг"
                    />
                    <span> Лендинг (одностраничный сайт)</span>
                  </div>
                </label>
              </li>
              <li className="starpage_input-radio-wrapper">
                <label
                  className="starpage_input-radio-label"
                  htmlFor="ecommerce-radio"
                >
                  <div className="starpage_input-radio-label-wrapper">
                    <input
                      className="starpage__input starpage__input-radio"
                      type="radio"
                      name={whatsite}
                      checked={state[whatsite] === 'Интернет-магазин'}
                      onChange={handleInputChange}
                      id="ecommerce-radio"
                      value="Интернет-магазин"
                    />
                    <span> Интернет-магазин</span>
                  </div>
                </label>
              </li>
              <li className="starpage_input-radio-wrapper">
                <label
                  className="starpage_input-radio-label"
                  htmlFor="corp-radio"
                >
                  <div className="starpage_input-radio-label-wrapper">
                    <input
                      className="starpage__input starpage__input-radio"
                      type="radio"
                      name={whatsite}
                      checked={state[whatsite] === 'Сайт-визитка'}
                      onChange={handleInputChange}
                      id="corp-radio"
                      value="Сайт-визитка"
                    />
                    <span> Сайт-визитка (корпоративный)</span>
                  </div>
                </label>
              </li>
              <li className="starpage_input-radio-wrapper">
                <label
                  className="starpage_input-radio-label"
                  htmlFor="dont-know-radio"
                >
                  <div className="starpage_input-radio-label-wrapper">
                    <input
                      className="starpage__input starpage__input-radio"
                      type="radio"
                      name={whatsite}
                      checked={
                        state[whatsite] === 'Не знаю, нужна консультация'
                      }
                      onChange={handleInputChange}
                      id="dont-know-radio"
                      value="Не знаю, нужна консультация"
                    />
                    <span> Не знаю, нужна консультация</span>
                  </div>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset className={currentStep === 2 ? 'tab' : 'tab hidden'}>
            <legend>2. {whatdesign}</legend>
            <ul className="form-ul form-ul-radio">
              <li>
                <label
                  className="starpage_input-radio-label"
                  htmlFor="user-design-radio"
                >
                  <div className="starpage_input-radio-label-wrapper">
                    <input
                      className="starpage__input starpage__input-radio"
                      type="radio"
                      name={whatdesign}
                      id="user-design-radio"
                      value="Да"
                      checked={state[whatdesign] === 'Да'}
                      onChange={handleInputChange}
                    />

                    <span> Да </span>
                  </div>
                </label>
              </li>
              <li>
                <label
                  className="starpage_input-radio-label"
                  htmlFor="user-no-design-radio"
                >
                  <div className="starpage_input-radio-label-wrapper">
                    <input
                      className="starpage__input starpage__input-radio"
                      type="radio"
                      name={whatdesign}
                      id="user-no-design-radio"
                      value="Нет"
                      checked={state[whatdesign] === 'Нет'}
                      onChange={handleInputChange}
                    />

                    <span> Нет </span>
                  </div>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset className={currentStep === 3 ? 'tab' : 'tab hidden'}>
            <legend>3. Персональные данные</legend>
            <ul className="form-ul">
              <li className="form__input-wrapper">
                <input
                  className="starpage__input"
                  type="text"
                  name="Имя"
                  id="user-name"
                  title="Как мы будем к вам обращаться?"
                  placeholder=" "
                  value={state['Имя']}
                  onChange={handleInputChange}
                />
                <label htmlFor="user-name" className="starpage__input-label">
                  Ваше имя
                </label>
              </li>
              <li className="form__input-wrapper">
                <input
                  className="starpage__input"
                  type="text"
                  name="Название проекта"
                  id="user-company"
                  title="Постарайтесь лучше рассказать о своем проекте"
                  placeholder=" "
                  value={state['Название проекта']}
                  onChange={handleInputChange}
                />
                <label htmlFor="user-company" className="starpage__input-label">
                  Имя проекта
                </label>
              </li>
              <li className="form__input-wrapper">
                <input
                  className="starpage__input"
                  type="text"
                  name="Цель разработки сайта"
                  id="user-target"
                  title="Постарайтесь лучше рассказать о своем проекте"
                  placeholder=" "
                  value={state['Цель разработки сайта']}
                  onChange={handleInputChange}
                />
                <label htmlFor="user-target" className="starpage__input-label">
                  Цель разработки сайта
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset className={currentStep === 4 ? 'tab' : 'tab hidden'}>
            <legend>4. Контакты</legend>
            <ul className="form-ul">
              <li className="form__input-wrapper">
                <input
                  type="email"
                  name="Почта"
                  placeholder=" "
                  id="email"
                  className="starpage__input"
                  data-name="email"
                  title="Напишите почту, по которой мы можем с вами связаться"
                  value={state['Почта']}
                  onChange={handleInputChange}
                />
                <label htmlFor="email" className="starpage__input-label">
                  Почта
                </label>
              </li>
              <li className="form__input-wrapper">
                <input
                  type="text"
                  name="Telegram"
                  id="telegraminput"
                  placeholder=" "
                  className="starpage__input"
                  data-required="true"
                  title="Напишите ник или номер, чтобы мы
            могли с вами связаться в Telegram"
                  value={state.Telegram}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="telegraminput"
                  className="starpage__input-label"
                >
                  Telegram
                </label>
              </li>
              <li className="form__input-wrapper starpage__input-textarea">
                <textarea
                  className="starpage__input starpage__input-textarea"
                  name="Комментарии"
                  rows="4"
                  id="formmessage"
                  placeholder=" "
                  value={state['Комментарии']}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="formmessage" className="starpage__input-label">
                  Укажите все пожелания и комментарии
                </label>
              </li>
              {/* <li>
            <div className="input__wrapper input__wrapper-files">
              <input
                className="input__file-upload"
                type="file"
                name="file-callback"
                id="regForm-file-callback"
                value={ state.value}
                onChange={ handleInputChange}
              />
              <div
                className="buttons__file-upload"
                id="regForm-buttons__file-upload"
              ></div>
              <div
                className="images__file-upload-pre"
                id="regForm-images__file-upload-pre"
              ></div>
            </div>
          </li> */}
            </ul>
          </fieldset>
        </form>
      </div>

      {isLoading && <LoaderForm />}

      <div className="modal__dialog-footer modal__quiz-dialog-footer">
        <div
          data-ind="regForm"
          className="btn__footer-wrapper modal__quiz-dialog-footer-btn"
        >
          <button
            className={` btn-quiz ${currentStep === 1 ? 'disabled' : ''}`}
            type="button"
            id="prevBtn"
            data-ind="regForm-button"
            onClick={handlePrevStep}
          >
            Назад
          </button>
          <button
            className={`btn-quiz btn-send ${
              currentStep === totalSteps ? 'hidden' : ''
            }`}
            type="button"
            id="nextBtn"
            data-ind="regForm-button"
            onClick={handleNextStep}
          >
            Далее
          </button>
          <button
            className={`btn-quiz btn-send ${
              currentStep === totalSteps ? '' : 'hidden'
            }`}
            type="submit"
            form="regForm"
            id="btnRegForm"
            data-ind="regForm-button"
          >
            Отправить
          </button>
        </div>

        <button
          className="js-modal-close btn-quiz hidden"
          id="onSuccess__modal-quiz-btn"
          data-ind="regForm-onSuccess"
          type="button"
        >
          На главную
        </button>
      </div>
    </>
  )
}

export default Bodyform
