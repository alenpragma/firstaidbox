import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const WhyFristAid = () => {
  const whyFirstAidData = [
    {
      icon: "https://i.postimg.cc/K8ckxGKf/5972292-blood-disease-fluid-infection-transmission-icon-1.png",
      heading: "হঠাৎ রক্তক্ষরণ বন্ধের জন্য",
      description:
        "রক্তক্ষরণ বন্ধ করার জন্য ফাস্ট এইড বক্স সাথে থাকলে বিপদের সময় বিচলিত হতে হয়না।",
    },
    {
      icon: "https://i.postimg.cc/vHtgJgmD/5875818-blood-cell-disease-infect-lab-icon-1.png",
      heading: "ঘা-পাঁচড়া শুকানোর জন্য",
      description:
        "অনেক সময় ঔষধের চেয়ে জীবাণুনাশক দিয়ে প্রাথমিক চিকিৎসায় ঘা- পাঁচড়া ভালো হয়। ",
    },
    {
      icon: "https://i.postimg.cc/q7zN61xC/5958961-avatar-fever-sick-temperature-thermometure-icon-1.png",
      heading: "সর্দি-কাশির চিকিৎসার জন্য",
      description:
        "প্রাথমিক পর্যায়ে সর্দি-কাশির চিকিৎসা করা যাবে একটি ফাস্ট  এইড বক্স থাকলে।",
    },
    {
      icon: "https://i.postimg.cc/YqHLDfMJ/5859949-accident-foot-injury-leg-pain-icon-1.png",
      heading: "বড় বিপদ এড়ানোর জন্য",
      description:
        "অনেক সময় অনেক বড় বিপদের হাত থেকে রক্ষা পাবেন একটি বক্স থাকলে।",
    },
    {
      icon: "https://i.postimg.cc/bw6Gv7kh/6673749-emergency-health-healthcare-hospital-kit-icon-1.png",
      heading: "জরুরী পরিস্থিতি মোকাবেলার জন্য",
      description:
        "জরুরী পরিস্থিতিতে অনেক সময় একটা ফাস্ট  এইড বক্স জীবন রক্ষা করতে পারে।",
    },
    {
      icon: "https://i.postimg.cc/7P7TNQ83/6088629-bacteria-find-germs-scan-search-icon-1.png",
      heading: "জীবাণু প্রতিরোধের জন্য",
      description:
        "জীবাণু প্রতিরোধে অনেক সময় কিছুই থাকেনা ঘরে। এক্ষেত্রে বক্সটি অনেক উপকারী ও কার্যকরী।",
    },
  ];

  return (
    <div className="py-[50px] md:py-[90px] bg-lime">
      <Container>
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px]  font-bold pb-[20px] md:pb-[40px]">
          কেনো ফাস্ট এইড বক্স <br /> প্রয়োজন?
        </h1>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-6 justify-between flex-wrap">
          {whyFirstAidData.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[48.9%] p-10 flex flex-col gap-y-5 items-center rounded-xl justify-center border-[3px] border-p-green"
            >
              <img src={item.icon} className="w-[100px] h-auto" />
              <h3 className="font-semibold text-[35px] text-center">
                {item.heading}
              </h3>
              <h4 className="font-sermibold text-center text-[25px]">
                {item.description}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyFristAid;
