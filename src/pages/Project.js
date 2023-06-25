import { useParams } from 'react-router-dom'
import { projects } from './../helpers/projectsList'
import { lazy, Suspense } from 'react'

const Project = () => {
  const { id } = useParams()
  let project
  projects.forEach((e) => {
    if (e.pathtitle === id) project = e
  })

  const MyComponent = lazy(() =>
    import(`../components/project/cases/${project.pathtitle}`)
  )

  return (
    <main className="section__project">
      <Suspense fallback={<div>Загружаю кейс...</div>}>
        <MyComponent />
      </Suspense>
    </main>
  )
}

export default Project
