"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            গোপনীয়তা (Privacy Policy)
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            FirstAidBox আপনার গোপনীয়তাকে সম্মান করে এবং সুরক্ষিত রাখতে
            প্রতিশ্রুতিবদ্ধ। এই নীতিমালা ব্যাখ্যা করে আমরা কীভাবে আপনার
            ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত করি।
          </p>
        </header>

        <section className="space-y-6 text-gray-800 leading-relaxed">
          <article>
            <h2 className="text-xl font-medium">১. সংগৃহীত তথ্য</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                আপনার নাম, ফোন নম্বর, ইমেইল, ঠিকানা (অর্ডার প্রসেসিং এর জন্য)।
              </li>
              <li>
                পেমেন্ট সংক্রান্ত তথ্য (শুধুমাত্র নিরাপদ চ্যানেলের মাধ্যমে
                প্রক্রিয়াকৃত হয়)।
              </li>
              <li>
                ওয়েবসাইট ব্যবহারের সময় স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য (যেমন:
                ব্রাউজার টাইপ, আইপি অ্যাড্রেস, ডিভাইস ইনফরমেশন)।
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">২. তথ্যের ব্যবহার</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>আপনার অর্ডার প্রক্রিয়া করতে।</li>
              <li>গ্রাহক সাপোর্ট ও ডেলিভারি নিশ্চিত করতে।</li>
              <li>আমাদের সেবা উন্নত করতে ও অফার/প্রমোশনাল তথ্য জানাতে।</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">৩. তথ্য সুরক্ষা</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                আমরা আপনার তথ্য সুরক্ষার জন্য উপযুক্ত নিরাপত্তা ব্যবস্থা গ্রহণ
                করি।
              </li>
              <li>আমরা আপনার তথ্য কোনো তৃতীয় পক্ষকে বিক্রি বা ভাড়া দিই না।</li>
              <li>
                শুধুমাত্র নির্ভরযোগ্য ডেলিভারি/পেমেন্ট সার্ভিস প্রোভাইডারের সাথে
                প্রয়োজনীয় তথ্য শেয়ার করা হতে পারে।
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">৪. কুকিজ (Cookies)</h2>
            <p className="mt-2">
              ওয়েবসাইট উন্নয়ন ও ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে আমরা কুকিজ
              ব্যবহার করতে পারি।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">৫. আপনার অধিকার</h2>
            <p className="mt-2">
              আপনি চাইলে আমাদের কাছে আপনার তথ্য মুছে ফেলার বা আপডেট করার অনুরোধ
              করতে পারেন।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">৬. যোগাযোগ</h2>
            <div className="mt-2 space-y-1">
              <p>প্রাইভেসি সম্পর্কিত প্রশ্ন থাকলে যোগাযোগ করুন:</p>
              <address className="not-italic">
                <p>
                  📧{" "}
                  <a
                    href="mailto:goodmorningaid@gmail.com"
                    className="underline"
                  >
                    goodmorningaid@gmail.com
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a href="tel:+8801511899175" className="underline">
                    +880 1511 899 175
                  </a>
                </p>
              </address>
            </div>
          </article>
        </section>

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} FirstAidBox. সমস্ত অধিকার সংরক্ষিত।
          </p>
        </footer>
      </div>
    </main>
  );
}
