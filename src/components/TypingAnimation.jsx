import React, { useState, useEffect, useRef } from 'react'

const TypingAnimation = () => {

  const [input, setInput] = useState("")
  const [fadeIn, setFadein] = useState(false)
  const [typingAnimationComplete, setTypingAnimationComplete] = useState(false)
  const index = useRef(0)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  useEffect(() => {
    if (fadeIn && typingAnimationComplete) {
      const pop = () => {
        document.getElementById('popup').innerText = input;
        setTypingAnimationComplete(false)
        setInput("")
      };
      pop();
    }
  }, [typingAnimationComplete]);

  useEffect(() => {
    if (fadeIn) {
      const typingText = "Android Developer";
      const typingInterval = setInterval(() => {
        setInput(typingText.substring(0, index.current + 1));
        index.current++;
        if (index.current === typingText.length) {
          clearInterval(typingInterval)
          setTypingAnimationComplete(true)
        };
      }, 100);
      return () => {
        clearInterval(typingInterval)
      };
    }
  }, [fadeIn])

  return (
    <div id='hi2' className='flex flex-row w-[20%] min-w-[200px] relative border-2 rounded-lg px-2 py-1 animate-fade' onAnimationEnd={() => { setFadein(true)}}>
      <input type="text" className='w-full bg-transparent outline-none' onChange={handleInputChange} value={input} autoFocus />
      <span>↵&#9166;</span>
      <div id='popup' className='absolute'></div>
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