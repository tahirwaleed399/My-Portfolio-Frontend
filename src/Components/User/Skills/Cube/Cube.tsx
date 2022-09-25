import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
// import { useSelector } from 'react-redux';
import { TextureLoader } from 'three';
// import User from '../../../../Interfaces/User';

const Cube = ({images} : {images : string[]}) => {
    let [isMobile , setIsMobile]= useState(false);
 

    let cube = useRef<any>()
    const maps = useLoader(TextureLoader,   images);

 
      useFrame(()=>{
        cube.current.rotateY(0.01);
        cube.current.rotateX(0.01);
        cube.current.rotateZ(0.01);
    })
    useEffect(()=>{
        if(window.innerWidth <=600){
            setIsMobile(true);
        }else{
            setIsMobile(false);
        }
    },[setIsMobile])
  return (
    <>
    <OrbitControls   enableZoom={false}></OrbitControls>
<mesh scale={isMobile ?  2 : 3} ref={cube}  >
<boxGeometry args={[1,1,1]}></boxGeometry>
{
maps.map((texture , idx)=>(
    <meshBasicMaterial
    key={texture.id}
    attach={`material-${idx}`}
    map={texture}
  />
))
}

</mesh>
<ambientLight args={['#ffffff' , 1]}></ambientLight>
    </>
  )
}

export default Cube