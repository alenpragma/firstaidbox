import React from 'react'
import Image from "next/image" 
import gmlogo from "../../_svg/gmlogo.svg"



const Nav = () => {
    return (
        <div className="border-b">
<div className='container mx-auto py-[15px] px-[10px] flex justify-between items-center '>
             <div className="">
                <Image className='w-[100px] md:w-[250px]' src={gmlogo} alt='logo'/>
             </div>
             <div className="">
                <div className="text-[12px] md:text-base px-[20px] md:px-[40px] py-[10px] md:py-[15px] rounded-lg border-[3px] border-p-green text-center cursor-pointer duration-300 hover:bg-p-green hover:text-white">যোগাযোগ করুন
                </div>
             </div>
        </div>
        </div>
        
    )
}

export default Nav
