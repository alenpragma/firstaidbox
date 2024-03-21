"use client";
import React, { useState } from "react";
import Container from "../container/Container";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-[50px] md:py-[90px] bg-[#fff]">
      <Container>
        <div className="relative lg:h-[400px] h-auto">
          {/* <div className="relative w-full h-full"> */}
          <h2 className="text-[#1E1E1E] lg:text-7xl md:text-5xl text-3xl font-bold text-center my-8">
            প্রশ্ন উত্তর পর্ব
          </h2>
          <div className="lg:absolute w-full">
            <div className="flex px-3 flex-col lg:flex-row justify-center gap-x-3 mx-auto mt-5 mb-10">
              <div className="flex-1 w-full">
                <div className="bg-white p-4 rounded border border-[#2ACB35] m-3">
                  <h3
                    className="text-[#1E1E1E] text-[20px] font-bold flex justify-between cursor-pointer"
                    onClick={() => toggleAccordion(1)}
                  >
                    ফার্স্ট এইড বক্স কি?
                    <IoIosArrowDown
                      className={`${activeIndex === 1
                          ? "rotate-180 duration-500"
                          : "rotate-0 duration-500"
                        } text-3xl`}
                    />
                  </h3>
                  {activeIndex === 1 && (
                    <p>
                      যেকোনো দুর্ঘটনা ঘটার সাথে সাথে তাৎক্ষণিক চিকিৎসার মাধ্যমে
                      দুর্ঘটনা মোকাবেলা করতে যেসব সামগ্রীর প্রয়োজন হয়, সেগুলোর
                      সমন্বয়ে গঠিত বক্সটিকে ফার্স্ট এইড বক্স বলে। এটি যেকোনো
                      স্থানে সহজে বহন করা যায়।
                    </p>
                  )}
                </div>
                <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 cursor-pointer">
                  <h3
                    className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                    onClick={() => toggleAccordion(2)}
                  >
                    কতদিনের মধ্যে ডেলিভারী দেওয়া হয়?
                    <IoIosArrowDown
                      className={`${activeIndex === 2
                          ? "rotate-180 duration-500"
                          : "rotate-0 duration-500"
                        } text-3xl`}
                    />
                  </h3>
                  {activeIndex === 2 && (
                    <p>সাধারণত ৪ থেকে ৫ দিনের মধ্যে ডেলিভারী দেওয়া হয়।</p>
                  )}
                </div>
                <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 cursor-pointer">
                  <h3
                    className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                    onClick={() => toggleAccordion(3)}
                  >
                    ফার্স্ট এইড বক্সের’ উপকরণগুলো শেষ হয়ে গেলে করণীয় কি?
                    <IoIosArrowDown
                      className={`${activeIndex === 3
                          ? "rotate-180 duration-500"
                          : "rotate-0 duration-500"
                        } text-3xl`}
                    />
                  </h3>
                  {activeIndex === 3 && (
                    <p>
                      বক্সের যেকোনো উপকরণ শেষ হয়ে গেলে আমাদের শপ
                      www.goodmorningaid.com থেকে আলাদা আলাদা ভাবে সংগ্রহ করতে
                      পারবেন।
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 cursor-pointer">
                  <h3
                    className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                    onClick={() => toggleAccordion(4)}
                  >
                    কিভাবে মূল্য পরিশোধ করতে হবে?
                    <IoIosArrowDown
                      className={`${activeIndex === 4
                          ? "rotate-180 duration-500"
                          : "rotate-0 duration-500"
                        } text-3xl`}
                    />
                  </h3>
                  {activeIndex === 4 && (
                    <p>
                      ক্যাশ অন ডেলিভারীর মাধ্যমে অর্ডার করতে পারবেন। অথবা মোবাইল
                      ব্যাংকিং হিসেবে নগদ, বিকাশ এবং রকেটের মাধ্যমে অর্থ পরিশোধ
                      করা যাবে।
                    </p>
                  )}
                </div>
                <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 cursor-pointer">
                  <h3
                    className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                    onClick={() => toggleAccordion(5)}
                  >
                    কিভাবে অর্ডার করতে হবে?
                    <IoIosArrowDown
                      className={`${activeIndex === 5
                          ? "rotate-180 duration-500"
                          : "rotate-0 duration-500"
                        } text-3xl`}
                    />
                  </h3>
                  {activeIndex === 5 && (
                    <p>
                      আমাদের ওয়েবসাইটে গিয়ে ‘অর্ডার করুন’ বাটনে ক্লিক করে
                      প্রয়োজনীয় তথ্য পূরণ করে অগ্রিম ২০০ টাকা পরিশোধ করলেই আপনার
                      অর্ডারটি কনফার্ম হয়ে যাবে। অথবা যেকোনো প্রয়োজনে
                      ০১৮৩১৮৯৯১৭৫ এই নম্বরে কল করতে পারেন।
                    </p>
                  )}
                </div>
                <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 cursor-pointer">
                  <h3
                    className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                    onClick={() => toggleAccordion(6)}
                  >
                    ডেলিভারী চার্জ কি প্রযোজ্য ?
                    <IoIosArrowDown
                      className={`${activeIndex === 6
                          ? "rotate-180 duration-500"
                          : "rotate-0 duration-500"
                        } text-3xl`}
                    />
                  </h3>
                  {activeIndex === 6 && (
                    <p>
                      না। সারাদেশে ফ্রি ডেলিভারী দেওয়া হবে। তবে অর্ডার কনফার্ম
                      করতে অগ্রিম ২০০ টাকা আমাদের অফিসিয়াল বিকাশ মার্চেন্ট
                      ০১৮৩১৮৯৯১৭৫ এই নাম্বারে পে করতে হবে। বাকী টাকা প্রোডাক্ট
                      হাতে পাওয়ার পর পরিশোধ করা যাবে।{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;

// "use client";
// import React, { useState } from "react";
// import Container from "../container/Container";
// import { IoIosArrowDown } from "react-icons/io";

// const Faq = () => {
//   const faqData = [
//     {
//       question: "হারবাল কি?",
//       answer:
//         "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
//     },
//     {
//       question: "হারবাল কি?",
//       answer:
//         "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
//     },
//     {
//       question: "হারবাল কি?",
//       answer:
//         "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
//     },
//     {
//       question: "হারবাল কি?",
//       answer:
//         "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
//     },
//     {
//       question: "হারবাল কি?",
//       answer:
//         "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
//     },
//     {
//       question: "হারবাল কি?",
//       answer:
//         "উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।",
//     },
//   ];
//   // const faqData = [
//   //   {
//   //     question: "What is JavaScript?",
//   //     answer:
//   //       "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
//   //   },
//   //   {
//   //     question: "What is JavaScript?",
//   //     answer:
//   //       "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
//   //   },
//   //   {
//   //     question: "What is JavaScript?",
//   //     answer:
//   //       "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
//   //   },
//   //   {
//   //     question: "What is JavaScript?",
//   //     answer:
//   //       "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
//   //   },
//   //   {
//   //     question: "What is JavaScript?",
//   //     answer:
//   //       "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
//   //   },
//   //   {
//   //     question: "What is JavaScript?",
//   //     answer:
//   //       "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
//   //   },
//   // ];
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const toggleAnswer = (index) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   // const [expandedIndex1, setExpandedIndex1] = useState(null);
//   // const [expandedIndex2, setExpandedIndex2] = useState(null);

//   // const toggleAnswer1 = (index) => {
//   //   setExpandedIndex1((prevIndex) => (prevIndex === index ? null : index));
//   // };
//   // const toggleAnswer2 = (index) => {
//   //   setExpandedIndex2((prevIndex) => (prevIndex === index ? null : index));
//   // };

//   return (
//     <div className="py-[50px] md:py-[90px] bg-[#fff]">
//       <Container>
//         {/* <div className="relative w-full h-full"> */}
//         <h2 className="text-[#1E1E1E] lg:text-7xl md:text-5xl text-3xl font-bold text-center my-8">
//         প্রশ্ন উত্তর পর্ব
//         </h2>
//         <div className="grid grid-cols-2">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded border border-[#2ACB35] m-3"
//               >
//                 <h3
//                   className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
//                   onClick={() => toggleAnswer(index, 1)}
//                 >
//                   {item.question}
//                   <IoIosArrowDown
//                     className={`text-[20px] transform ${
//                       expandedIndex === index
//                         ? "rotate-180 duration-700"
//                         : "rotate-0 duration-700"
//                     }`}
//                   />
//                 </h3>
//                 {expandedIndex === index && <p>{item.answer}</p>}
//               </div>
//             ))}
//           </div>
//       </Container>
//     </div>
//   );
// };

// export default Faq;
