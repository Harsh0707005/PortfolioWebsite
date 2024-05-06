import React, { useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';

const Intro = () => {
  const [initialCoordinates, setInitialCoordinates] = useState({ x: 0, y: 0 });
  const [finalCoordinates, setFinalCoordinates] = useState({ x: 0, y: 0 });
  const [popId, setPopId] = useState('');

  const handleAnimationComplete = ({ popId }) => {
    const popDiv = document.getElementById(popId);
    const skillsDiv = document.getElementById('skills');
    const rect = popDiv.getBoundingClientRect();
    setInitialCoordinates({
      x: rect.x,
      y: rect.y
    });
    // console.log(skillsDiv.offsetWidth)
    setFinalCoordinates({
      x: skillsDiv.getBoundingClientRect().x,
      y: skillsDiv.getBoundingClientRect().y
    });
    setPopId(popId);
  };

  useEffect(() => {
    if (initialCoordinates.x !== 0 && initialCoordinates.y !== 0) {
      const skillsDiv = document.getElementById('skills');
      const dx = finalCoordinates.x - initialCoordinates.x + skillsDiv.offsetWidth + 5;
      const dy = finalCoordinates.y - initialCoordinates.y;
      const popup = document.getElementById(popId);
      popup.style.transition = 'transform 1.5s ease';
      popup.style.transform = `translate(${dx}px, ${dy}px)`;
      popup.addEventListener('transitionend', () => {
        popup.style.transform = `translate(${initialCoordinates.x}px, ${initialCoordinates.y}px)`;
        popup.style.display = 'none';
        const skillsDiv = document.getElementById('skills');
        let comma = (skillsDiv.offsetWidth === 0 || skillsDiv.innerHTML === '') ? '' : ', ';
        skillsDiv.innerHTML += `${comma}${popup.innerHTML}`;
      });
    }
  }, [finalCoordinates]);

  return (
    <section className='flex flex-col justify-around items-center min-h-[400px] h-auto bg-black text-white'>
      <div className='flex items-center justify-evenly w-full max-md:flex-col-reverse max-md:gap-8'>
        <div className='flex flex-col'>
          <div className='text-center'>
            Hi,
            <br />
            I'm &nbsp;
            <span className='font-jersey text-[30px] text-yellow-500'>
              Harsh Master
            </span>
          </div>
          <div id="skills" className='flex flex-row flex-wrap font-jersey w-fit text-center'></div>
        </div>
        <img src={"/profile pic.png"} className='h-[250px] w-[250px] max-md:h-[30%] max-md:w-[30%]' alt="" />
      </div>
      <TypingAnimation onAnimationComplete={handleAnimationComplete} />
    </section>
  );
};

export default Intro;
