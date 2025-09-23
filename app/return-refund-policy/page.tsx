"use client";

import React from "react";

export default function ReturnRefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            রিটার্ন ও রিফান্ড পলিসি (Return & Refund Policy)
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            FirstAidBox গ্রাহকদের সন্তুষ্টিকে সর্বাধিক গুরুত্ব দেয়। আমাদের রিটার্ন ও রিফান্ড নীতিমালা নিম্নরূপ:
          </p>
        </header>

        <section className="space-y-6 text-gray-800 leading-relaxed">
          <article>
            <h2 className="text-xl font-medium">১. রিটার্নের শর্ত</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>ভুল, ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ পণ্য প্রাপ্ত হলে পণ্য পাওয়ার ৭ দিনের মধ্যে আমাদের জানাতে হবে।</li>
              <li>পণ্য অবশ্যই আসল অবস্থায় (অব্যবহৃত, অক্ষত ও আসল প্যাকেজিং সহ) ফেরত দিতে হবে।</li>
              <li>স্বাস্থ্য সুরক্ষার কারণে ব্যবহৃত ফার্স্ট এইড সামগ্রী রিটার্নযোগ্য নয় (যদি না তা ডেলিভারির সময় থেকেই ক্ষতিগ্রস্ত থাকে)।</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">২. রিফান্ড</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>রিটার্ন অনুমোদিত হলে আমরা রিফান্ড প্রদান করবো।</li>
              <li>রিফান্ড সাধারণত ৭-১০ কার্যদিবসের মধ্যে প্রক্রিয়া করা হবে।</li>
              <li>রিফান্ড আপনার মূল পেমেন্ট পদ্ধতিতেই প্রদান করা হবে।</li>
              <li>শিপিং খরচ (যদি প্রযোজ্য হয়) রিফান্ডযোগ্য নয়।</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">৩. এক্সচেঞ্জ</h2>
            <p className="mt-2">
              ত্রুটিপূর্ণ বা ভুল পণ্য পেলে গ্রাহক রিফান্ডের পরিবর্তে নতুন পণ্য পাওয়ার জন্য এক্সচেঞ্জ চাইতে পারেন।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">৪. ক্যানসেলেশন</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>পণ্য প্রেরণের আগে অর্ডার বাতিল করা যাবে।</li>
              <li>প্রেরণের পর বাতিল করা সম্ভব নয়, তবে রিটার্ন নীতিমালা প্রযোজ্য হবে।</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">৫. যোগাযোগ</h2>
            <div className="mt-2 space-y-1">
              <p>রিটার্ন বা রিফান্ডের জন্য আমাদের কাস্টমার সার্ভিস টিমের সাথে যোগাযোগ করুন:</p>
              <address className="not-italic">
                <p>📧 <a href="mailto:goodmorningaid@gmail.com" className="underline">goodmorningaid@gmail.com</a></p>
                <p>📞 <a href="tel:+8801511899175" className="underline">+880 1511 899 175</a></p>
              </address>
            </div>
          </article>
        </section>

        <footer className="mt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FirstAidBox. সমস্ত অধিকার সংরক্ষিত।</p>
        </footer>
      </div>
    </main>
  );
}
