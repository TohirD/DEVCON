import React from 'react'
import '../src/App.css'
import ArticlesPageHeader from './pages/ArticlesPage/components/ArticlesPageHeader/ArticlesPageHeader'
import ArticlesPageMain from './pages/ArticlesPage/components/ArticlesPageMain/ArticlesPageMain'
import ArticlesPageCards from './pages/ArticlesPage/components/ArticlesPageCards/ArticlesPageCards'

const App = () => {
  return (
    <>
    <ArticlesPageHeader/>
    <ArticlesPageMain/>
    <ArticlesPageCards/>
    <div className="projects-gallery">
      <h2>Our projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <img src='project.png' alt="Project 1" className="project-image" />
          <div className="project-description">
            <p className="project-title">SAMSUNG</p>
            <p>An Application for Samsung Smart TVs</p>
          </div>
        </div>
        <div className="project-card">
          <img src='project.png' alt="Project 1" className="project-image" />
          <div className="project-description">
            <p className="project-title">SAMSUNG</p>
            <p>An Application for Samsung Smart TVs</p>
          </div>
        </div>
        <div className="project-card">
          <img src='project.png' alt="Project 1" className="project-image" />
          <div className="project-description">
            <p className="project-title">SAMSUNG</p>
            <p>An Application for Samsung Smart TVs</p>
          </div>
        </div>
        <div className="project-card">
          <img src='project.png' alt="Project 1" className="project-image" />
          <div className="project-description">
            <p className="project-title">SAMSUNG</p>
            <p>An Application for Samsung Smart TVs</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
