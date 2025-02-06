import React from 'react';
import img from "../assest/11282350.jpg";  // Correcting the folder name to 'assets'

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"  // Tailwind classes to ensure full screen and proper image coverage
      style={{ backgroundImage: `url(${img})` }} // Corrected background image syntax
    >
        <div className='w-[60%] pl-10'>
        <h1 className="text-white text-4xl text-start pt-24 w-[40%]">Suwagaat hai kitaabo ki duniya mein</h1>
        <p className=' text-pink-300 text-2xl text-start pt-24 w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit veritatis porro omnis nostrum aut unde veniam temporibus nam? Magnam et nulla hic magni consequuntur voluptatem dicta aliquid ex quia.</p>
        </div>
      
    </div>
  );
};

export default Home;
