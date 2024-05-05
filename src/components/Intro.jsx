import React, { useEffect, useState } from 'react'
import TypingAnimation from "./TypingAnimation"

const Intro = () => {
  const [initialCoordinates, setInitialCoordinates] = useState({ x: 0, y: 0 })
  const [finalCoordinates, setFinalCoordinates] = useState({ x: 0, y: 0 })
  const [popId, setPopId] = useState("")


  useEffect(() => {
    if (initialCoordinates.x !== 0 && initialCoordinates.y !== 0) {

      const skillsDiv = document.getElementById("skills");
      let rect = skillsDiv.getBoundingClientRect();

      setFinalCoordinates({
        x: rect.x,
        y: rect.y
      })

      console.log("Final Coordinates", finalCoordinates)
    }


  }, [initialCoordinates])

  useEffect(() => {
    if (finalCoordinates.x !== 0 && finalCoordinates.y !== 0) {
      const dx = finalCoordinates.x - initialCoordinates.x;
      const dy = finalCoordinates.y - initialCoordinates.y;


      const popup = document.getElementById(popId);
      popup.style.transition = 'transform 1.5s ease'; // Slow and smooth transition
      popup.style.transform = `translate(${dx}px, ${dy}px)`;
      popup.addEventListener("transitionend", () => {
        popup.style.display = "none"
        document.getElementById("skills").innerHTML += popup.innerHTML
      })
    }
  }, [finalCoordinates])

  const handleAnimationComplete = ({ newCoordinates, popId }) => {
    // Receive coordinates from TypingAnimation
    console.log("Intro", popId, "tempcoordinates", newCoordinates)
    setInitialCoordinates(newCoordinates);
    setPopId(popId);

    // Now you can do whatever you want with the coordinates
    console.log("Initial coordinates:", newCoordinates);
  };


  return (
    <section className='flex flex-col justify-around items-center min-h-[400px] h-auto bg-black text-white'>
      <div className='flex items-center justify-evenly w-full max-md:flex-col-reverse max-md:gap-8'>

        <div>
          <div>Hi, <br />I'm <span className='font-jersey text-[30px] text-yellow-500'>Harsh Master</span></div>
          <div id="skills" className='font-jersey'></div>
        </div>
        <img src={"/profile pic.png"} className='h-[250px] w-[250px] max-md:h-[30%] max-md:w-[30%]' alt="" />
      </div>

      <TypingAnimation onAnimationComplete={handleAnimationComplete} />

    </section>
  )
}

export default Intro