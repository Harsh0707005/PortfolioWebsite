import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TypingAnimation = ({ onAnimationComplete }) => {

  const [input, setInput] = useState("")
  const [fadeIn, setFadein] = useState(false)
  const [typingAnimationComplete, setTypingAnimationComplete] = useState(false)
  const [initialCoordinates, setinitialCoordinates] = useState({ x: 0, y: 0 });
  const [skills, setSkills] = useState(["Android Developer"])
  const [popId, setPopId] = useState("")
  const skillIndex = useRef(0)
  const index = useRef(0)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  useEffect(() => {
    if (fadeIn && typingAnimationComplete) {
      const pop = () => {
        const popDiv = document.getElementById(popId);
        popDiv.innerText = input;
        let rect = popDiv.getBoundingClientRect();

        setinitialCoordinates({
          x: rect.x,
          y: rect.y
        })

        setTypingAnimationComplete(false)
        setInput("")
        index.current=0;
        skillIndex.current++;
      };
      pop();
    }
  }, [typingAnimationComplete]);

  useEffect(()=> {if (popId!=="") {
    onAnimationComplete({ newCoordinates: initialCoordinates, popId: popId })
  }}, [initialCoordinates])

  useEffect(() => {
    // console.log(skills.at(skillIndex), skillIndex.current)
    if (fadeIn && !typingAnimationComplete && index.current==0 && skillIndex.current<skills.length) {
      // const typingText = "Android Developer";
      setPopId(uuidv4())
      let typingText = skills.at(skillIndex.current);
      const typingInterval = setInterval(() => {
        setInput(typingText.substring(0, index.current + 1));
        index.current++;
        if (index.current === typingText.length) {
          clearInterval(typingInterval)
          setTypingAnimationComplete(true)
        };
      }, 100);
      return () => {
        clearInterval(typingInterval, typingAnimationComplete)
      };
    }
  }, [fadeIn, skillIndex.current])

  // useEffect(()=>{
  //   console.log(popId);
  // }, [popId])

  return (
    <div id='hi2' className='flex flex-row w-[20%] min-w-[200px] relative border-2 rounded-lg px-2 py-1 animate-fade' onAnimationEnd={() => { setFadein(true)}}>
      <input type="text" className='w-full bg-transparent outline-none' onChange={handleInputChange} value={input} autoFocus/>
      <span>↵&#9166;</span>
      <div id={popId} className='absolute'></div>
      {/* {console.log(popId)} */}
    </div>
  )
}

export default TypingAnimation

// const movingDiv = document.getElementById('hi2');
// const stati = document.getElementById('hi');

// // Initial and final positions
// const initialPos = { x: movingDiv.getBoundingClientRect().x, y: hi2.getBoundingClientRect().y }; // Assuming initial position (150px, 100px) relative to container1
// const finalPos = { x: stati.getBoundingClientRect().x, y: stati.getBoundingClientRect().y+40 }; // Assuming final position (150px, 100px) relative to container2

// // Calculate translation values
// const dx = finalPos.x - initialPos.x;
// const dy = finalPos.y - initialPos.y;

// // Apply transformation to move the div to the final position
// movingDiv.style.transform = `translate(${dx}px, ${dy}px)`;