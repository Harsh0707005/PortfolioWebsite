import React from 'react'
import TypingAnimation from "./TypingAnimation"

const Intro = () => {
  return (
    <section className='flex items-center min-h-[200px] h-auto bg-gray-800 text-white justify-evenly'>
      <div>
        <div>Hi, <br />I'm <span className='font-jersey text-[30px] text-yellow-500'>Harsh Master</span></div>
        <div className='font-jersey'>Android Developer, Web Developer</div>
      </div>
      <div>
        <img src={"/profile pic.png"} className='max-h-[300px] min-h-[150px]' alt="" />
      </div>

      <TypingAnimation />

    </section>
  )
}

export default Intro