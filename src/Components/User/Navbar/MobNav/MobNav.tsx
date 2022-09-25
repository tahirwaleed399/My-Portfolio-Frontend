import React from "react";
import { useSelector } from "react-redux";
const MobNav = ({navOpen , setNavOpen}:any) => {

const {user} = useSelector((state:any)=> state.userState);

  return (
  <>
    <nav id="mobNav" style={{
        transform : !navOpen ?'translateX(100%)' :'translateX(0)',
    }}>
      <ul className="links">
      <li onClick={()=>setNavOpen(false)}>  <a href="#home"> Home</a></li>
                <li onClick={()=>setNavOpen(false)}> <a href="#about"> About</a></li>
                <li onClick={()=>setNavOpen(false)}> <a href="#timeline"> Timeline</a></li>
                <li onClick={()=>setNavOpen(false)}> <a href="#skills"> Skills</a></li>
                <li onClick={()=>setNavOpen(false)}> <a href="#projects"> Projects</a></li>
                <li onClick={()=>setNavOpen(false)}> <a href="#contact"> Contact</a></li>
                {
                user && 
                <li>
                <a target={'_blank'} href={user.resume}><button className="btn-sm btn-outlined">Resume</button></a>
              </li>
               }
      </ul>
    </nav>

    <div onClick={()=>setNavOpen(false)} className="blurBg blur h-screen w-screen fixed top-0 left-0" style={{
        display : navOpen ? 'block' : 'none'
    }}></div>
  
  </>
  );
};

export default MobNav;
