import React from 'react'
import '../ArticlesPageCards/ArticlePageCards.css'

const ArticlesPageCards = () => {
  return (
    <div className="expertise-section">
        <h2>We are experts in these software types</h2>
      <div className="cards-container">
        <div className="cards">Web apps</div>
        <div className="cards">Mobile development</div>
        <div className="cards">Integration</div>
        <div className="cards">Back-end</div>
        <div className="cards">UX/UI</div>
        <div className="cards">Portals</div>
      </div>
    </div>
  )
}

export default ArticlesPageCards
