import { NavLink, useLocation } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { projects } from '../../helpers/projectsList'

const Breadcrumbs = () => {
  const location = useLocation()
  let y
  useBreadcrumbs().forEach((e) => {
    if (e.key === location.pathname) {
      projects.forEach((i) => {
        if (
          i.pathtitle.toLowerCase() ===
          e.breadcrumb.props.children.toLowerCase()
        ) {
          y = i.title
        }
      })
    }
  })

  const routes = [
    { path: '/', breadcrumb: 'Главная' },
    { path: '/landing', breadcrumb: 'Лендинг' },
    { path: '/landing/:id', breadcrumb: `${y}` },
    { path: '/contacts', breadcrumb: 'Контакты' },
  ]

  const breadcrumbs = useBreadcrumbs(routes)

  if (location.pathname === '/') {
    return
  } else {
    return (
      <nav className="bread-nav">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <div className="breadcrumb-wrapper" key={match.pathname}>
            <NavLink
              to={match.pathname}
              className={
                location.pathname === match.pathname
                  ? 'breadcrumb-active'
                  : 'breadcrumb-not-active'
              }
            >
              <span>{breadcrumb} </span>
            </NavLink>
            <span className="bread-arrow">
              {location.pathname === match.pathname ? '' : '  →  '}
            </span>
          </div>
        ))}
      </nav>
    )
  }
}

export default Breadcrumbs
