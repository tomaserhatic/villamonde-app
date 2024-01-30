import React from 'react'

import Logo2 from "../assets/logo4.png"


const Footer = () => {
  return (
    <div className='bg-[#fafafa] border-t-[0.5px] border-[#2b2b2b]'>
    <div className='max-w-[1240px] mx-auto py-16 px-1  grid lg:grid-cols-2 text-gray-300'>

        <div className="mx-auto"> 
        <img className=' w-[225px] h-[99px] lg:mt-7'src={Logo2} alt="" />
      
       {/* <div className='flex justify-between lg:ml-[65px] md:w-[20%] w-[20%] h-[20px] text-[#818181]'>
    <FaFacebook  size={130} />
    <FaInstagram  size={130} />
    <BiLogoTripAdvisor  size={130} />
   </div>*/}
    </div>

    <div className='flex mx-auto justify-between mt-10 text-center gap-[3.5rem] text-[#878787]'>

        <div>
    <h6 className='font-medium uppercase font-header text-[#818181] tracking-[0.18rem] pb-1'>Kontakti</h6>
    <ul>
        <li className='py-2 text-sm text-[#8A89D0]'><a href="tel:031-849-169">031/849-169</a></li>
        <li className='py-2 text-sm'>info@villa-monde.com</li>
    </ul>
    </div>


<div>
    <h6 className='font-medium tracking-[0.18rem] uppercase font-header text-[#818181] pb-1'>povezave</h6>
    <ul>
        <li className='py-2 text-sm'>Dogodki</li>
        <li className='py-2 text-sm'>Menu</li>
        <li className='py-2 text-sm'>Rezervacije</li>
        <li className='py-2 text-sm'>O nas</li>
    </ul>
</div>

</div>

    </div>
    <div className='flex mx-auto border-t-[0.5px] border-[#2b2b2b] w-[90%]'>
<p className='mx-auto mt-[15px] mb-[35px] text-[#52575C] text-[12px]'>© 2024  Villa Monde. All rights reserved.</p>
</div>
    </div>
  )
}

export default Footer