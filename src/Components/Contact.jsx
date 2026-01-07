import React from 'react'
import '../CSS/Contact.css'

const Contact = () => {
  return (
    <div id="contact" className="ContactContainer">
      <h1>Contact Me</h1>

      <p className="ContactSubtitle">
        I’m open to frontend opportunities, freelance work, or collaboration. Feel free to reach out
        using the contact details below!
      </p>

      {/* Highlighted email card */}
      <div className="ContactEmailCard">
        <span>📧 Email me at</span>
        <a href="mailto:arunchilumula007@gmail.com">arunchilumula007@gmail.com</a>
      </div>



      {/* Social links */}
      <div className="SocialLinks">
        <a href="mailto:arunchilumula007@gmail.com">
          <img src="../assets/mail.png" alt="Email" />
        </a>

        <a href="https://github.com/ArunSaiChilumula" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github2.png" alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/arun-sai-chilumula-a0415b213/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Contact
