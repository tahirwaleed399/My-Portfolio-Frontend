import React from 'react'
import { useSelector } from 'react-redux';
import User from '../../../Interfaces/User';
import Heading from '../../Shared/Heading/Heading';
import {motion} from 'framer-motion';
import LazyLoad from 'react-lazyload';
const About = () => { 
  const {user} : {user : User} = useSelector((state:any)=>state.userState);

  return (
    <motion.section id='about'  initial={{opacity : 0 , y:'90px'}} whileInView={{opacity : 1 , y:'0'}}>
   <Heading heading ='About' sectionNo={1} id='about'></Heading>

   <main>
  {
    user &&   <article dangerouslySetInnerHTML={{__html :user.about}}>

    </article>
  }

    <div className="aboutImage my-16">
       <div className="imgWrapper">
{
    user &&       <LazyLoad once> <img src={user.aboutImage.url} alt="MyImage" /> </LazyLoad>
}
        <div className="border"></div>
       </div>
    </div>
   </main>
    </motion.section>
  )
}

export default About