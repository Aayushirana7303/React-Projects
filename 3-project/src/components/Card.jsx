import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = () => {
  return (
    <>
      <div className="card">
      <div>
        <div className="top">
      <img src="https://tse3.mm.bing.net/th/id/OIP.RbDmmt0F982-5AzJmXvXtAHaHa?pid=Api&P=0&h=180" alt="Amazon" />
      <button>Save<Bookmark size={10} color='black'/> </button>
      </div>
      <div className="center">
       <h3>Amazon <span> 3 days ago </span></h3>
       <h2>Senior Frontend Developer</h2>
       <div className="tag">
        <h4>Part Time</h4>
        <h4>Senior level</h4>
       </div>
      </div>
      </div>
      <div className="bottom">
      <div>
        <h3>$120/hr</h3>
        <p>Mumbai, India</p>
      </div>
      <button>Apply Now</button>
      </div>
      </div>
    </>
  )
}

export default Card