import React from 'react'
import TypingAnimation from "./TypingAnimation"

const Intro = () => {
  return (
    <section className='flex flex-col justify-around items-center min-h-[400px] h-auto bg-black text-white'>
      <div className='flex items-center justify-evenly w-full'>

        <div>
          <div>Hi, <br />I'm <span className='font-jersey text-[30px] text-yellow-500'>Harsh Master</span></div>
          <div id="skills" className='font-jersey'>Android Developer, Web Developer</div>
        </div>
        <div>
          <img src={"/profile pic.png"} className='max-h-[300px] min-h-[150px]' alt="" />
        </div>
      </div>

      <TypingAnimation />

    </section>
  )
}

export default Intro