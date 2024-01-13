import React from "react";
import Container from "../container/Container";
import cotton from "../../../public/first-aid-img/cotton.jpg";
import compress from "../../../public/first-aid-img/compress.jpg";
import calendula from "../../../public/first-aid-img/calendula.jpg";
import bandeg from "../../../public/first-aid-img/bandeg.png";
import thermometer from "../../../public/first-aid-img/thermometer.jpg";
import ruba from "../../../public/first-aid-img/ruba.jpg";
import kalmeg from "../../../public/first-aid-img/calmeg.jpg";
import freeben from "../../../public/first-aid-img/freeben.jpg";
import justicia from "../../../public/first-aid-img/justicia.jpg";
import siger from "../../../public/first-aid-img/siger.jpg";
import firstaidkit from "../../../public/first-aid-img/firstaidbox.png";
import Image from "next/image";

const firstAidKitName = [
  {
    img: cotton,
    title: "কটন ব্যান্ডেজ",
  },
  {
    img: compress,
    title: "কমপ্রেস ব্যান্ডেজ",
  },
  {
    img: calendula,
    title: "৩০ মিলি ক্যালেন্ডুলা",
  },
  {
    img: thermometer,
    title: "থার্মোমিটার",
  },
  {
    img: bandeg,
    title: "ওয়ান টাইম ব্যান্ডেজমিটার",
  },
  {
    img: ruba,
    title: "রুবা ওয়েন্টমেন্ট",
  },
  {
    img: kalmeg,
    title: "৩০ মিলি কালমেঘ",
  },
  {
    img: freeben,
    title: "১ ফিব্রিন ট্যাবলেট",
  },
  {
    img: justicia,
    title: "৩০ মিলি জাস্টিসিয়া",
  },
  {
    img: siger,
    title: "১ টি সিজার",
  },
  {
    img: siger,
    title: "১ টি সিজার",
  },
];

const FirstAidBox = () => {
  const firstFiveItems = firstAidKitName.slice(0, 5);
  const secondFiveItems = firstAidKitName.slice(0, 5);
  return (
    <div className="py-[50px] md:py-[90px] bg-[#F5F5F5]">
      <Container>
        <h2 className="text-[#1E1E1E] lg:text-7xl md:text-5xl text-3xl font-bold text-center my-8">
          ফাস্ট এইড বাক্সটিতে যা যা পাচ্ছেন
        </h2>
        <div className="lg:flex justify-between items-center w-full">
          <div className="flex flex-col gap-5 lg:w-[30%] w-[90%]">
            {firstAidKitName.slice(0, 5).map((item) => (
              <div className="w-full bg-[#FFF] rounded flex justify-between items-center relative lg:p-10 md:p-8 p-5">
                <h2 className="text-[#1E1E1E] text-[24px]">{item.title}</h2>
                <Image
                  className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] rounded-full  absolute -right-10"
                  src={item.img}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="lg:w-[30%] w-full">
            <Image className="w-full" src={firstaidkit} alt="" />
          </div>
          <div className="lg:w-[30%] w-[100%] flex justify-end">
            <div className="lg:w-full w-[90%] flex justify-end">
              <div className="flex flex-col items-center gap-5 w-[100%] mx-auto relative">
                {firstAidKitName.slice(5, 10).map((item) => (
                  <div className="w-full bg-[#FFF] rounded flex flex-row-reverse justify-between items-center lg:p-10 md:p-8 p-5 relative">
                    <h2 className="text-[#1E1E1E] text-[24px] w-[80%]">
                      {item.title}
                    </h2>
                    <Image
                      className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] rounded-full absolute -left-10"
                      src={item.img}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FirstAidBox;
