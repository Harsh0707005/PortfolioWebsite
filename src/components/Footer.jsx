import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 bg-black text-white text-center">
        <p>&copy; 2024 Harsh Master. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-github"></i></a>
        </div>
    </footer>
  )
}

export default Footer