import { memo } from 'react'

const Titleform = () => {
  console.log('memo - Рендер Titleform')
  return (
    <div className="modal__quiz-header-title">
      <div className="modal__dialog-header-content">
        <h3 className="modal__header-title modal__quiz-header-title-text">
          Заявка на разработку сайта
        </h3>
        <span className="success-send-modal hidden">
          Ваша заявка отправлена!
        </span>
      </div>
      <div className="modal__dialog-header-close modal__quiz-header-close">
        <div className="js-modal-close modal__dialog-header-btn-close">
          <span>&times;</span>
        </div>
      </div>
    </div>
  )
}

const TitleformMemo = memo(Titleform)

export default TitleformMemo
