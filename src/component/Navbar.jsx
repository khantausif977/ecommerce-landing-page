import React from "react";

const Navbar = () => {
  return (
    <nav className="w-315 bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      
      <div className="font-bold text-lg text-black">ECOMMERCE</div>

     
      <div className="flex items-center w-1/3 border border-zinc-300 rounded-full px-3 py-1 ">
        <input
          type="text"
          placeholder="Search here"
          className="w-full outline-none text-sm px-2"
        />
       
        <img className="h-4" src="/coolicon_2.png" alt="" />
      </div>

      
      <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="mr-30 ">All Category</span>
          <span className="text-xs ">▼</span>
        </div>
        <span className="cursor-pointer">Gift Cards</span>
        <span className="cursor-pointer">Special Event</span>
      </div>

      
      <div className="flex items-center space-x-4 text-gray-700 text-xl">
        
        <img className="h-4" src="coolicon_1.png" alt="" />

       
       <img className="h-4" src="coolicon.png" alt="" />
        
       <img className="h-4" src="Vector.png " alt="" />
      </div>
    </nav>
  );
};

export default Navbar;


