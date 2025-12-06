import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './pages/home'
//import { ProjectPage } from './pages/project-page'
import { Footer } from './components/footer'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<ProjectPage />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
