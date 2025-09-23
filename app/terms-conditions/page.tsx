"use client";

import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">শর্তাবলী (Terms & Conditions)</h1>
          <p className="mt-2 text-sm text-gray-600">
            FirstAidBox-এ স্বাগতম। এই শর্তাবলী আমাদের ওয়েবসাইট, সেবা এবং পণ্য ব্যবহারের ক্ষেত্রে প্রযোজ্য।
          </p>
        </header>

        <section className="space-y-6 text-gray-800 leading-relaxed">
          <article>
            <h2 className="text-xl font-medium">১. সংজ্ঞা</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>
                <strong>গ্রাহক/আপনি/আপনার</strong> – যেকোনো ব্যক্তি বা প্রতিষ্ঠান যারা আমাদের ওয়েবসাইট
                ব্যবহার করেন বা পণ্য ক্রয় করেন।
              </li>
              <li>
                <strong>পণ্য</strong> – ফার্স্ট এইড সামগ্রী, সরঞ্জাম বা আমাদের ওয়েবসাইটে প্রদত্ত অন্যান্য
                পণ্য।
              </li>
              <li>
                <strong>সেবা</strong> – আমাদের প্রদত্ত অতিরিক্ত সেবা (যদি থাকে)।
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">২. ওয়েবসাইট ব্যবহারের শর্ত</h2>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>ওয়েবসাইট ব্যবহারের জন্য আপনাকে আইন অনুযায়ী প্রাপ্তবয়স্ক হতে হবে।</li>
              <li>আপনি ওয়েবসাইট শুধুমাত্র বৈধ উদ্দেশ্যে ব্যবহার করতে পারবেন।</li>
              <li>
                আপনি ওয়েবসাইটে কোনো ধরনের ক্ষতিকর কার্যকলাপ (যেমন হ্যাকিং, ভাইরাস ছড়ানো, স্প্যামিং
                ইত্যাদি) করবেন না।
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-xl font-medium">৩. পণ্য ও অর্ডার</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <strong>অর্ডার গ্রহণ:</strong> প্রতিটি অর্ডার পণ্যের প্রাপ্যতা ও মূল্য যাচাইয়ের ওপর
                নির্ভরশীল। আমরা যেকোনো অর্ডার বাতিল করার অধিকার সংরক্ষণ করি।
              </li>
              <li>
                <strong>মূল্য:</strong> ওয়েবসাইটে প্রদত্ত দামই কার্যকর হবে। দাম ও প্রাপ্যতা পূর্ব
                ঘোষণা ছাড়াই পরিবর্তিত হতে পারে।
              </li>
              <li>
                <strong>পেমেন্ট:</strong> ওয়েবসাইটে প্রদর্শিত পদ্ধতিতেই মূল্য পরিশোধ করতে হবে এবং সব লেনদেন
                নিরাপদভাবে সম্পন্ন হবে।
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">৪. শিপিং ও ডেলিভারি</h2>
            <p className="mt-2">
              শিপিংয়ের শর্ত (খরচ, সময়সীমা, পদ্ধতি) চেকআউটের সময় দেখানো হবে। ডেলিভারি সময় অনুমানভিত্তিক
              এবং এটি অর্ডারের তারিখ থেকে নয়, বরং প্রেরণের তারিখ থেকে গণনা করা হবে। কাস্টমস, ডাক বিভাগ বা
              আমাদের নিয়ন্ত্রণের বাইরে যেকোনো কারণে দেরির জন্য আমরা দায়ী নই।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">৫. রিটার্ন, রিফান্ড ও বাতিলকরণ</h2>
            <p className="mt-2">
              বাংলাদেশের কনজিউমার রাইটস প্রোটেকশন আইন ২০০৯ এবং ডিজিটাল কমার্স নীতিমালা ২০২১ অনুযায়ী:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <strong>রিটার্ন/এক্সচেঞ্জ:</strong> ভুল/ক্ষতিগ্রস্ত/ত্রুটিপূর্ণ পণ্য প্রাপ্ত হলে গ্রাহক পণ্য
                পাওয়ার ৭ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জের আবেদন করতে পারবেন। স্বাস্থ্য সুরক্ষার কারণে
                ওপেন/ব্যবহৃত ফার্স্ট এইড সামগ্রী রিটার্নযোগ্য নয় (যদি না তা ডেলিভারির সময় থেকেই ত্রুটিপূর্ণ
                হয়)।
              </li>
              <li>
                <strong>বাতিলকরণ:</strong> পণ্য প্রেরণের পূর্বে গ্রাহক অর্ডার বাতিল করতে পারবেন। প্রেরণের
                পর বাতিল করা সম্ভব নয়, তবে রিটার্ন নীতিমালা প্রযোজ্য হবে।
              </li>
              <li>
                <strong>রিফান্ড:</strong> রিটার্ন অনুমোদিত হলে রিফান্ড করা হবে ৭-১০ কার্যদিবসের মধ্যে। রিফান্ড মূল
                পেমেন্ট মাধ্যমেই প্রদান করা হবে।
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-medium">৬. মেধাস্বত্ব (Intellectual Property)</h2>
            <p className="mt-2">
              ওয়েবসাইটের সব কনটেন্ট (ডিজাইন, টেক্সট, গ্রাফিক্স, ইমেজ, লোগো, পণ্যের ছবি ইত্যাদি) আমাদের
              নিজস্ব অথবা আমাদের লাইসেন্সকৃত এবং আইন দ্বারা সুরক্ষিত। আমাদের পূর্বানুমতি ছাড়া এগুলো কপি,
              পুনঃপ্রকাশ, ডাউনলোড বা ব্যবহার করা যাবে না।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">৭. দায়স্বীকার ও সীমাবদ্ধতা</h2>
            <p className="mt-2">
              আমাদের পণ্যগুলো শুধুমাত্র প্রাথমিক চিকিৎসা (First Aid) এর জন্য। এগুলো পেশাদার চিকিৎসা
              পরামর্শ, নির্ণয় বা চিকিৎসার বিকল্প নয়। যেকোনো স্বাস্থ্য সমস্যা হলে যোগ্য চিকিৎসকের পরামর্শ
              নিন। আমরা ওয়েবসাইট সবসময় নিরবিচ্ছিন্ন, ত্রুটিমুক্ত বা ভাইরাসমুক্ত থাকবে তা নিশ্চিত করি না। আইনের
              সর্বোচ্চ সীমা পর্যন্ত, ওয়েবসাইট ব্যবহার বা পণ্য ক্রয়ের কারণে কোনো প্রকার সরাসরি বা পরোক্ষ ক্ষতির
              জন্য FirstAidBox দায়ী থাকবে না।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">৮. ভোক্তার অধিকার</h2>
            <p className="mt-2">
              বাংলাদেশের ভোক্তা অধিকার আইন অনুযায়ী: গ্রাহক সঠিক তথ্য জানার অধিকার রাখেন। গ্রাহক প্রতারণা,
              ভেজাল বা ত্রুটিপূর্ণ পণ্যের বিরুদ্ধে অভিযোগ করতে পারবেন। অভিযোগ জানাতে আমাদের সাপোর্ট টিমের
              সাথে যোগাযোগ করুন অথবা জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ দাখিল করতে পারেন।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">৯. শর্তাবলীর পরিবর্তন</h2>
            <p className="mt-2">
              আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন বা হালনাগাদ করার অধিকার সংরক্ষণ করি। পরিবর্তিত
              শর্তাবলী এই পৃষ্ঠায় প্রকাশিত হবে। ওয়েবসাইট ব্যবহার বা পণ্য ক্রয় অব্যাহত রাখলে আপনি নতুন
              শর্তাবলীর সাথে একমত হয়েছেন বলে গণ্য হবে।
            </p>
          </article>

          <article>
            <h2 className="text-xl font-medium">১০. যোগাযোগ</h2>
            <div className="mt-2 space-y-1">
              <p>যদি এই শর্তাবলী নিয়ে কোনো প্রশ্ন থাকে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:</p>
              <address className="not-italic">
                <p className="font-semibold">Goodmorning Aid</p>
                <p>শান্তিনগর, বাস স্টেশন রোড, খাগড়াছড়ি সদর</p>
                <p>
                  ইমেইল: <a href="mailto:goodmorningaid@gmail.com" className="underline">goodmorningaid@gmail.com</a>
                </p>
                <p>ফোন: <a href="tel:+8801511899175" className="underline">+880 1511 899 175</a></p>
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
