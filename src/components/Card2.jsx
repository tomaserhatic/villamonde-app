import React from 'react'
import Pica from "../assets/Pec.png"
import Grill from "../assets/Grill.png"
const Card2 = () => {
  return (
    <div>
      <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4'src={Pica} alt="/" />
        <div className='flex flex-col justify-center lg:ml-[102px] ml-[35px] w-auto'>
        <p className=' text-[#614C42] font-header font-bold lg:w-[507px] leading-normal lg:text-[50px] md:text-[30px] text-[20px]'>Preglej pice in si naroči svojo domov!</p>
      
        <p className='font-body font-normal text-[#9F7E6B] lg:w-[402px] lg:text-[28px] lg:mt-[65px] hidden lg:block'>Pri nas picam posvečamo posebno pozornost. Z ljubeznijo in skrbjo pečemo vsako pico v pristni krušni peči, kjer se združita tradicija in okusnost.
 S hrustljavim robom in sočnim središčem vsaka pica oživi z aromami sveže pečenega testa in izbranih sestavin.</p>
            <button className=' bg-[#614C42] w-[150px] lg:w-[262px]  text-[13px] lg:text-[16px] tracking-[0.18rem] uppercase font-header my-6 py-3 text-[#fafafa]'>Meni pic</button>
        </div>
      </div>
    </div>

    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-2'>
        <div className='flex flex-col justify-center lg:ml-[102px] ml-[35px] w-auto'>
        <p className=' text-[#614C42] font-header font-bold lg:w-[507px] leading-normal lg:text-[50px] md:text-[30px] text-[20px]'>Jedi iz kuhinje</p>
        
        <p className='font-body font-normal text-[#9F7E6B] lg:w-[419px] lg:text-[28px] lg:mt-[65px] hidden lg:block'>Naša mesna selekcija, od sočnih burgerjev do sočnih zrezkov, doživlja pravi preporod na vročih ogljih. Z značilno ognjeno aromo in hrustljavo skorjo vsaka jed postane pravo senzorično doživetje.
 Z drznimi začimbami in edinstvenimi omakami ustvarjamo jedi, ki vam bodo pričarale nasmeh na obrazu.</p>
            <button className=' bg-[#614C42] w-[150px] lg:w-[349px]  text-[13px] lg:text-[16px] tracking-[0.18rem] uppercase font-header my-6 py-3 text-[#fafafa]'>Meni jedi iz kuhinje</button>
            
        </div>
        <img className='w-[500px] mx-auto my-4'src={Grill} alt="/" />
      </div>
    </div>

    </div>
  )
}

export default Card2
