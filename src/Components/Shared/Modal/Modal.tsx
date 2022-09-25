import { Dialog, DialogTitle } from '@mui/material'
import React from 'react'
export interface Props {
    open: boolean;
    onClose: () => void;
    children : any;
    heading : String ,
  }
const Modal = ({heading ,open , onClose, children} : Props) => {


    function handleClose(){
        onClose();
    }
  return (
   <>
  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

        
      >
        <div className="content personalModal">

      <DialogTitle fontSize={'20px'} className="green">{heading}</DialogTitle>

      {children}
        </div>
    </Dialog>
   </>
  )
}

export default Modal