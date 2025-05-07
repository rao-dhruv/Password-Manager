import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-200 text-black flex flex-col justify-center items-center w-full'>
        <div className="logo font-bold">
            <span className='text-green-700'>&lt;</span><span>Pass</span><span className='text-purple-700'>OP</span><span className='text-orange-700'>/&gt;</span>
            </div>
        <div className='flex justify-center items-center'>
      Created with <img className='w-7 mx-2' src="icons/heart.webp" alt="love" /> by Dhruv Rao
        </div>
    </div>
  )
}

export default Footer
