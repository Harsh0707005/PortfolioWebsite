import React, { useState, useEffect } from 'react';
import Linkedin from '../assets/linkedin_icon.svg';
import Github from '../assets/github_icon.svg';
import X from '../assets/x_icon.svg';
import { Link } from 'react-router-dom';

const SocialBottomNavBar = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('');
    const [showNavBar, setShowNavBar] = useState(true);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (window.scrollY <= 0) setShowNavBar(true);
        else if (currentScrollY > lastScrollY) {
            setScrollDirection('down');
        } else if (currentScrollY < lastScrollY) {
            setScrollDirection('up');
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        if (window.scrollY === 0) {
            setShowNavBar(true);
        } else if (scrollDirection === "down") {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
    }, [scrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            {showNavBar && (
                <div className='fixed flex flex-row items-center justify-evenly gap-5 px-5 py-3.5 bottom-[20px] left-1/2 transform -translate-x-1/2 border border-[#2f2f2f] rounded-full m-auto bg-white mix-blend-difference'>
                    <a href="https://www.linkedin.com/in/harshmaster/" target='_blank' rel="noopener noreferrer" className='flex-1 p-1'>
                        <span id='linkedin_icon'>
                            <img src={Linkedin} className='w-[50px] hover:scale-[1.4] hover:-translate-y-5 transition-transform duration-300' alt="LinkedIn" />
                        </span>
                    </a>
                    <a href="https://github.com/Harsh0707005" target='_blank' rel="noopener noreferrer" className='flex-1 p-1'>
                        <span id="github_icon">
                            <img src={Github} className='w-[50px] hover:scale-[1.4] hover:-translate-y-5 transition-transform duration-300' alt="GitHub" />
                        </span>
                    </a>
                    <a href="https://x.com/Harsh07705" target='_blank' rel="noopener noreferrer" className='flex-1 p-1'>
                        <span id='x_icon'>
                            <img src={X} className='w-[35px] hover:scale-[1.4] hover:-translate-y-5 transition-transform duration-300' alt="X" />
                        </span>
                    </a>
                </div>
            )}
        </>
    );
}

export default SocialBottomNavBar;
