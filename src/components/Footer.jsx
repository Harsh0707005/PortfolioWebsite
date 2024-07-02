import React from 'react'

const Footer = () => {
  return (
    <footer class="py-6 bg-black text-white text-center">
        <p>&copy; 2024 Harsh Master. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
            <a href="#" class="hover:text-gray-400"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fab fa-github"></i></a>
        </div>
    </footer>
  )
}

export default Footer