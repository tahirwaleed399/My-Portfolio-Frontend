import  Modal  from '../../Shared/Modal/Modal'
import React from 'react'
import LoginForm from '../../Admin/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
<>
<footer>
   
    <p className='green'>
        <span onClick={()=>setOpen(true)}>Waleed Tahir</span> <span onClick={()=>navigate('/admin')}>Portfolio Website</span> All Rights Reserved &copy; {new Date().getFullYear()}
    </p>
</footer>

<Modal heading={'Login'} open={open} onClose={()=>setOpen(false)}>

 <LoginForm></LoginForm> 

</Modal>
</>
  )
}

export default Footer