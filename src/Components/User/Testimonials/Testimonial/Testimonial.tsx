import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Testimonial = ({data} : any) => {
  return (
    <div className="testimonial">
    <div className="info">
     <div className="profile">
     <img src={data.image.url} alt="myimage" />
     </div>
     <span className="name">'' {data.name} ''</span>
    </div>
    <div className="message">
        <div className="comma">

    <FaQuoteLeft />
        </div>
       <p> {data.message}</p>

       <div className="comma flex justify-end">

<FaQuoteRight />
</div>
    </div>
 </div>
  )
}

export default Testimonial