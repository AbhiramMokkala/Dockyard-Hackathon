import React from "react";

function ContactPage() {
  return (
    <div className="contact">
      <h1 className="contacts">Contact Us</h1>
      <p className="info">
        Have questions? Reach out to us anytime.
      </p>

      <form className="form">
        <input
          type="text"
          placeholder="Your Name"
          className="name"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mail"
        />
        <textarea
          placeholder="Your Message"
          className="msg"
          rows="4"
        ></textarea>
        <button className="send-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
