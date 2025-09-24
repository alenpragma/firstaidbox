// app/privacy-policy/page.tsx
"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">গোপনীয়তা নীতি (Privacy Policy)</h1>

      <p className="mb-4">
        <strong>FirstAidBox</strong> আপনার গোপনীয়তাকে সর্বোচ্চ গুরুত্ব দেয় এবং সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ।
        এই নীতিমালায় আমরা ব্যাখ্যা করছি কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষিত করা হয়।
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">১. আমরা যেসব তথ্য সংগ্রহ করি</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>আপনার নাম, ফোন নম্বর, ইমেইল ও ঠিকানা (অর্ডার প্রসেসিং এর জন্য)।</li>
          <li>পেমেন্ট সংক্রান্ত তথ্য <em>(যা শুধুমাত্র নিরাপদ চ্যানেলের মাধ্যমে প্রক্রিয়াকৃত হয়)</em>।</li>
          <li>ওয়েবসাইট ব্যবহারের সময় স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য (যেমন: ব্রাউজার টাইপ, আইপি অ্যাড্রেস, ডিভাইস ইনফরমেশন)।</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">২. তথ্যের ব্যবহার</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>আপনার অর্ডার প্রক্রিয়া ও ডেলিভারি নিশ্চিত করতে।</li>
          <li>গ্রাহক সাপোর্ট প্রদান করতে।</li>
          <li>আমাদের সেবা উন্নত করতে এবং অফার/প্রমোশনাল তথ্য জানাতে।</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৩. তথ্য সুরক্ষা</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>আমরা আপনার তথ্য সুরক্ষার জন্য উপযুক্ত নিরাপত্তা ব্যবস্থা গ্রহণ করি।</li>
          <li>আমরা কখনোই আপনার তথ্য কোনো তৃতীয় পক্ষকে বিক্রি বা ভাড়া দিই না।</li>
          <li>প্রয়োজনে নির্ভরযোগ্য ডেলিভারি ও পেমেন্ট সার্ভিস প্রোভাইডারের সাথে শুধুমাত্র প্রয়োজনীয় তথ্য শেয়ার করা হতে পারে।</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৪. কুকিজ (Cookies)</h2>
        <p>আমাদের ওয়েবসাইটে ব্যবহারকারীর অভিজ্ঞতা উন্নত করা ও সাইটের কার্যকারিতা বাড়ানোর জন্য কুকিজ ব্যবহার করা হতে পারে।</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৫. আপনার অধিকার</h2>
        <p>আপনি চাইলে আমাদের কাছে আপনার ব্যক্তিগত তথ্য <strong>আপডেট</strong> বা <strong>মুছে ফেলার</strong> অনুরোধ করতে পারেন।</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">৬. যোগাযোগ</h2>
        <p>প্রাইভেসি সম্পর্কিত যেকোনো প্রশ্ন বা অনুরোধের জন্য আমাদের সাথে যোগাযোগ করুন:</p>
        <p className="mt-2">📧 <a href="mailto:goodmorningaid@gmail.com" className="text-blue-600 underline">goodmorningaid@gmail.com</a></p>
        <p>📞 <a href="tel:+8801511899175" className="text-blue-600 underline">+880 1511 899 175</a></p>
      </section>
    </div>
  );
}
