import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import WorkPages from './pages/Workpage.jsx'
import Project from './pages/Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='mywork' element={<WorkPages />} />
          <Route
            path='projects/:id'
            element={<Project />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)