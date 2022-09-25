import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar/Sidebar';
import {GiHamburgerMenu} from 'react-icons/gi';
import ScrollToTop from '../../Components/Shared/ScrollTop/ScrollTop';
const Admin = () => {

  const [openNav , setOpenNav] = useState(false);

  return (
    <div id='adminPanel'>
        <ScrollToTop></ScrollToTop>
      <aside
      style={
        {
          transform : openNav ? "translateX(0)" :"" 
        }
      }
      >
<Sidebar></Sidebar>
</aside>

  <nav>
<div className="hamburger"  onClick={()=>setOpenNav(!openNav)}>
<GiHamburgerMenu />
</div>
  </nav>
<section>
<Outlet></Outlet>
</section>
 


    </div>
  )
}

export default Admin