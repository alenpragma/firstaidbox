import React from "react";
import Container from "../container/Container";

const Email = () => {
  return (
    <div className="py-[50px] md:py-[90px] bg-[#F5F5F5]">
      <Container>
        <div className="w-full lg:flex justify-between items-center">
          <div className="lg:w-[30%] w-full text-center text-4xl font-semibold text-[#1E1E1E]">
            <h2>সাস্থ সম্পর্কে পরামর্শ পেতে সাবস্ক্রাইব করুন</h2>
          </div>
          <div className="lg:w-[60%] w-full flex items-center relative lg:mt-0 mt-5">
            <input className="w-full px-6 py-4 outline-1 outline-[#2ACB35] border border-[#2ACB35] rounded-full text-[18px]" type="text" />
            <button className="px-8 py-3 bg-[#2ACB35] rounded-full absolute -right-0 text-[#FFF] font-semibold text-[24px]">
                Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Email;
