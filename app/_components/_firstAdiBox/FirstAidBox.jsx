import React from "react";
import Container from "../container/Container";
import cotton from "../../../public/first-aid-img/cotton.jpg";
import compress from "../../../public/first-aid-img/compress.jpg";
import calendula from "../../assets/img/p-04.png";
import bandeg from "../../../public/first-aid-img/bandeg.png";
import thermometer from "../../../public/first-aid-img/thermometer.jpg";
import ruba from "../../../public/first-aid-img/ruba.jpg";
import kalmeg from "../../assets/img/p-01.png";
import freeben from "../../../public/first-aid-img/freeben.jpg";
import justicia from "../../assets/img/p-02.png";
import siger from "../../../public/first-aid-img/siger.jpg";
import firstaidkit from "../../assets/img/p-03.png";
import Image from "next/image";

import image1 from "../../../public/images/img-01.jpg";
import image2 from "../../../public/images/img-02.jpg";
import image3 from "../../../public/images/img-03.jpg";
import image4 from "../../../public/images/img-04.jpg";
import image5 from "../../../public/images/img-05.jpg";
import image6 from "../../../public/images/img-06.jpg";
import image7 from "../../../public/images/img-07.jpg";
import image8 from "../../../public/images/img-08.jpg";
import image9 from "../../../public/images/img-09.jpg";
import image10 from "../../../public/images/img-10.jpg";
import image11 from "../../../public/images/img-11.jpg";
import image12 from "../../../public/images/img-12.jpg";

import bannerImage from "../../../public/images/box.png";

const firstAidKitName = [
  {
    img: image1,
    title: "৩০ মিলি ক্যালেন্ডুলা",
  },
  {
    img: image7,
    title: "৩০ মিলি কালমেঘ",
  },
  {
    img: image8,
    title: "রুবা",
  },
  {
    img: image12,
    title: "১ টি সিজার",
  },
  {
    img: image4,
    title: "অ্যালকোহল প্যাড",
  },
  {
    img: image2,
    title: "গজ ব্যান্ডেজ",
  },

  {
    img: image9,
    title: "৩০ মিলি জাস্টিসিয়া",
  },
  {
    img: image10,
    title: "টেমকন ১ বক্স",
  },
  {
    img: image3,
    title: "ডিজিটাল থার্মোমিটার",
  },
  {
    img: image5,
    title: "ওয়ান টাইম ব্যান্ডেজ",
  },
  // {
  //   img: compress,
  //   title: "কমপ্রেস ব্যান্ডেজ",
  // },
  // {
  //   img: bandeg,
  //   title: "ওয়ান টাইম ব্যান্ডেজ",
  // },
  // {
  //   img: cotton,
  //   title: "কটন ব্যান্ডেজ",
  // },
  {
    img: image6,
    title: "তুলা",
  },
  {
    img: image11,
    title: "এইড বক্স",
  },
];

const FirstAidBox = () => {
  const firstFiveItems = firstAidKitName.slice(0, 5);
  const secondFiveItems = firstAidKitName.slice(0, 5);
  return (
    <div className="py-[50px] md:py-[90px] bg-[#F5F5F5]">
      <Container>
        <h2 className="text-[#1E1E1E] lg:text-7xl md:text-5xl text-3xl font-bold text-center my-8">
          ফাস্ট এইড বক্সটিতে যা যা পাচ্ছেন
        </h2>
        <div className="lg:flex justify-between items-center w-full">
          <div className="flex flex-col gap-5 lg:w-[30%] w-[90%]">
            {firstAidKitName.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="w-full bg-[#FFF] rounded flex justify-between items-center relative lg:p-10 md:p-8 p-5"
              >
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
            <Image className="w-full" src={bannerImage} alt="" />
          </div>
          <div className="lg:w-[30%] w-[100%] flex justify-end">
            <div className="lg:w-full w-[90%] flex justify-end">
              <div className="flex flex-col items-center gap-5 w-[100%] mx-auto relative">
                {firstAidKitName.slice(6, 12).map((item, index) => (
                  <div
                    key={index}
                    className="w-full bg-[#FFF] rounded flex flex-row-reverse justify-between items-center lg:p-10 md:p-8 p-5 relative"
                  >
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
