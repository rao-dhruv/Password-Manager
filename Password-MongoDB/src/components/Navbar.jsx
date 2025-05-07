import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-200 flex justify-around items-center p-4 h-14'>
        <div className="logo font-bold"><span className='text-green-700'>&lt;</span><span>Pass</span><span className='text-purple-700'>OP</span><span className='text-orange-700'>/&gt;</span></div>
      <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="/">About</a>
            <a className='hover:font-bold' href="/">Contact</a>
        </li>
      </ul>

      <div>
        <a href="https://github.com/rao-dhruv/Password-Manager" target="_blank" rel="">
        <button className='text-black p-1 bg-transparent cursor-pointer rounded-md flex gap-1 justify-center items-center ring-white ring-1'>
        <img className=' w-10 p-1' src="icons/github.gif" alt="github logo" />
        <span className='font-bold'>GitHub</span>
        </button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
