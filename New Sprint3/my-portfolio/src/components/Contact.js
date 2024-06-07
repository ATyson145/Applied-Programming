import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:3000/api/contact', { name, email, message })
          .then((response) => {
            alert('Thank you, ' + name + '! Your message has been received.');
            setName('');
            setEmail('');
            setMessage('');
          })
          .catch((error) => {
            console.error('There was an error saving the contact information!', error);
          });
      };

    return (
        <div>
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
              Message:
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Contact;