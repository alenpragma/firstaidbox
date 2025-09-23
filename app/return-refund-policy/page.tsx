// app/return-refund-policy/page.tsx
"use client";

import React from "react";

export default function ReturnRefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        💳 রিটার্ন ও রিফান্ড পলিসি (Return & Refund Policy)
      </h1>

      <p className="mb-4">
        <strong>FirstAidBox</strong> গ্রাহকদের সন্তুষ্টিকে সর্বাধিক গুরুত্ব দেয়।
        আমাদের রিটার্ন ও রিফান্ড নীতিমালা নিম্নরূপ:
      </p>

      {/* ১. রিটার্নের শর্ত */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">১. রিটার্নের শর্ত</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            ভুল, ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ পণ্য প্রাপ্ত হলে পণ্য পাওয়ার ৭ দিনের
            মধ্যে আমাদের জানাতে হবে।
          </li>
          <li>
            পণ্য অবশ্যই আসল অবস্থায় (অব্যবহৃত, অক্ষত ও আসল প্যাকেজিং সহ) ফেরত
            দিতে হবে।
          </li>
          <li>
            স্বাস্থ্য সুরক্ষার কারণে ব্যবহৃত ফার্স্ট এইড সামগ্রী রিটার্নযোগ্য নয়
            (যদি না তা ডেলিভারির সময় থেকেই ক্ষতিগ্রস্ত থাকে)।
          </li>
        </ul>
      </section>

      {/* ২. রিফান্ড */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">২. রিফান্ড</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>রিটার্ন অনুমোদিত হলে আমরা রিফান্ড প্রদান করবো।</li>
          <li>রিফান্ড সাধারণত ৭-১০ কার্যদিবসের মধ্যে প্রক্রিয়া করা হবে।</li>
          <li>রিফান্ড আপনার মূল পেমেন্ট পদ্ধতিতেই প্রদান করা হবে।</li>
          <li>শিপিং খরচ (যদি প্রযোজ্য হয়) রিফান্ডযোগ্য নয়।</li>
        </ul>
      </section>

      {/* ৩. এক্সচেঞ্জ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৩. এক্সচেঞ্জ</h2>
        <p>
          ত্রুটিপূর্ণ বা ভুল পণ্য পেলে গ্রাহক রিফান্ডের পরিবর্তে নতুন পণ্য
          পাওয়ার জন্য এক্সচেঞ্জ চাইতে পারেন।
        </p>
      </section>

      {/* ৪. ক্যানসেলেশন */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৪. ক্যানসেলেশন</h2>
        <p>
          পণ্য প্রেরণের আগে অর্ডার বাতিল করা যাবে। প্রেরণের পর বাতিল করা সম্ভব
          নয়, তবে রিটার্ন নীতিমালা প্রযোজ্য হবে।
        </p>
      </section>

      {/* ৫. যোগাযোগ */}
      <section>
        <h2 className="text-xl font-semibold mb-2">৫. যোগাযোগ</h2>
        <p>
          রিটার্ন বা রিফান্ডের জন্য আমাদের কাস্টমার সার্ভিস টিমের সাথে যোগাযোগ
          করুন:
        </p>
        <p className="mt-2">
          📧{" "}
          <a
            href="mailto:goodmorningaid@gmail.com"
            className="text-blue-600 underline"
          >
            goodmorningaid@gmail.com
          </a>
        </p>
        <p>
          📞{" "}
          <a href="tel:+8801511899175" className="text-blue-600 underline">
            +880 1511 899 175
          </a>
        </p>
      </section>
    </div>
  );
}
