import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

   
  return (
      <div>
          <div className=' bg-slate-700 text-white flex flex-wrap lg:gap-2 justify-center py-2 gap-[1px] ' >
              <Link className=' bg-black p-[2px] px-3 hover:bg-slate-400 hover:text-black rounded-md ' to='/'> General</Link>
              <Link className=' bg-black p-[2px] px-3 hover:bg-slate-400 hover:text-black rounded-md '  to='/sports'>Sports</Link>
              <Link className=' bg-black p-[2px] px-3 hover:bg-slate-400 hover:text-black rounded-md '  to='/business'>Business</Link>
              <Link  className=' bg-black p-[2px] px-3 hover:bg-slate-400 hover:text-black rounded-md ' to='/entertainment'>Entertainment</Link>
              <Link className=' bg-black p-[2px] px-3 hover:bg-slate-400 hover:text-black rounded-md '  to='/science'>Science</Link>
              <Link className=' bg-black p-[2px] px-3 hover:bg-slate-400 hover:text-black rounded-md '  to='/technology'>Technology</Link>
              
          </div>
    </div>
  )
}

export default Navbar
