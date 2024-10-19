import React, { useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';
import SocialBottomNavBar from './SocialBottomNavBar';

const Intro = () => {
    const [initialCoordinates, setInitialCoordinates] = useState({ x: 0, y: 0 });
    const [finalCoordinates, setFinalCoordinates] = useState({ x: 0, y: 0 });
    const [popId, setPopId] = useState('');
    const [skills, setSkills] = useState(["Android Developer", "Web Developer", "Python", "Javascript", "Machine Learning"])
    const [currentSkillIndexAnimation, setCurrentSkillIndexAnimation] = useState(null);

    const handleAnimationComplete = ({ popId, skillIndex }) => {
        setCurrentSkillIndexAnimation(skillIndex.current-1);
        const popDiv = document.getElementById(popId);
        const skillsDiv = document.getElementById('skills');
        const rect = popDiv.getBoundingClientRect();

        setInitialCoordinates({
            x: rect.x,
            y: rect.y
        });

        setFinalCoordinates({
            x: skillsDiv.children[skillIndex.current-1].getBoundingClientRect().x,
            y: skillsDiv.children[skillIndex.current-1].getBoundingClientRect().y
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

                skillsDiv.children[currentSkillIndexAnimation].style.visibility = "visible";
            });
        }
    }, [finalCoordinates]);

    return (
        <section className='flex flex-col justify-around items-center min-h-[400px] h-[100vh] bg-black text-white p-5'>
            <div className='flex flex-row items-center justify-evenly w-full mobile:flex-col-reverse mobile:gap-8'>
                <div className='flex flex-col items-center'>
                    <div className='text-center text-[20px]'>
                        Hi,
                        <br />
                        I'm &nbsp;
                        <span className='font-jersey text-[40px] text-yellow-500'>
                            Harsh Master
                        </span>
                    </div>
                    <div id="skills" className='flex flex-row flex-wrap font-jersey w-[80%] max-2xl:w-[400px] p-8 text-center justify-center text-[20px]'>
                        {skills.map((item, index) => (
                            <div key={index + item} className='invisible'>
                                <span>{item}</span>
                                {index != (skills.length - 1) && <span>,&nbsp;</span>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <img src={"/profile pic.png"} className='max-h-[250px] max-md:max-h-[170px]' alt="" />
                </div>
            </div>
            <TypingAnimation onAnimationComplete={handleAnimationComplete} typeSkills={skills} />
        </section>
    );
};

export default Intro;
