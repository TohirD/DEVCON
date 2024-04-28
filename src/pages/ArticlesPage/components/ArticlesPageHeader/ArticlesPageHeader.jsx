import React from 'react'
import '../ArticlesPageHeader/ArticlesPageHeader.css'

const ArticlesPageHeader = () => {
  return (
    <header>
      <img className='logo' src="logotype.png" alt="logo" />
            <nav>
                <ul>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact us</li>
                </ul>
            </nav>
    </header>
  )
}

export default ArticlesPageHeader
