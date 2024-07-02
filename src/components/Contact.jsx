import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-yellow-500 text-black">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Your Name"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Your Email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
                    <textarea id="message" className="w-full px-4 py-2 rounded-lg border border-gray-300" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact