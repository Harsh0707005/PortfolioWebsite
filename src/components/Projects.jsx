import React from 'react'
import { NavLink } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='bg-black text-white flex flex-col items-center p-[60px] gap-[70px]'>
            <p className='font-bold text-5xl'>Projects</p>
            <div className='grid grid-cols-3 mobile:grid-cols-1 gap-[30px]'>

                {/* HTML CSS PROJECTS */}
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <NavLink to="/projects/html-css">
                        <img className="rounded-t-lg max-w-[100%] w-[100%] max-h-[225px] h-auto object-cover" src="htmlCss.webp" alt="" />
                    </NavLink>
                    <div className="p-5 flex flex-col justify-between h-[calc(100%-225px)]">
                        <div>

                            <NavLink to="/projects/html-css">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Pure HTML CSS Projects
                                </h5>
                            </NavLink>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the projects I have made purely using HTML & CSS (without using any libraries).
                            </p>
                        </div>
                        <NavLink to="/projects/html-css" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit">
                            Explore These...
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </NavLink>
                    </div>
                </div>

                {/* REACT PROJECTS */}

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <NavLink to="/projects/fullstack-react">
                        <img className="rounded-t-lg max-w-[100%] w-[100%] max-h-[225px] h-auto object-cover" src="reactLogo.jpeg" alt="" />
                    </NavLink>
                    <div className="p-5 flex flex-col justify-between h-[calc(100%-225px)]">
                        <div>
                            <NavLink to="/projects/fullstack-react">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    React Projects
                                </h5>
                            </NavLink>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Projects made using React.
                            </p>
                        </div>
                        <NavLink to="/projects/fullstack-react" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit">
                            Explore These...
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </NavLink>
                    </div>
                </div>

                {/* ANDROID PROJECTS */}

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <NavLink to="/projects/android">
                        <img className="rounded-t-lg max-w-[100%] w-[100%] max-h-[225px] h-auto object-cover" src="androidLogo.jpeg" alt="" />
                    </NavLink>
                    <div className="p-5 flex flex-col justify-between h-[calc(100%-225px)]">
                        <div>
                            <NavLink to="/projects/android">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Android Projects
                                </h5>
                            </NavLink>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here resides the Android Projects developed by me.
                            </p>
                        </div>
                        <NavLink to="/projects/android" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit">
                            Explore These...
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects