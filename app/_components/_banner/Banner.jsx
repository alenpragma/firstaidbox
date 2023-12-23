import React from "react";
import Image from "next/image"
import bannerarrow from "../../_svg/bannerarrow.svg"
import bannerdot from "../../_svg/bannerdot.svg"
import bag from "../../_svg/bag.svg"
import band from "../../_svg/band.svg"
import "./banner.css"

const Banner = () => {
  return (
    <div className="py-[50px] md:py-[90px]">
      <div className="max-w-container mx-auto px-[15px] flex flex-col md:flex-row items-center gap-y-10 md:gap-x-3">
        <div className="w-full md:w-[50%] relative">
            <Image src={bannerarrow} className="absolute z-[999] right-[-150px] top-[-30px] w-[200px] h-auto hidden md:block" alt="banner arrow"/>
          <h1 className="text-[60px] leading-[70px] md:leading-[130px] md:text-[90px]  font-extrabold text-center md:text-left">
            অল্প খরচে দ্রুত প্রাথমিক রোগ নিরাময় সল্যুশন
          </h1>
          <h4 className="text-[25px] font-semibold text-p-ash mt-5 text-center md:text-left">
            দ্রুত ও নির্ভরযোগ্য প্রাথমিক চিকিৎসা সল্যুশন <br /> হচ্ছে আমাদের এই
            ফাস্ট এইড বক্স
          </h4>
          <div className="mt-7 flex justify-center md:justify-start">
            <div className="text-[12px] md:text-base px-[50px] md:px-[70px] py-[10px] md:py-[15px] rounded-lg border-[3px] border-p-green bg-p-green text-center text-[white] font-semibold cursor-pointer duration-300 hover:bg-white hover:text-black">
            অর্ডার করুন
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative overflow-hidden flex">
            <Image src={bannerdot} alt="banner-dot" className="w-full h-auto circle-anim scale-[2]"/>
            <Image src={bag} alt="banner-dot" className="w-[80%]   h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
            <Image src={band} alt="banner-dot" className="   absolute top-[0%]  left-[0%] md:left-[22%]"/>
            <Image src={band} alt="banner-dot" className="   absolute bottom-7 right-7 "/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
