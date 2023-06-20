import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/normalize.css'
import './css/main.css'
import './css/ElemModal.css'
import './style.sass'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contacts from './pages/Contacts'

import ScrollToTop from './utils/scrollToTop'

import Breadcrumbs from './components/navbar/bread'

function App() {
  return (
    <div className="App main-container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Projects />} />
          <Route path="/landing/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
