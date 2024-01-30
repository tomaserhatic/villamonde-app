import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
   
    <div className='text-white  bg-[url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3Dg")] 
      bg-cover  2xl:h-[1300px] md:h-[850px]  '>
        
    
   {/*https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg*/}
   
   

      <div className='flex justify-start items-center lg:pt-[353px] pt-[200px] lg:ml-[132px] ml-[30px]'>
          <p className=' md:text-[60px] sm:text-4xl text-3xl font-header font-bold lg:py-4'>Naše pice so </p>
          <Typed className='md:text-[60px] sm:text-4xl text-3xl font-header font-bold pl-2' strings={['hrustljave.', 'sočne.', 'okusne.']} typeSpeed={90} backSpeed={50} loop />
          
          
          
    
    </div>
    <p className=' lg:ml-[130px] ml-[30px] md:text-[30px] text-[18px] font-header md:pt-5 text-[#fafafa]'>Naroči svojo in se prepričaj!</p>
    <button className='lg:ml-[130px] ml-[30px] bg-[#614C42] w-[190px] lg:w-[262px] text-[15px] lg:text-[16px] tracking-[0.18rem] uppercase font-header font-bold  my-6 py-3 text-[#fafafa]'><a href="tel:031-849-169">031/849-169</a></button>
   
    </div>
  
  )
}

export default Hero
