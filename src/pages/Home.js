import React, { useState } from 'react'
import Header from './../components/header/Header'
import Modal from './../components/Modal/Modal'

const Home = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <Modal active={modalActive} setActive={setModalActive} name={'quiz'}>
            Hello
          </Modal>
          <button onClick={() => setModalActive(true)}>Open</button>
        </div>
      </main>
    </>
  )
}

export default Home
