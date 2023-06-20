import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import Modal from '../Modal/Modal'

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link'

  const [modalActive, setModalActive] = useState(false)

  return (
    <nav className="nav main wrapper">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo title">
            <strong>STARPAGE</strong>
          </NavLink>
          <div
            className="link-menu-modal-open"
            onClick={() => {
              setModalActive(true)
            }}
          >
            <span className="menu-burger-design"></span>
            <span className="menu-burger-design"></span>
            <span className="menu-burger-design"></span>
          </div>
          <Modal
            active={modalActive}
            setActive={setModalActive}
            name={'menu__mobile'}
          >
            <div className="modal__dialog">
              <div className="modal__dialog-header">
                <div className="modal__dialog-header-content">
                  <p>
                    <a className="logo title" href="/home">
                      <strong>STARPAGE</strong>
                    </a>
                  </p>
                </div>
                <div className="modal__dialog-header-close">
                  <div
                    className="js-modal-close modal__dialog-header-btn-close"
                    id="burger-close"
                    onClick={() => setModalActive(false)}
                  >
                    <span className="menu-burger-design-close"></span>
                    <span className="menu-burger-design-close"></span>
                  </div>
                </div>
              </div>
              <div className="modal__dialog-body">
                <nav className="menu__starpage" id="menu__starpage">
                  <ul className="nav-list">
                    <li
                      className="nav-list__item"
                      onClick={() => setModalActive(false)}
                    >
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        Главная
                      </NavLink>
                    </li>

                    <li
                      className="nav-list__item"
                      onClick={() => setModalActive(false)}
                    >
                      <NavLink
                        to="/landing"
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        Лендинг
                      </NavLink>
                    </li>
                    <li
                      className="nav-list__item"
                      onClick={() => setModalActive(false)}
                    >
                      <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        Контакты
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <ul className="menu__starpage-items-social">
                  <li onClick={() => setModalActive(false)}>
                    <a href="https://t.me/my_starpage">
                      <img
                        className="logo-telegram"
                        src="img/telegram.svg"
                        alt="starpage telegram"
                      />
                    </a>
                  </li>
                  <li onClick={() => setModalActive(false)}>
                    <a href="mailto:hello@starpage.ru">
                      <img
                        className="logo-email"
                        src="img/email.png"
                        alt="starpage email"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal__dialog-footer"></div>
            </div>
          </Modal>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
