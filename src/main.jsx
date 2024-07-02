import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider, useParams } from 'react-router-dom'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectsList from './components/ProjectsList.jsx'
import PageTitle from './components/PageTitle.js'

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <PageTitle title="Home" />
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
            <PageTitle title="Projects" />
            <ProjectsList />
        </>
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />

    <RouterProvider router={router} />
)
