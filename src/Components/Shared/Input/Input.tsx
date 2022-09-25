import React from 'react'
import './Input.scss'
const Input = (props : any) => {
  const {setLoginInfo , loginInfo} = props;
  const myNewProps = {...props};

  delete myNewProps['setlogininfo'];
  delete myNewProps['loginInfo'];

    function handleChange(e :any){
      console.log(loginInfo)
      setLoginInfo({...loginInfo , [e.target.name] : e.target.value})
       }
  return (
    <>

<input className='specialInput' {...myNewProps} onChange={handleChange} />
    
    </>
  )
}

export default Input