import { motion } from "framer-motion";

import React, { useState } from "react";



const AnimateScreen = () => {
  const [animate , setAnimate ] = useState(false);
  React.useEffect(()=>{
    setTimeout(()=>setAnimate(true) , 800);
  },[animate])
  return (
    <>

    {
      !animate && <div className="black h-screen w-screen fixed top-0 left-0 bg-black z-10"></div>
    }
 {
  animate &&  <motion.div
  className="animateScreen"
 
>
  <motion.div
   initial ={{
    x:0
  }}

  animate ={{
    x :'-100%'
  }}

  transition={{
    delay:4,
    duration:7,
    staggerChildren:0.4,
  }}
  className="screen screen1">
  {['A','W','E','S','O','M', 'E'].map((letter : string,index:number)=>{
    return (
      <motion.span key={index} initial={{y:0}} animate={{y:[30,20,30,10]}} transition={{
        type:'spring',
        bounce :1,
        delay : index === 0 ? 4 + 0.3 :1/index+1  * 4,
        duration :0.5
      }} >{letter}</motion.span>
  )
  })}
  </motion.div>
  <motion.div
  
  initial ={{
    x:0
  }}

  animate ={{
    x :'100%'
  }}

  transition={{
    delay:3.5,
    duration:0.5,
  }} className="screen screen2">
    <h1>Something</h1>
  </motion.div>
  <motion.div
    initial ={{
      x:0
    }}

    animate ={{
      x :'-100%'
    }}

    transition={{
      delay:3,
      duration:0.5,
    }}
  className="screen screen2">
    <h1>Explore</h1>
  </motion.div>
  <motion.div
   initial ={{
    y:0
  }}

  animate ={{
  y :'100%'
  }}

  transition={{
    delay:2.5,
    duration:0.5,
  }}
  className="screen screen3">
    <h1>To</h1>
  </motion.div>

  <motion.div
     initial ={{
      x:0
    }}

    animate ={{
      x :'-100%'
    }}

    transition={{
      delay:2,
      duration:0.5,
    }}
  className="screen screen4">
    <h1>Going</h1>
  </motion.div>



  <motion.div
  initial ={{
    x:0
  }}

  animate ={{
    x :'100%'
  }}

  transition={{
    delay:1.5,
    duration:0.5,
  }}
  className="screen screen5">
    <h1>Are</h1>
  </motion.div>



  <motion.div
    initial ={{
      y:0
    }}

    animate ={{
      y :'-100%'
    }}

    transition={{
      delay:1,
      duration:0.5,
    }}
  className="screen screen6">
    <h1>You</h1>
  </motion.div>







  <motion.div 
  initial ={{
    x:0
  }}

  animate ={{
    x :'100%'
  }}

  transition={{
    duration:1,
  }}
  className="screen screen7"></motion.div>
</motion.div>
 }
   </>
  );
};

export default AnimateScreen;
