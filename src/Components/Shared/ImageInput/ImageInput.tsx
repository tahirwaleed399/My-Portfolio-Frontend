import React from 'react'
import { Button, IconButton } from '@mui/material';
import { AiFillCamera } from 'react-icons/ai';
const ImageInput = ({image , setImage}:any) => {

 function handleImageUpdate(e:any){
 
    console.log(e.target.files)

    const reader = new FileReader();


    reader.onload = ()=>{


    if(reader.result){
        setImage(reader.result);
    }

    }

    reader.readAsDataURL(e.target.files[0]);
      }

    return (
    <>
  <div className="ImageInput">

  <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" onChange={handleImageUpdate} />
  <AiFillCamera style={{fontSize:'20px'}} />
</IconButton>

<div className="preview">
{
    image && <div className="preview-box"><img className='preview-img' src={image} alt="Preview" /></div>
}
{
    !image && <h1 className="text-2lg font-bold">No Image To Show</h1>
}
</div>
  </div>
    
    </>
  )
}

export default ImageInput