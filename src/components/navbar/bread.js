import { NavLink, useLocation } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { projects } from '../../helpers/projectsList'

const Breadcrumbs = () => {
  const location = useLocation()
  let y
  useBreadcrumbs().forEach((e) => {
    if (e.key === location.pathname) {
      projects.forEach((i) => {
        console.log(i.pathtitle, e.breadcrumb.props.children)
        if (
          i.pathtitle.toLowerCase() ===
          e.breadcrumb.props.children.toLowerCase()
        ) {
          y = i.title
          console.log(y)
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
      <nav>
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}/
          </NavLink>
        ))}
      </nav>
    )
  }
}

export default Breadcrumbs
