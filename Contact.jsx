
import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
