import React, { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

export const Navbar:React.FC = () => {
   const [nav, setNav] = useState(false)

   const handleToggle = () => {
      setNav((prevState) => 
         !prevState)
   }
  return (
    <div className="flex justify-center items-center h-16 px-5 md:max-xl:px-7 md:max-w-6xl lg:max-w-7xl mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-green">BigData</h1>

      <ul className="hidden sm:flex">
         <li className="p-4">Home</li>
         <li className="p-4">Company</li>
         <li className="p-4">Resources</li>
         <li className="p-4">About</li>
         <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleToggle}>
         {nav ? <AiOutlineClose size={25} className="sm:hidden" /> : <AiOutlineMenu size={25} className="sm:hidden"/>}
         
      </div>

      <div className={nav ? "fixed left-0 top-0 w-1/2 h-full border-r border-gray-900 sm:hidden transition-all ease-in-out duration-500" : "fixed -left-full"}>
         <ul className="pt-20 mx-3">
         <li className="p-4 border-b border-gray-700">Home</li>
         <li className="p-4 border-b border-gray-700">Company</li>
         <li className="p-4 border-b border-gray-700">Resources</li>
         <li className="p-4 border-b border-gray-700">About</li>
         <li className="p-4 ">Contact</li>
         </ul>
      </div>
    </div>
  )
}
