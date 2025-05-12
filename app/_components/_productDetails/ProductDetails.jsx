import React from "react";
import Container from "../container/Container";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import img1 from "../../../public/images/image-01.png";
import img2 from "../../../public/images/image-03.png";
import img3 from "../../../public/images/image-02.png";

const productDetails = [
  {
    id: "121",
    title: "জাস্টিশিয়া বা বাসক পাতার উপকারিতা",
    image: img1,
    details: [
      "বাসক পাতা সাধারণত সর্দি বা কাশি কমাতে ব্যবহার করা হয়।",
      "বাসক ফুলের এক চামচ রসের সঙ্গে এক চামচ মধু মিশিয়ে প্রতিদিন খেলে পেটের সমস্যা দূর হয়।",
      "লিভার মজবুত হয় এবং জন্ডিস থেকে মুক্তি পাওয়া যায়।",
      "বাসক পাতায় এক ধরণের অ্যান্টি-মাইক্রোবাল উপাদান রয়েছে যা যক্ষা রোগ দূর করতে কার্যকরী।"
    ]
  },
  {
    id: "122",
    title: "কালমেঘের ঔষধি গুণ ক্যান্সার কোষ বাড়তে দেয় না, ক্যান্সার রোগের ঔষধ হিসেবে কালমেঘ ব্যবহার করা হয়।",
    image: img2,
    details: [
      "কালমেঘ একটি ভেষজ উদ্ভিদ। কালমেঘ পাতার নির্যাসের প্রচুর উপকারিতা রয়েছে।",
      "যে কোনও রকম জ্বরে ক্ষতিগ্রস্থ লিভারকে কালমেঘ পাতার রস ঠিক করতে সাহায্য করে।",
      "এছাড়া এই পাতার রস ডেঙ্গু বা ম্যালেরিয়া রোগের প্রতিরোধক হিসেবে কাজ করে।"
    ]
  },
  {
    id: "123",
    title: "ক্যালেন্ডুলা মাদার টিংচার- এটির বহুমুখী ব্যবহারের জন্য এটিকে হোম ডক্টর বলা হয়।",
    image: img3,
    details: [
      "অত্যন্ত পঁচা ঘায়ে এটি ব্যবহার করলে শীঘ্রই তার উপকার পাওয়া যায়।",
      "শরীরের কোনো স্থানে আঘাত লাগার ফলে চামড়া ছিড়ে গেলে বা কেটে গেলে এটি ব্যবহারের সঙ্গে সঙ্গে রক্ত পড়া বন্ধ হয়ে যায়।",
      "ত্বকের খসখসে ভাব দূর করতে এটি ব্যবহার করা হয়। এটি ব্যবহারে যেকোনো আঘাতের সাথে যুক্ত ব্যথা সহজেই উপশম পাওয়া যায়।",
      "ক্যালেন্ডুলা ছোটখাটো ক্ষত, কাটা, ঘর্ষণ এবং বাহ্যিক আলসার নিরাময়ে সহায়তা করতে ব্যবহৃত হয়।"
    ]
  }
];

const ProductDetails = () => {
  return (
    <div className="py-[50px] md:py-[90px] bg-[#F5F5F5]">
      <Container>
        <div className="w-full">
          <h2 className="text-[#1E1E1E] lg:text-7xl md:text-5xl text-3xl font-bold text-center my-8">
            জাস্টিশিয়া, ক্যালেন্ডুলা ও কালমেঘের ঔষধী গুণাবলি
          </h2>

          {/* First Two Items in a Row */}
          <div className="lg:flex justify-between gap-5">
            {productDetails.slice(0, 2).map((item) => (
              <div key={item.id} className="flex-1 bg-white rounded-md shadow-md">
                <div className="px-8 pb-8 flex flex-col items-center gap-5">
                  <div className="w-[250px] h-[250px] bg-[#2ACB35] px-5 pb-5 rounded-b-[50px] flex justify-center items-center">
                    <Image className="rounded-b-[45px]" src={item.image} alt={item.title} />
                  </div>
                  <h2 className="text-[#1E1E1E] text-[28px] font-semibold text-center">{item.title}</h2>
                  <ul className="flex flex-col gap-3">
                    {item.details.map((data, i) => (
                      <li key={`${item.id}-${i}`} className="flex items-start gap-3">
                        <TiTick className="text-green-500 text-[24px]" />
                        <p className="text-[20px] text-[#454545]">{data}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Third Item in a Column */}
          <div className="mt-8 w-full">
            {productDetails.slice(2).map((item) => (
              <div key={item.id} className="p-8 bg-white rounded-md shadow-md lg:flex items-center gap-5">
                <div className="lg:w-1/3 w-full flex justify-center">
                  <div className="w-[250px] h-[266px] bg-[#2ACB35] p-5 rounded-b-[50px] flex justify-center items-center">
                    <Image className="w-full h-full rounded-b-[45px]" src={item.image} alt={item.title} />
                  </div>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-5 mt-5 lg:mt-0">
                  <h2 className="text-[#1E1E1E] text-[28px] font-semibold">{item.title}</h2>
                  <ul className="flex flex-col gap-4">
                    {item.details.map((data, i) => (
                      <li key={`${item.id}-${i}`} className="flex items-start gap-3">
                        <TiTick className="text-green-500 text-[24px]" />
                        <p className="text-[20px] text-[#454545]">{data}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
