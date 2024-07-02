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

    // if (skillsDiv.lastChild) console.log(skillsDiv.lastChild.getBoundingClientRect())
    setInitialCoordinates({
      x: rect.x,
      y: rect.y
    });
    // console.log(skillsDiv.offsetWidth)
    setFinalCoordinates({
      x: skillsDiv.lastChild ? (skillsDiv.lastChild.getBoundingClientRect().x + skillsDiv.lastChild.offsetWidth + 5) : skillsDiv.getBoundingClientRect().x,
      y: skillsDiv.lastChild ? skillsDiv.lastChild.getBoundingClientRect().y : skillsDiv.getBoundingClientRect().y,
    });
    setPopId(popId);
  };

  useEffect(() => {
    if (initialCoordinates.x !== 0 && initialCoordinates.y !== 0) {
      const skillsDiv = document.getElementById('skills');
      // const dx = finalCoordinates.x - initialCoordinates.x + skillsDiv.offsetWidth + 5;
      let dx = finalCoordinates.x - initialCoordinates.x;
      let dy = finalCoordinates.y - initialCoordinates.y;
      const popup = document.getElementById(popId);
      if (!skillsDiv.lastChild) {
        dx = dx + (skillsDiv.offsetWidth / 2) - (popup.offsetWidth / 2);
      }
      popup.style.transition = 'transform 1.5s ease';
      popup.style.transform = `translate(${dx}px, ${dy}px)`;
      popup.addEventListener('transitionend', () => {
        popup.style.transform = `translate(${initialCoordinates.x}px, ${initialCoordinates.y}px)`;
        popup.style.display = 'none';
        const skillsDiv = document.getElementById('skills');
        let comma = (skillsDiv.offsetWidth === 0 || skillsDiv.innerHTML === '') ? '' : ', ';
        skillsDiv.innerHTML += `<span>${comma}${popup.innerHTML}</span>`;
        // skillsDiv.innerHTML = '<span>Added Span</span>'
        // skillsDiv.append(`${comma}${popup.innerHTML}`)
      });
    }
  }, [finalCoordinates]);

  return (
    <section className='flex flex-col justify-around items-center min-h-[400px] h-[100vh] bg-black text-white p-5'>
      <div className='flex items-center justify-evenly w-full mobile:flex-col-reverse mobile:gap-8'>
        <div className='flex flex-col items-center'>
          <div className='text-center text-[20px]'>
            Hi,
            <br />
            I'm &nbsp;
            <span className='font-jersey text-[40px] text-yellow-500'>
              Harsh Master
            </span>
          </div>
          <div id="skills" className='flex flex-row flex-wrap font-jersey w-full max-2xl:w-[400px] p-8 text-center justify-center text-[20px]'></div>
        </div>
        <img src={"/profile pic.png"} className='max-h-[250px] max-md:max-h-[170px]' alt="" />
      </div>
      <TypingAnimation onAnimationComplete={handleAnimationComplete} />
    </section>
  );
};

export default Intro;
