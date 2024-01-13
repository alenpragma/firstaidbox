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
            <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000">
              <h3
                className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                onClick={() => toggleAccordion(1)}
              >
                হারবাল কি?
                <IoIosArrowDown />
              </h3>
              {activeIndex === 1 && (
                <div>
                  <div className=" bg-white px-3 py-1  rounded">
                    <p>
                      উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000">
              <h3
                className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                onClick={() => toggleAccordion(2)}
              >
                হারবাল কি?
                <IoIosArrowDown />
              </h3>
              {activeIndex === 2 && (
                <div>
                  <div className=" bg-white px-3 py-1  rounded">
                    <p>
                      উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000">
              <h3
                className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                onClick={() => toggleAccordion(3)}
              >
                হারবাল কি?
                <IoIosArrowDown />
              </h3>
              {activeIndex === 3 && (
                <div>
                  <div className=" bg-white px-3 py-1  rounded">
                    <p>
                      উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000">
              <h3
                className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                onClick={() => toggleAccordion(4)}
              >
                হারবাল কি?
                <IoIosArrowDown />
              </h3>
              {activeIndex === 4 && (
                <div>
                  <div className=" bg-white px-3 py-1  rounded">
                    <p>
                      উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000">
              <h3
                className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                onClick={() => toggleAccordion(5)}
              >
                হারবাল কি?
                <IoIosArrowDown />
              </h3>
              {activeIndex === 5 && (
                <div>
                  <div className=" bg-white px-3 py-1  rounded">
                    <p>
                      উদ্ভিদজাত ভেষজ (হারবাল) হলো উদ্ভিদবিজ্ঞান এবং ঔষধি উদ্ভিদের একটি ব্যবহার। মানব ইতিহাসে চিকিৎসার জন্য উদ্ভিদই ছিল প্রধান ভরসা, এবং এই ধরনের ঔষধ বর্তমানেও ব্যবহার করা হয়। আধুনিক ঔষধগুলো অনেক বস্তু ব্যবহার করে যেগুলো উদ্ভিদ থেকে নেয়া হয়।
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000">
              <h3
                className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
                onClick={() => toggleAccordion(6)}
              >
                হারবাল কি?
                <IoIosArrowDown />
              </h3>
              {activeIndex === 6 && (
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae sint quibusdam sunt similique nulla tempore fuga voluptas numquam nisi.</p>
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
//                 className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000"
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

// {
//   /* <div className="lg:grid grid-cols-2">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000"
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
//           </div> */
// }

// // <div className="w-full">
// // <div className="">
// //   <h2 className="text-[#151515] text-[40px] md:text-[60px] lg:text-[80px] font-bold text-center">
// //     Faq
// //   </h2>
// // </div>
// // <div className="relative lg:h-full">
// //   <div className="lg:flex gap-5 lg:absolute w-full">
// //     <div className="flex-1">
// //       {faqData.slice(0, 3).map((item, index) => (
// //         <div
// //           key={index}
// //           className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000"
// //         >
// //           <h3
// //             className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
// //             onClick={() => toggleAnswer1(index, 1)}
// //           >
// //             {item.question}
// //             <IoIosArrowDown
// //               className={`text-[20px] transform ${
// //                 expandedIndex1 === index
// //                   ? "rotate-180 duration-700"
// //                   : "rotate-0 duration-700"
// //               }`}
// //             />
// //           </h3>
// //           {expandedIndex1 === index && <p>{item.answer}</p>}
// //         </div>
// //       ))}
// //     </div>
// //     <div className="flex-1 left-0">
// //       {faqData.slice(3, 6).map((item, index) => (
// //         <div
// //           key={index}
// //           className="bg-white p-4 rounded border border-[#2ACB35] m-3 duration-1000"
// //         >
// //           <h3
// //             className="text-[#1E1E1E] text-[20px] font-bold flex justify-between"
// //             onClick={() => toggleAnswer2(index, 1)}
// //           >
// //             {item.question}
// //             <IoIosArrowDown
// //               className={`text-[20px] transform ${
// //                 expandedIndex2 === index
// //                   ? "rotate-180 duration-700"
// //                   : "rotate-0 duration-700"
// //               }`}
// //             />
// //           </h3>
// //           {expandedIndex2 === index && <p>{item.answer}</p>}
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </div>
// // </div>
