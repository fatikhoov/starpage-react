import { useState, useEffect } from 'react'
import Titleform from './modal-form-items/TitleForm'
import Indlineform from './modal-form-items/IndLineForm'
import Bodyform from './modal-form-items/BodyForm'

const ModalForm = () => {
  const [formdata, setFormdata] = useState()

  const quizformdata = (newformdata) => {
    setFormdata(newformdata)
  }

  useEffect(() => {
    if (formdata !== undefined) console.log('formdata updated:', formdata)
  }, [formdata])

  return (
    <>
      <div className="modal__dialog-header modal__quiz-header">
        <Titleform />
        <Indlineform />
      </div>

      <Bodyform myformdata={quizformdata} />
    </>
  )
}

export default ModalForm
