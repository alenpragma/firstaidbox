import React from 'react'
import Container from '../container/Container'
import Image from "next/image"

const WhyBuy = () => {

   const  WhyBuyData = [
   
    {
        icon:"https://i.postimg.cc/SRp5ztCS/front-view-man-holds-his-hands-forearm-99433-1568-1.png",
        heading:"ব্যাথার প্রাথমিক চিকিৎসায় ফিব্রিন এর ব্যবহার ",
        description:"ফাস্ট এইড বক্সে ফিব্রিন নামক আয়ুর্বেদিক ট্যাবলেট জ্বর, মাথা ব্যাথা, শরীর ব্যাথার প্রাথমিক চিকিৎসায় অত্যন্ত কার্যকরী। তাই এসব পরিস্থিতিতে ফাস্ট এইড বক্স অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে।"
    },
    {
        icon:"https://i.postimg.cc/15BTfBtS/sick-young-caucasian-man-optical-glasses-wearing-winter-hat-coughing-keeping-fist-close-mouth-sittin.png",
        heading:" খুসখুসে কাশি কমাতে জাস্টিশিয়ার ব্যবহার ",
        description:"আমাদের ফাস্ট এইড বক্সে থাকা জাস্টিশিয়া খুসখুসে কাশি দূর করতে অনেক বেশি  কার্যকরী। তাই হাতের কাছে একটি বক্স থাকলে সর্দি- কাশির প্রাথমিক চিকিৎসা হয়ে যায়। "
    },
    {
        icon:"https://i.postimg.cc/XNwt046p/providing-first-aid-park-man-bandaged-injured-arm-guy-helps-friend-1.png",
        heading:"ঘা পাঁচড়া শুকাতে ক্যালেন্ডুলার ব্যবহার ",
        description:"আমাদের ফাস্ট এইড বক্সে থাকা ক্যালেন্ডুলা মাদার টিংচার লিকুইড ব্যবহারের ফলে দ্রুত যেকোন ঘা-পাঁচড়া শুকিয়ে যায়। তাই একটি বক্স পরিবারের হোম ডক্টর হিসেবে কাজ করে।"
    },
    {
           icon:"https://i.postimg.cc/4dcqyTK2/close-up-sportsman-with-knee-sprain-1098-3227-1.png",
        heading:"ক্ষতস্থান জীবাণুমুক্ত করতে রুবার ব্যবহার ",
        description:"ফাস্ট এইড বক্সে থাকা রুবা একটি অ্যান্টিসেপটিক সল্যুশন, যা ক্ষতস্থানের জীবাণু ধ্বংস করে ইনফেকশন রোধ করে। এটি দ্রুত ব্যবহার করলে আঘাতের জায়গা পরিষ্কার থাকে এবং ক্ষত দ্রুত সারতে সাহায্য করে।"
    },
    

   ] 

    return (
        <div className="py-[50px] md:py-[90px]">
         <Container>
            <h1 className='text-[40px] md:text-[60px] lg:text-[80px] font-bold pb-[20px] md:pb-[40px]
             text-center'>ফাস্ট এইড বক্সের গুরুত্বপূর্ণ উপকরণসমূহের কার্যকারিতা</h1>
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
