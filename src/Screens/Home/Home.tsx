
import React, { Suspense } from "react";
import About from "../../Components/User/About/About";
import Projects from "../../Components/User/Projects/Projects";
import Skills from "../../Components/User/Skills/Skills";
import Typed from 'react-typed';
import TimelineComponent from "../../Components/User/Timeline/Timeline";
import Contact from "../../Components/User/Contact/Contact";
import { useSelector } from "react-redux";
import User from "../../Interfaces/User";
import Testimonials from "../../Components/User/Testimonials/Testimonials";
import Pitch from "../../Components/User/Pitch/Pitch";
import Marketplaces from "../../Components/User/Marketplaces/Marketplaces";
import LazyLoad from 'react-lazyload';
const Home = () => {

  const {user} : {user : User} = useSelector((state:any)=>state.userState);
  
  return (
    <>
    <div id='home'>
      {/* <Suspense fallback={null}>
        <Canvas id="planetCanvas">
          <Planet></Planet>
        </Canvas>
      </Suspense> */}
{/* 120 k e 
80 j */}
<Suspense>
<div className="video">

<video  autoPlay muted loop>
  <source src="/Images/space.mp4" type="video/mp4" />
</video>

</div>
</Suspense>
      <div className="shadow"></div>

      <header className="portfolio__intro ">
        <div className="portfolio__intro__wrapper">
          <div className="heading">
            <p className="primaryText">Hi , my name is</p>
            {
              user &&  <h1 className="mainHeading">{user.name}</h1>
            }
           
      {
        user &&       <h1 className="lightHeading"> 
        {/* @ts-ignore */}
            <Typed
            strings={user.tagLines}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop >
                <input type="text"/>
            </Typed></h1>
      }
            
          </div>

        {
          user &&   <div className="littleAbout ">
          <p className="text inline">
           
           {user.homeAbout}
          </p>
        </div>
        }
        <a href="#contact">  <button className="btn btn-outlined">
Contact Now!
        </button></a>
        </div>

        <div className="heroImage">
         {
          user &&  <LazyLoad once> <img src={user.mainImage.url} alt="MyImage" /> </LazyLoad>
         }
        </div>
      </header>
 

      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <TimelineComponent></TimelineComponent>
      <Marketplaces/>
      <Testimonials></Testimonials>
      <Pitch></Pitch>

<Contact></Contact>
    </div>
    </>

  );
};
export default Home;
