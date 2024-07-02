import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="py-20 bg-yellow-500 text-black">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold mb-6 text-center">Contact Me</h2>
            <form class="max-w-lg mx-auto">
                <div class="mb-4">
                    <label for="name" class="block text-lg font-bold mb-2">Name</label>
                    <input type="text" id="name" class="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Your Name"/>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-lg font-bold mb-2">Email</label>
                    <input type="email" id="email" class="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Your Email"/>
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-lg font-bold mb-2">Message</label>
                    <textarea id="message" class="w-full px-4 py-2 rounded-lg border border-gray-300" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact