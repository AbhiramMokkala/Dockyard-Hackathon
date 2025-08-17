import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import JotformEmbed from "./jotformembed";

function HomePage() {
  return (
    
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1>Hackers Week</h1>
        <div>
          <Link to="/home" ClassName="hover-action">Home</Link>
          <Link to="/about" ClassName="hover-action">For StartUps</Link>
          <Link to="/programs" ClassName="hover-action">Events & Media</Link>
          <Link to="/contact" ClassName="hover-action">Ecosystem</Link>
          <Link to="/login" ClassName="hover-action">Contact</Link>
        </div>
      </nav>
      <div className="chatbot">
      

      {/* Chatbot section */}
      <div className="chatbot-section">
        <div className="chatbot-component">
          <JotformEmbed />
        </div>
      </div>
    </div>
      

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Hackers Week 🚀</h2>
        <p>Join our coding challenges, workshops, and networking sessions!</p>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program-cards">
          <div className="card">
            <h3>Innovation Grants</h3>
            <p>Support for innovative startup ideas.</p>
          </div>
          <div className="card">
            <h3>Mentorship</h3>
            <p>Guidance from experienced industry leaders.</p>
          </div>
          <div className="card">
            <h3>Networking</h3>
            <p>Connect with investors, mentors, and peers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 StartupTN Clone | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
