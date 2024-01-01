import React from 'react'
import Container from '../container/Container'
import Image from "next/image"

const WhyBuy = () => {

   const  WhyBuyData = [
    {
        icon:"https://i.postimg.cc/sx9LP94p/portrait-young-man-holding-camera-white-background-1048944-3368429-1.png",
        heading:"রক্তক্ষরন বন্ধের জন্য",
        description:"রক্তক্ষরণ বন্ধ করার প্রয়োজনীয় উপকরণ অনেক সময় হাতের কাছে থাকেনা। আমাদের বক্সে থাকা ক্যালেন্ডুলা লিকুইডটি তাতক্ষনিক রক্তক্ষরন বন্ধে অত্যন্ত কার্যকরী।        "
    },
    {
        icon:"https://i.postimg.cc/SRp5ztCS/front-view-man-holds-his-hands-forearm-99433-1568-1.png",
        heading:"হঠাৎ আঘাতে পেলে",
        description:"হঠাৎ ব্যথা পেলে আক্রান্ত স্থা্নে ব্যাথা নাশক কোন ওয়েন্টমেন্ট মেসজে করতে পারলে মুহুর্তের মধ্যেই অনেক আরাম পাওয়া যায়। তাই একটি ফার্স্ট এইড বক্স খুব দরকারি।"
    },
    {
        icon:"https://i.postimg.cc/15BTfBtS/sick-young-caucasian-man-optical-glasses-wearing-winter-hat-coughing-keeping-fist-close-mouth-sittin.png",
        heading:"খুসখুসে কাশি কমাতে",
        description:"আমাদের ফার্স্ট এইড বক্সে থাকা জাস্টিশিয়া আধাটৈডা সেবনে খুসখুসে কাশি দূর করতে অনেক কার্যকরী। তাই হাতের কাছে একটি বক্স থাকলে কাশির প্রাথমিক চিকিৎসা হয়ে যাবে।"
    },
    {
        icon:"https://i.postimg.cc/XNwt046p/providing-first-aid-park-man-bandaged-injured-arm-guy-helps-friend-1.png",
        heading:"ঘা-পাঁচড়া শুকানোর জন্য",
        description:"আমাদের ফার্স্ট এইড বক্সে থাকা ক্যালেন্ডুলা মাদার টিংচার লিকুইড ব্যবহারের ফলে দ্রুত যেকোন ঘা-পাঁচড়া শুকিয়ে যায়। তাই একটি বক্স পরিবারের হোম ডক্টর হিসেবে কাজ করে।"
    },
    {
        icon:"https://i.postimg.cc/xTnhfh9g/Vector.png",
        heading:"অন্যের বিপদে এগিয়ে আসতে",
        description:"আপনার চারপাশের লোকেরা আপনার মতো প্রস্তুত নাও হতে পারে, তাই আশেপাশের কেউ কোনো আঘাতের সম্মুখীন হলে আপনার প্রাথমিক চিকিৎসা বক্সটি কাজে আসতে পারে"
    },
    {
        icon:"https://i.postimg.cc/4dcqyTK2/close-up-sportsman-with-knee-sprain-1098-3227-1.png",
        heading:"ব্যাথার প্রাথমিক চিকিৎসার জন্য",
        description:"বক্সে ফিব্রিন নামক আয়ুর্বেদিক ট্যাবলেট জ্বর, মাথা ব্যাথা, শরীর ব্যাথার প্রাথমিক চিকিৎসায় অত্যন্ত কার্যকরী। তাই এসব পরিস্থিতিতে ফার্স্ট এইড বক্স অত্যন্ত কাজের।"
    },

   ] 

    return (
        <div className="py-[50px] md:py-[90px]">
         <Container>
            <h1 className='text-[40px] md:text-[60px] lg:text-[80px]  font-bold pb-[20px] md:pb-[40px] text-center'>আমাদের বক্সটি কেন কিনবেন?</h1>
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-6 justify-between flex-wrap">
                {
                    WhyBuyData.map((item ,index)=>(

                        <div key={index} className={`${index === 0 && "bg-p-green text-white border-p-green" } ${index === 3 && "bg-lime" } ${index === 4 && "bg-p-blue text-white border-p-blue" }  w-full md:w-[48.9%]  flex flex-col gap-y-5 items-center rounded-xl justify-center border-[3px] border-lime`}>
                              <img src={item.icon} className='w-full h-auto ' />
                              <div className="p-10">
                              <h3 className='font-semibold text-[35px] text-center mb-4'>{item.heading}</h3>
                              <h4 className='font-sermibold text-center text-[25px]'>{item.description}</h4>
                              </div>
                        </div>
                    ))
                }
            </div>
            </Container>    
        </div>
    )
}

export default WhyBuy
