import React from 'react'

const Card1 = () => {
  return (
  
    <div className='lg:bg-[url("https://images.pexels.com/photos/4113901/pexels-photo-4113901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] 
    bg-[url("https://images.pexels.com/photos/1724194/pexels-photo-1724194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]  lg:bg-cover bg-cover 2xl:h-[1300px] md:h-[850px] lg:mr-[320px] '>
    <div className='flex lg:justify-end'>
        <p className=' lg:text-[#614C42] text-[#DADADA] ml-[30px] font-header font-bold w-[384px] leading-normal lg:text-[55px] text-[35px] mt-[23px] lg:mt-[2px] mr-[-70px] lg:pt-[205px]'>Iz diskoteke v restavracijo </p>
  </div>

  <div className='flex flex-col justify-end lg:ml-[790px] ml-[29px] '>
      <p className='font-body font-normal lg:text-[#9F7E6B] text-[#DADADA] lg:w-[517px] text-[20px] mt-[15px] w-[295px]'>Naša zgodba sega daleč nazaj, ko smo bili srce nočnega življenja kot priljubljen nočni klub. 
      </p>
      <p className='font-body font-normal lg:text-[#9F7E6B] text-[#DADADA] lg:w-[517px] text-[20px] mt-[25px] w-[295px]'>Sedaj že 25 leto ustvarjamo gurmanske užitke, kjer se srečujejo okusi preteklosti in sedanjosti.
      </p>
      <button className=' bg-[#614C42]  w-[190px] lg:w-[262px] text-[13px] lg:text-[16px] lg:tracking-[0.18rem] tracking-[2.6px] text-[700] uppercase font-header my-6 py-3 text-[#fafafa]'>preberi več</button>
  
  
  
  </div>  

  </div>
  )
}

export default Card1
