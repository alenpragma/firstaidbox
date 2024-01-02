import React from "react";
import Container from "../container/Container";
import img1 from "../../../public/first-aid-img/img-01.jpg";
import img2 from "../../../public/first-aid-img/img-02.jpg";
import img3 from "../../../public/first-aid-img/img-03.jpg";
import img4 from "../../../public/first-aid-img/img-04.jpg";
import img5 from "../../../public/first-aid-img/img-05.jpg";
import img6 from "../../../public/first-aid-img/img-09.jpg";
import Image from "next/image";

const firstAidKitName = [
  {
    img: img3,
    title: "কটন ব্যান্ডেজ",
  },
  {
    img: img3,
    title: "কমপ্রেস ব্যান্ডেজ",
  },
  {
    img: img3,
    title: "৩০ মিলি ক্যালেন্ডুলা",
  },
  {
    img: img3,
    title: "থার্মোমিটার",
  },
  {
    img: img3,
    title: "রুবা ওয়েন্টমেন্ট",
  },
  {
    img: img3,
    title: "৩০ মিলি কালমেঘ",
  },
  {
    img: img3,
    title: "১ বক্স ফিব্রিন ট্যাবলেট",
  },
  {
    img: img3,
    title: "৩০ মিলি জাস্টিসিয়া",
  },
  {
    img: img3,
    title: "১ টি সিজার",
  },
  {
    img: img3,
    title: "১ টি সিজার",
  },
];

const FirstAidBox = () => {
  const firstFiveItems = firstAidKitName.slice(0, 5);
  const secondFiveItems = firstAidKitName.slice(0, 5);
  return (
    <div className="py-[50px] md:py-[90px] bg-[#F5F5F5]">
      <Container>
        <h2 className="text-[#1E1E1E] text-7xl font-bold text-center">
          ফাস্ট এইড বাক্সটিতে যা যা পাচ্ছেন
        </h2>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-5 w-[30%]">
            {firstAidKitName.slice(0, 5).map((item) => (
              <div className="w-full bg-[#FFF] rounded flex justify-between items-center relative p-10">
                <h2 className="text-[#1E1E1E] text-[24px]">{item.title}</h2>
                <Image
                  className="w-[100px] h-[100px] rounded-full  absolute -right-10"
                  src={item.img}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="w-[30%]">
            <Image className="w-full" src={img6} alt="" />
          </div>
          <div className="flex flex-col gap-5 w-[30%]">
            {firstAidKitName.slice(5, 10).map((item) => (
              <div className="w-full bg-[#FFF] rounded flex flex-row-reverse justify-between items-center relative p-10">
                <h2 className="text-[#1E1E1E] text-[24px] w-[80%]">{item.title}</h2>
                <Image
                  className="w-[100px] h-[100px] rounded-full absolute -left-10"
                  src={item.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FirstAidBox;
