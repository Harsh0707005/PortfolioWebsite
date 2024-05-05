import React, { useState, useEffect, useRef } from 'react'

const TypingAnimation = () => {

  const [input, setInput] = useState("")
  const [animationComplete, setAnimationComplete] = useState(false)
  const index = useRef(0)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (animationComplete) {
      const typingText = "Android Developer";
      const typingInterval = setInterval(() => {
        setInput(typingText.substring(0, index.current + 1));
        index.current++;
        if (index.current === typingText.length) clearInterval(typingInterval);
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [animationComplete])

  return (
    <div className='border-2 rounded-lg px-2 py-1 animate-fade' onAnimationEnd={() => { setAnimationComplete(true)}}>
      <input type="text" className='bg-transparent outline-none' onChange={handleInputChange} value={input} autoFocus />
      ↵ &#9166;
    </div>
  )
}

export default TypingAnimation