"use client";
import React, { useState } from "react";
import Container from "../container/Container";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const faqData = [
    {
      question: "হারবাল কি?",
      answer:
        "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
    },
    {
      question: "হারবাল কি?",
      answer:
        "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
    },
    {
      question: "হারবাল কি?",
      answer:
        "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
    },
    {
      question: "হারবাল কি?",
      answer:
        "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
    },
    {
      question: "হারবাল কি?",
      answer:
        "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
    },
    {
      question: "হারবাল কি?",
      answer:
        "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="py-[50px] md:py-[90px] bg-[#fff]">
      <Container>
        <div>
          <h2 className="text-[#151515] text-[40px] md:text-[60px] lg:text-[80px] font-bold text-center">
            প্রশ্ন উত্তর পর্ব
          </h2>
        </div>
        <div className="lg:grid grid-cols-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-500"
            >
              <h3
                className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                onClick={() => toggleAnswer(index, 1)}
              >
                {/* <span
                  onClick={() => toggleAnswer(index, 1)}
                  className="cursor-pointer select-none"
                > */}
                {item.question}
                {/* </span> */}

                <IoIosArrowDown
                    className={`text-[20px] transform ${expandedIndex === index ? 'rotate-180 duration-700' : 'rotate-0 duration-700'}`}
                  />
                {/* <span>
                  <IoIosArrowDown className="text-[20px]"/>
                </span> */}
              </h3>
              {expandedIndex === index && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
