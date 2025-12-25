import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
       <div class="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
  
 
  <img
    src="https://i.ibb.co/7dXYvWmx/man-walking-using-laptop.png"
    class=" lg:block absolute left-40 bottom-40 w-150"
  />

  <img
    src="https://i.ibb.co/Kj86y1rd/136881254-39eb0bae-46c4-44c7-bff3-0c3311dc0bbd.png"
    class=" lg:block absolute right-40 bottom-40 w-150"
  />

  
 

 
  <div class="text-center flex flex-col items-center space-y-6 max-w-md px-6">
    
    <img
      src="https://i.ibb.co/NcjCtDW/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.jpg" alt="373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768"
      class="h-50"
    />

    <h1 class="text-5xl font-semibold text-gray-900">
      Foucasly
    </h1>

    <p class="text-gray-600">
      Stay focused, organized, and in control — from work to play.
    </p>

    <Link to="Register" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" >
     Get started
     
      </Link>

    <a href="#" class="text-blue-600 text-sm hover:underline">
      Learn more
    </a>

   

    <p class="text-xs text-gray-400">
      Terms of use
    </p>

  </div>
</div>

    );
}