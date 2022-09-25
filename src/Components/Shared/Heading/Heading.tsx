import React, { useEffect, useRef } from 'react'
const Heading = ({heading , id ,sectionNo } : {heading : string ; id : string ;sectionNo:number}) => {
let sectionHeading = useRef<any>();
useEffect(()=>{
let observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        sectionHeading.current.classList.add('animate')
    }else{
        sectionHeading.current.classList.remove('animate')

    } 
} )
    observer.observe(sectionHeading.current )
},[sectionHeading])

  return (
    <div id={id} ref={sectionHeading} className="sectionHeading">
    <p className="primaryText">{sectionNo} .</p>
    <h1>{heading}</h1>
</div>

  )
}

export default Heading