import React from 'react'

const Dummy = () => {
  return (
    <>
    <style jsx global>
        {
           `.dummy{
            background:yellow;
           }`
        }
    </style>
    <div className='dummy'>Its a dummy page</div>
    </>
  )
}

export default Dummy