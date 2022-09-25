import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MobNav from "./MobNav/MobNav";
const Navbar = () => {
  let [navOpen , setNavOpen ] = React.useState<boolean>(false);

const {user} = useSelector((state:any)=> state.userState);

  return (
    <>
      <nav id='desktopNav'>
        <Container maxWidth="xl">
          <div className="navbar ">
            <div className="navbar__logo">
              <img src="/Images/logo.png" alt="Waleed Tahirs Logo" />
            </div>

            <div className="navbar__links">
              <ul className='links'>
                <li> <a href="#home"> Home</a></li>
                <li> <a href="#about"> About</a></li>
                <li> <a href="#timeline"> Timeline</a></li>
                <li> <a href="#skills"> Skills</a></li>
                <li> <a href="#projects"> Projects</a></li>
                <li> <a href="#contact"> Contact</a></li>
               {
                user && 
                <li>
                <a target={'_blank'} href={user.resume}><button className="btn-sm btn-outlined">Resume</button></a>
              </li>
               }
              </ul>
            </div>
          </div>
        </Container>
      </nav>

      <MobNav setNavOpen={setNavOpen} navOpen={navOpen}></MobNav>
      <div onClick={()=>setNavOpen(!navOpen)}  className={navOpen ? "navbar__hamburger navOpen" :"navbar__hamburger" }>
              <div className="ham-lines">
              <span className="ham-line1"></span>
              <span className="ham-line2"></span>
              <span className="ham-line3"></span>
              </div>
            </div>
    </>
  );
};

export default Navbar;
