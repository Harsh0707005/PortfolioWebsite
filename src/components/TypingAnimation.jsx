import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TypingAnimation = ({ onAnimationComplete }) => {
  const [input, setInput] = useState('');
  const [fadeIn, setFadein] = useState(false);
  const [allAnimationComplete, setAllAnimationComplete] = useState(false)
  const [typingAnimationComplete, setTypingAnimationComplete] = useState(false);
  const [skills, setSkills] = useState(["Android Developer", "Web Developer"]);
  const [popId, setPopId] = useState('');
  const skillIndex = useRef(0);
  const index = useRef(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (fadeIn && typingAnimationComplete) {
      const pop = () => {
        const popDiv = document.getElementById(popId);
        popDiv.innerText = input;
        setTypingAnimationComplete(false);
        setInput('');
        onAnimationComplete({ popId });
      };
      pop();
    }
  }, [fadeIn, typingAnimationComplete]);

  useEffect(() => {
    if (allAnimationComplete) { 
      setTimeout(() => {
        document.getElementById("typeTextDiv").classList.remove('animate-fadeIn');
        document.getElementById("typeTextDiv").classList.add('animate-fadeOut');
      }, 1000)
    }}, [allAnimationComplete])

  useEffect(() => {
    if (skillIndex.current===(skills.length)){
      setAllAnimationComplete(true)
    }
    if (fadeIn && !typingAnimationComplete && index.current === 0 && skillIndex.current < skills.length) {
      setPopId(uuidv4());
      let typingText = skills[skillIndex.current];
      setTimeout(() => {
        const typingInterval = setInterval(() => {
          setInput(typingText.substring(0, index.current + 1));
          index.current++;
          if (index.current === typingText.length) {
            clearInterval(typingInterval);
            setTypingAnimationComplete(true);
            index.current = 0; // Reset index for the next word
            skillIndex.current++; // Move to the next word
          }
        }, 100);
      }, 1500)
      // return () => {
      //   clearInterval(typingInterval);
      // };
    }
  }, [fadeIn, typingAnimationComplete]);

  useEffect(() => {
    if (popId !== "") {
      var div = document.getElementById('popup'),
        clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
      clone.id = popId;
      document.getElementById("typeTextDiv").appendChild(clone);
    }
  }, [popId])

  return (
    <div id="typeTextDiv" className='flex flex-row w-[20%] min-w-[200px] relative border-2 rounded-lg px-2 py-1 animate-fadeIn' onAnimationEnd={() => {
      if(fadeIn){
        document.getElementById("typeTextDiv").style.visibility="hidden";
      }
      setFadein(true)
      }}>
      <input type="text" className='font-jersey w-full bg-transparent outline-none' onChange={handleInputChange} value={input} autoFocus />
      <span>↵&#9166;</span>
      <div id="popup" className='absolute font-jersey'></div>
    </div>
  );
};

export default TypingAnimation;
