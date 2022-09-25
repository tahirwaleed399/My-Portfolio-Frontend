import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../../Redux/userSlice";
const links = [
  {
    name: "Main Information",
    to: "",
  },
  {
    name: "Change Images",
    to: "changeImages",
  },
  {
    name: "Timelines",
    to: "timelines",
  },
  {
    name: "Projects",
    to: "projects",
  }, 
   {
    name: "Add Project",
    to: "addProject",
  },   
  {
    name: "Add Skills",
    to: "addSkills",
  },   {
    name: "Testimonials",
    to: "testimonials",
  },  
  {
    name: "Add Testimonial",
    to: "addTestimonial",
  },
  {
    name: "Form Submission",
    to: "submissions",
  }, 
  
 
];
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout (){
    dispatch(logout() as any);
    navigate('/')
  }
  return (
    <>
      <div id="sidebar">
        <Link to='/'>
        <div className="logo">
          <img className="h-24 w-24" src="/Images/logo.png" alt="Logo"  />
        </div>
        </Link>
        <div className="links">
          <ul>
            {links.map((link: any) => (
              <NavLink key={link.to} end className={({isActive})=>isActive ? 'active':''}   to={link.to}> <li  > {link.name}  </li></NavLink>
            ))}

<li  onClick={handleLogout}>Logout </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
