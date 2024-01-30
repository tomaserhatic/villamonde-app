import React from 'react'
import Photo1 from "../assets/G1.png"
import Photo3 from "../assets/G3.png"
import Photo5 from "../assets/G5.png"


const Gallery = () => {
  return (   
<div class="grid grid-cols-3 md:grid-cols-3 gap-[15px] bg-[#2b2b2b] py-[30px] px-[10px]">
    <div>
        <img class="h-auto max-w-full" src={Photo1} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full" src={Photo5} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full" src={Photo3} alt=""/>
    </div>
    
</div>
  )
}

export default Gallery
