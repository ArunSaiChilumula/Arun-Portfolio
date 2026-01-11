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
    <div style={{ position: 'relative' }}>
      <button className='scrollToTopBtn' onClick={scrollToTop}>
        ↑
      </button>
      <div className='FooterContainer'>
        <p>© 2025 ArunSai. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
