import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import LazyLoad from 'react-lazyload'

const Testimonial = ({data} : any) => {
  return (
    <div className="testimonial">
    <div className="info">
     <div className="profile">
     <LazyLoad once>
     <img src={data.image.url} alt="myimage" />

     </LazyLoad>
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