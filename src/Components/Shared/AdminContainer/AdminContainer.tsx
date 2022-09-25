import React from 'react'

const AdminContainer = ({heading,children} : any) => {

  const containerStyle={
    width : '95%',
    maxWidth : '700px',
  }
  return (
  <>
  <div>
    <h1 className='text-6xl my-10 mt-36 font-bold text-center'>{heading}</h1>
    <div className='mx-auto' style={containerStyle}>
        {children}
    </div>
  </div>
  </>
  )
}

export default AdminContainer