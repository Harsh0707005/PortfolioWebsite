import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProjectsList = () => {
    const { projectFor } = useParams()

    const projects = {
        "html-css": [{ "title": "Simple Berkshire Hathaway revamp", "description": "A redesigned version of Berkshire Hathaway website while keeping the essence intact", "image": "/html-css/berkshire.png" }, { "title": "Netflix Clone", "description": "Clone of Netflix website using pure HTML CSS", "image": "/html-css/netflix.png" }, { "title": "Snapchat Clone", "description": "Clone of Snapchat website", "image": "/html-css/snapchat.png" }, { "title": "UltraEdit", "description": "Clone of UltraEdit website", "image": "/html-css/ultraedit.png" }], "fullstack-react": [{ "title": "Quakky Quizzy", "description": "A platform to create and take quizzes", "image": "/fullStack/quakkyquizzy.png" }, { "title": "TwitchIn (Under Development)", "description": "A combination of Linkedin and Twitch with real-time search feature (search for users on Linkedin)", "image": "/fullStack/twitchin.png" }], "android": [{ "title": "Attendance Buddy", "description": "An app to keep track of attendance for students with attendance overviews with intuitive pie charts", "image": "/android/attendancebuddy.png" }, {
            "title": "Campus Friends", "description": "Developed an app for E - learning and built Learning Management System for easy administration. Built skill for smooth integration of Android App with Firebase.", "image" : "/android/campusfriends.png"}]}

    return(
        <div className = 'p-[30px]' >
            <h1>Projects List</h1>
            <p>Project for: {projectFor}</p>

            <div className='flex flex-col gap-[20px]'>

            {projects[projectFor].map((project, index) => (
                <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 border-gray-500 border-[1px] shadow-md w-full flex-row p-[20px]">
                    <div
                        class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white bg-clip-border shrink-0 rounded-2xl border-black border-[1px]">
                        <img
                            src={project.image ? project.image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"}
                            alt="card-image" class="object-cover w-full h-full rounded-2xl" />
                    </div>
                    <div class="p-6">
                        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {project.title}
                        </h4>
                        <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {project.description}
                        </p>
                        <a href="#" class="inline-block"><button
                            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                            type="button">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg></button></a>
                    </div>
                </div>
            ))}
            </div>

        </div >
    )
}

export default ProjectsList