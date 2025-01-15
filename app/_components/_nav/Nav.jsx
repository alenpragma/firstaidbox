import React from 'react'
import Image from "next/image" 
import gmlogo from "../../_svg/gmlogo.svg"
import Link from 'next/link'



const Nav = () => {
    return (
        <div className="border-b">
<div className='max-w-container mx-auto py-[15px] px-[10px] flex justify-between items-center '>
             <div className="">
                <Image className='w-[100px] md:w-[250px]' src={gmlogo} alt='logo'/>
             </div>
             <div className="">
             <Link href="https://wa.me/01511899175" target="_blank" rel="noopener noreferrer">
                <div className="text-[12px] md:text-base px-[20px] md:px-[40px] py-[10px]
                 md:py-[15px] rounded-lg border-[3px] border-p-green text-center cursor-pointer 
                  duration-300 hover:bg-p-green hover:text-white">যোগাযোগ করুন
                </div>
                </Link>
             </div>
        </div>
        </div>
        
    )
}

export default Nav
