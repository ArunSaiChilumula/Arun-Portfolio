import React from 'react'
import '../CSS/Footer.css'
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <button
        className="scrollToTopBtn"
        onClick={scrollToTop}
        title="Go to top"
        aria-label="Go to top"
      >
        ↑
      </button>
      <div className="FooterContainer">
        <p>© 2026 ArunSai. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
