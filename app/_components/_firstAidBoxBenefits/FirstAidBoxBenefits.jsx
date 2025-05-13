import {
  CheckCircle,
  Package,
  Truck,
  Stethoscope,
  RefreshCcw,
  MapPin,
} from "lucide-react";
import Container from "../container/Container";

export default function FirstAidBoxBenefits() {
  const benefits = [
    {
      icon: <Package className="h-8 w-8 text-blue-500" />,
      title: "সম্পূর্ণ সমাধান",
      description:
        "প্রাথমিক চিকিৎসার জন্য প্রয়োজনীয় সকল উপকরণ এক বক্সে পেয়ে যাবেন।",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "জীবাণুমুক্ত ও প্রস্তুত",
      description:
        "প্রতিটি সরঞ্জাম জীবাণুমুক্ত এবং তাৎক্ষণিক ব্যবহারের জন্য উপযুক্ত।",
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-500" />,
      title: "পোর্টেবল",
      description: "ঘরে, ভ্রমণে বা কর্মস্থলে সহজেই বহন ও ব্যবহারযোগ্য।",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-purple-500" />,
      title: "বিনামূল্যে পরামর্শ",
      description:
        "বক্সের সাথে পাচ্ছেন বিনামূল্যে ডাক্তারের পরামর্শ নেওয়ার সুযোগ।",
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-orange-500" />,
      title: "পুনঃসংগ্রহ সুবিধা",
      description:
        "বক্সের যেকোনো পন্য শেষ হয়ে গেলে পুনরায় আলাদাভাবে সংগ্রহ করতে পারবেন।",
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: "সহজ পেমেন্ট ‍সুবিধা ",
      description:
        "অর্ডার কনফার্মে মাত্র ২০০ টাকা অগ্রিম পেমেন্ট করে, বাকি টাকা প্রোডাক্ট হাতে পাওয়ার পর পরিশোধ করা যাবে।",
    },
  ];

  return (
    <Container>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-[#1E1E1E] lg:text-7xl md:text-5xl text-3xl font-bold text-center my-8">
            আমাদের ফাস্ট এইড বক্স কেন নিবেন?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold  md:text-2xl ">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
