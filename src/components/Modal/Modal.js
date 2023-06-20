import React from 'react'
import './modal.sass'

const Modal = ({ active, setActive, children, name }) => {
  if (active) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `modal__content active ${name}` : `modal__content ${name}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
