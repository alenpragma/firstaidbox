import React from "react";
import Container from "../container/Container";

const Order = () => {
  return (
    <div className="py-[50px] md:py-[90px] bg-[#2ACB35B2]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#FFF] text-[74px] font-bold text-center">
            এখনই অর্ডার করুন আমাদের স্পেশাল ফার্স্ট এইড বক্স
          </h1>
          <div className="flex gap-10">
            <button className="w-[360px] py-5 border border-white text-[#131313] text-[40px] rounded-md hover:bg-white duration-500">
              অর্ডার করুন
            </button>
            <button className="w-[360px] py-5 border border-white text-[#131313] text-[40px] rounded-md hover:bg-white duration-500">
              কল করুন
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Order;
