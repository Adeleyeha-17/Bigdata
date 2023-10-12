
export const Navbar = () => {
  return (
    <div className="sm:flex justify-center items-center h-16 md:max-w-2xl lg:max-w-7xl mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-green">BigData</h1>

      <ul className="sm:flex">
         <li className="p-4">Home</li>
         <li className="p-4">Company</li>
         <li className="p-4">Resources</li>
         <li className="p-4">About</li>
         <li className="p-4">Contact</li>
      </ul>
    </div>
  )
}
