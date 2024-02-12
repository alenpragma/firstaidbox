"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import firstairimage from "../../../public/first-aid-img/firstaidbox.png";
import bkash from "../../../public/first-aid-img/bkash.png";
import rocket from "../../../public/first-aid-img/rocket.png";
import cashDelevery from "../../../public/first-aid-img/cash.png";
import Image from "next/image";

const CheckOut = () => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1500);
  const [delivery, setdelivery] = useState(200);


  const [discountPrice, setDiscountPrice] = useState(0);
  const [tax, setTax] = useState(0);


  const [singlePrice, setSinglePrice] = useState(1500);


  const dicressCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incressCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setTotalPrice(count * singlePrice);
  }, [count]);

  useEffect(() => {
    setDiscountPrice(totalPrice / 100 * 10);
  }, [totalPrice]);

  useEffect(() => {
    setTax(totalPrice / 100 * 10);
  }, [totalPrice]);


  return (
    <div className="py-[50px] md:py-[90px] bg-[#E5E5E5]">
      <Container>
        <div>
          <h2 className="lg:text-[#1D1D1D] lg:text-7xl md:text-5xl text-3xl mb-8 font-bold">
            Checkout Page
          </h2>
        </div>
        <div className="lg:flex justify-between gap-5 lg:mt-0 mt-5">
          <div className="flex-1 flex flex-col gap-5 w-[100%] justify-between">
            {/* Contact Information */}
            <div className="bg-[#FFF] px-5 py-10 rounded">
              <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-2">
                Contact Information
              </h2>
              <form className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Frist Name"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
              </form>
            </div>
            {/* Billing Information */}
            <div className="bg-[#FFF] px-5 py-10 rounded">
              <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-2">
                Billing Information
              </h2>
              <form className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Post"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
                <input
                  type="text"
                  placeholder="Your Police"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
                <input
                  type="text"
                  placeholder="Your Distric"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
                <input
                  type="email"
                  placeholder="Zip Code"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded"
                />
              </form>
            </div>
            {/* Additional */}
            <div className="bg-[#FFF] px-5 py-10 rounded">
              <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-2">
                Additional Information
              </h2>
              <form className="">
                <textarea
                  rows="5"
                  className="border-2 border-slate-200 outline-[#2ACB35] px-2 py-4 rounded w-full"
                ></textarea>
              </form>
            </div>
          </div>
          {/* Contact Imformation */}
          <div className="flex-1 flex flex-col justify-between gap-5 w-[100%] bg-[#FFF] p-5 rounded">
            <div>
              <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-3">
                Shopping Cart
              </h2>
              <div className="flex justify-center items-center bg-[#FFF] p-3 rounded text-center shadow">
                <div className="">
                  <Image
                    className="w-[85px] h-[85px]"
                    src={firstairimage}
                    alt=""
                  />
                </div>
                <div className="flex-1 text-[#323232] text-[14px] font-semibold">
                  <p>Good Morning First Aid Box</p>
                </div>
                <div className="flex-1   flex justify-around items-center bg-[#E5E5E5] rounded py-2">
                  <span onClick={() => dicressCount()} className="font-semibold text-[27px] px-3 cursor-pointer">-</span>
                  <span className="font-semibold text-[27px]">{count}</span>
                  <span onClick={() => incressCount()} className="font-semibold text-[27px] px-2 cursor-pointer">+</span>
                </div>
                <div className="flex-1 font-semibold text-[27px]">{totalPrice} tk</div>
              </div>
            </div>
            <div>
              <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-3">
                Order Summery
              </h2>
              <div className="bg-[#E5E5E5] px-5 py-8 rounded">
                <ul>

                  <li className="flex justify-between p-2">
                    <span className="text-[#323232] text-[24px] font-bold">
                      Delivery
                    </span>
                    <span className="text-[#323232] text-[24px] font-bold">
                      {delivery}
                    </span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="text-[#323232] text-[24px] font-bold">
                      Tax <span className="ps-3">10%</span>
                    </span>
                    <span className="text-[#323232] text-[24px] font-bold">
                      {tax}
                    </span>
                  </li>
                  <li className="flex justify-between p-2">
                    <span className="text-[#323232] text-[24px] font-bold">
                      Discount <span className="ps-3"> {'10'} %</span>
                    </span>
                    <span className="text-[#323232] text-[24px] font-bold">
                      {discountPrice}
                    </span>
                  </li>
                  <hr className="border-b-[1px] border-gray-900" />
                  <li className="flex justify-between p-2">
                    <span className="text-[#323232] text-[24px] font-bold">
                      Total
                    </span>
                    <span className="text-[#323232] text-[24px] font-bold">
                      {totalPrice + delivery + tax - discountPrice}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-3">
                Payment Method
              </h2>
              <div className="bg-[#E5E5E5] px-5 py-8 rounded flex justify-around">
                <btutton className="w-[150px] bg-white rounded p-2 cursor-pointer">
                  <Image className="w-full" src={bkash} alt="" />
                </btutton>
                <btutton className="w-[150px] bg-white rounded p-2 cursor-pointer">
                  <Image className="w-full" src={rocket} alt="" />
                </btutton>
                <btutton className="w-[150px] bg-white rounded p-2 cursor-pointer">
                  <Image className="w-full" src={cashDelevery} alt="" />
                </btutton>
              </div>
            </div>
            <div>
              <button className="w-full px-8 py-3 bg-[#2ACB35] hover:bg-[#43b04a] rounded-md text-[#FFF] font-semibold text-[24px] uppercase">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
