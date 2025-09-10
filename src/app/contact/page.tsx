"use client"

import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_s6c79um',
    'template_rps4yn9',
    formData,
    'l5UQYHgy_WmHqxhvM'
  )
  .then(() => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    console.error('Error sending message:', error);
    alert('Failed to send message. Please try again later.');
  });
};

  return (
    <div>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="w-full py-3 mt-4 bg-blue-500 text-white rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
