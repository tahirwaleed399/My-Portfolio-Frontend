import React from 'react'
import LazyLoad from 'react-lazyload'

const Pitch = () => {
  return (
  <section id="pitch">
    <main>
        <div className="content">
            <h1>Do you have a new project in mind?</h1>
            <p>Great projects start with excellent communication! let's have a FREE consultation call to discuss the project.</p>
     <a href="#contact">       <button className="btn btn-sm btn-contained ">Contact Now</button></a>
        </div>
        <div className="image">
        <LazyLoad once>
     <img src={'/images/project.webp'} alt="myimage" />

     </LazyLoad>

        </div>
    </main>
  </section>
  )
}

export default Pitch