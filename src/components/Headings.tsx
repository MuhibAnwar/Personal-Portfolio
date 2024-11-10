import React from 'react'
interface propsT {
    title : string 
}
const Headings : React.FC<propsT> = ({title}) => {
  return (
    <div className='text-center text-4*1 pb-8'>
        <p className='border-b-4 inline-block pb-2'>{title}</p>
      
    </div>
  )
}

export default Headings
