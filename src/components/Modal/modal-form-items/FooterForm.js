const Footerform = (props) => {
  const { formdata } = props

  // Пример использования
  const handleSubmit = () => {
    // Выполнить действия с данными формы
    console.log(formdata) // Доступ и использование данных формы по необходимости
  }

  return (
    <div className="modal__dialog-footer modal__quiz-dialog-footer">
      <div
        data-ind="regForm"
        className="btn__footer-wrapper modal__quiz-dialog-footer-btn"
      >
        <span></span>
        <button
          className="disabled btn-quiz"
          type="button"
          id="prevBtn"
          disabled="disabled"
          data-ind="regForm-button"
        >
          Назад
        </button>
        <button
          className="btn-quiz btn-send"
          form="regForm"
          type="button"
          id="nextBtn"
          data-ind="regForm-button"
          onClick={handleSubmit}
        >
          Далее
        </button>
        <button
          className="btn-quiz btn-send hidden"
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
  )
}

export default Footerform
