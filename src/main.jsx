import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectsList from './components/ProjectsList.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    },
    {
        path: "/projects/:projectFor",
        element: <>
            <ProjectsList />
        </>
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />

    <RouterProvider router={router} />
)
