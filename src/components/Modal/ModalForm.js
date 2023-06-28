import { useState, useEffect } from 'react'
import TitleformMemo from './modal-form-items/TitleForm'
import Indlineform from './modal-form-items/IndLineForm'
import Bodyform from './modal-form-items/BodyForm'

const ModalForm = () => {
  const [formdata, setFormdata] = useState()
  const [qqonchange, setQqonchange] = useState()

  useEffect(() => {}, [formdata])

  useEffect(() => {}, [qqonchange])

  return (
    <>
      <div className="modal__dialog-header modal__quiz-header">
        <TitleformMemo />
        <Indlineform newInd={qqonchange} />
      </div>

      <Bodyform
        myformdata={(newformdata) => {
          setFormdata(newformdata)
        }}
        myonchange={(newonchange) => {
          setQqonchange(newonchange)
        }}
      />
    </>
  )
}

export default ModalForm
