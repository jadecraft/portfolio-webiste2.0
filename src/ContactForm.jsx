import React, { useState } from 'react';
import './App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const response = await fetch('https://formspree.io/f/xbloevdn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
  <h2>Contact Me</h2>
  <input
    type="text"
    name="name"
    placeholder="Name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
  />
  <textarea
    name="message"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
    required
    rows="5"
  ></textarea>
  <button type="submit">Send</button>
  <p className="status">{status}</p>
</form>

  );
};

export default ContactForm;
