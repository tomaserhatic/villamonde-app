import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/Logo.png'
import { useScrollPosition } from '../hooks/useScrollPosition';
import De from '../assets/de.png'



function Navbar(){
    const [nav, setNav] = useState(false);



function classNames(...classes){
  return classes.filter(Boolean).join(' ');
}


const handleNav= () => {
    setNav(!nav)
}
const scrollPosition = useScrollPosition();

  return (
      <div className={classNames(scrollPosition > 100 ? 'bg-black/65' : 'bg-[black]', 
      'transition-bg top-0 sticky  flex justify-between items-center h-[90px]  z-10 mx-auto text-white')}>
      <img className=' w-[153px] h-[73] z-10 pb-3 mt-[10px] lg:ml-[95px] ml-[30px]'src={Logo} alt="" />
    
      <nav>
      <ul className=' pr-10 text-[16px] uppercase hidden md:flex z-10 text-[#e5e5e5] font-header tracking-[0.18rem]'>
        <li className="p-4 hover:text-[#fafafa] cursor-pointer">O nas</li>
        <li className="p-4 hover:text-[#fafafa] cursor-pointer">Hrana</li>
        <li className="p-4 hover:text-[#fafafa] cursor-pointer">Rezervacije</li>
        <li className="p-4 hover:text-[#fafafa] cursor-pointer">Dogodki</li>
        <li className="p-4 pt-5 hover:text-[#fafafa] cursor-pointer"><img src={De} alt="/"/></li>
      </ul>
      </nav>
    
    
    <div onClick={handleNav} className='block md:hidden mr-7'>
    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        
        
      <div className={nav ? 'z-30 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <img className=' w-[168px] h-[74] z-10 pt-10 mx-auto'src={Logo} alt="" />
            <ul className='uppercase p-4 text-center tracking-[0.08rem]'>
                <li className="p-4 border-gray-600">Hrana</li>
                <li className="p-4 border-gray-600">Rezervacije</li>
                <li className="p-4">Dogodki</li>
              
            </ul>
        </div>
        </div>


  )
}

export default Navbar


