import React from "react";
import Container from "../container/Container";
import productDetails from "../../assets/data/productDetails.json";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="py-[50px] md:py-[90px] bg-slate-300">
      <Container>
        <div className="w-full">
          <div className="lg:flex justify-between gap-5 items-baseline">
            {productDetails.slice(0, 2).map((item) => (
              <div className="px-[35px] pb-[35px] bg-[#FFF] lg:w-[50%] flex flex-col justify-between items-center gap-5 rounded-md">
                <div className="w-[206px] bg-[#2ACB35] px-5 pb-5 rounded-b-[50px] h-[250px]">
                  <img
                    className="w-full rounded-b-[45px] h-full"
                    src={item.image}
                    alt=""
                  />
                </div>
                <h2 className="text-[#1E1E1E] text-[32px] font-semibold text-start">
                  {item.title}
                </h2>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-baseline gap-3">
                    <div className="w-[20px]">
                      <TiTick className="text-green-500 text-[20px]" />
                    </div>
                    <p className="text-[24px] text-[#454545]">
                      {item.details.detail1}
                    </p>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <div className="w-[20px]">
                      <TiTick className="text-green-500 text-[20px]" />
                    </div>
                    <p className="text-[24px] text-[#454545]">
                      {item.details.detail2}
                    </p>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <div className="w-[20px]">
                      <TiTick className="text-green-500 text-[20px]" />
                    </div>
                    <p className="text-[24px] text-[#454545]">
                      {item.details.detail3}
                    </p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 w-full h-full">
            {productDetails.slice(2).map((item) => (
              <div className="p-[35px] bg-[#FFF]  lg:flex  justify-between items-center gap-5 rounded-md">
                <div className="lg:w-[25%] w-[206px] bg-[#2ACB35] p-5 rounded-b-[50px] h-[266px] flex item-center justify-center">
                  <img
                    className="w-full rounded-b-[45px] h-full"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="lg:w-[70%] flex flex-col gap-5 lg:mt-0 mt-5">
                  <h2 className="text-[#1E1E1E] text-[32px] font-semibold text-start">
                    {item.title}
                  </h2>
                  <ul className="flex flex-col gap-10">
                    <li className="flex items-baseline gap-3">
                      <div className="w-[20px]">
                        <TiTick className="text-green-500 text-[20px]" />
                      </div>
                      <p className="text-[24px] text-[#454545]">
                        {item.details.detail1}
                      </p>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <div className="w-[20px]">
                        <TiTick className="text-green-500 text-[20px]" />
                      </div>
                      <p className="text-[24px] text-[#454545]">
                        {item.details.detail2}
                      </p>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <div className="w-[20px]">
                        <TiTick className="text-green-500 text-[20px]" />
                      </div>
                      <p className="text-[24px] text-[#454545]">
                        {item.details.detail3}
                      </p>
                    </li>
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
