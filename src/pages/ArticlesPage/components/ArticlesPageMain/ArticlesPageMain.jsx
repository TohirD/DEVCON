import React from 'react'
import Typical from 'react-typical'
import '../ArticlesPageMain/ArticlesPageMain.css'

const ArticlesPageMain = () => {
  return (
    <main>
        <h1>dev consulting</h1>z
        <p>Your trusted partner for</p>
        <p className='animation'>
          <Typical
          loop={Infinity}
          wrapper='a'
          steps={[
            'software development solutions.', 4000,
            'Innovative software business.', 5000,
            'propelling your business forward.', 4000
          ]}
          />
          {/* <br /> software development solutions. */}
        </p>
        <div className="info-cards">
            <div className="card">
                <h2>5 years</h2>
                <p>of experience</p>
            </div>
            <div className="card">
                <h2>20+</h2>
                <p>projects</p>
            </div>
            <div className="card">
                <h2>10+</h2>
                <p>support partnerships</p>
            </div>
        </div>
        </main>
  )
}

export default ArticlesPageMain
