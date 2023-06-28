import { useState, useEffect } from 'react'

const Indlineform = ({ newInd }) => {
  const [filledCount, setFilledCount] = useState(0)

  useEffect(() => {
    let count = 0
    for (const key in newInd) {
      if (newInd[key].length !== 0) {
        count++
      }
    }
    setFilledCount(count)
  }, [newInd])

  const percentFilled =
    (filledCount / Object.keys(newInd || {}).length) * 100 || 0

  return (
    <>
      <div className="modal__quiz-header-description" data-ind="regForm">
        <div className="modal__quiz-header-description-content">
          Пройдите тест и получите персональный расчет
        </div>
        <div className="modal__quiz-steps-show" id="modal__quiz-steps-show">
          1/5
        </div>
      </div>
      <div className="modal__quiz-indicator-line" data-ind="regForm">
        <div
          className="modal__quiz-indicator-line-show"
          style={{ width: percentFilled + '%' }}
        ></div>
      </div>
    </>
  )
}

export default Indlineform
