"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Copy } from "lucide-react";
// import showSuccessModal from "../_toast/ToastAlert";
import { ShowSuccessModal } from "../_toast/ToastAlert";

// Images
import firstairimage from "../../assets/img/p-03.png";
import bkash from "../../../public/first-aid-img/bkash.png";
import nagad from "../../../public/first-aid-img/nagad.png";

const decription = [
  {
    method: "bkash",
    descrip:
      "আপনার অর্ডারটি কনফার্ম করতে অগ্রিম ২০০ টাকা আমাদের অফিসিয়াল বিকাশ মার্চেন্ট ০১৮৩১৮৯৯১৭৫ এই নাম্বারে পেমেন্ট করতে হবে। বাকী টাকা প্রোডাক্ট হাতে পাওয়ার পর পরিশোধ করা যাবে।",
    phone: "01831899175",
  },
  {
    method: "nagad",
    descrip:
      "আপনার অর্ডারটি কনফার্ম করতে অগ্রিম ২০০ টাকা আমাদের অফিসিয়াল নগদ পার্সোনাল ০১৮১৬৫৭৫২২৫  এই নাম্বারে সেন্ড মানি করতে হবে। বাকী টাকা প্রোডাক্ট হাতে পাওয়ার পর পরিশোধ করা যাবে।",
    phone: "01816575225",
  },
];

const CheckOut = () => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1500);
  const [delivery] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [singlePrice] = useState(1500);
  const [showForm, setShowForm] = useState(false);
  const [payment, setPayment] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setTotalPrice(count * singlePrice);
  }, [count]);

  useEffect(() => {
    setDiscountPrice((totalPrice / 100) * 0);
    setTax((totalPrice / 100) * 0);
  }, [totalPrice]);

  const copyToClipboard = () => {
    const mobileNumber = "01685720308";
    navigator.clipboard.writeText(mobileNumber);
    alert("Copied to clipboard: " + mobileNumber);
  };

  const handlePaymentSelection = (selectedPayment) => {
    setPayment(selectedPayment);
    setShowForm(true);
  };

  const decressCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const incressCount = () => {
    setCount((prev) => prev + 1);
  };

  const onSubmit = (data) => {
    console.log(data);
    ShowSuccessModal();
    return;
    const orderData = {
      ...data,
      quantity: count,
      price: totalPrice + delivery + tax - discountPrice,
      payment: payment,
    };

    if (!payment) {
      alert("Select payment method");
      return;
    }

    const isAnyValueEmpty = Object.values(orderData).some(
      (value) => value === ""
    );
    if (isAnyValueEmpty) {
      alert("All fields are required");
      return;
    }

    fetch("https://firstaidbox-admin-sigma.vercel.app/api/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        alert("Successfully ordered!");
        reset();
        setPayment("");
        setShowForm(false);
        setCount(1);
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div id="orderNow" className="py-[50px] md:py-[90px] bg-[#E5E5E5]">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-[#1D1D1D]">
            Checkout Page
          </h2>

          <div className="lg:flex gap-5">
            {/* Left Side */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Contact */}
              <div className="bg-white px-5 py-10 rounded">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                    className={`${
                      errors.firstName ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                    className={`${
                      errors.lastName ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    {...register("phone", { required: true })}
                    className={`${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                    className={`${
                      errors.email ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="bg-white px-5 py-10 rounded">
                <h3 className="text-2xl font-bold mb-2">Address</h3>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Road / House"
                    {...register("roadHouse", { required: true })}
                    className={`${
                      errors.roadHouse ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="text"
                    placeholder="Police Station"
                    {...register("policeStation", { required: true })}
                    className={`${
                      errors.policeStation
                        ? "border-red-500"
                        : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="text"
                    placeholder="Your District"
                    {...register("district", { required: true })}
                    className={`${
                      errors.district ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="number"
                    placeholder="Zip Code"
                    {...register("zipCode", { required: true })}
                    className={`${
                      errors.zipCode ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                </div>
              </div>

              {/* Additional */}
              <div className="bg-white px-5 py-10 rounded">
                <h3 className="text-2xl font-bold mb-2">
                  Additional Information
                </h3>
                <textarea
                  rows="5"
                  placeholder="Write your note..."
                  {...register("info", { required: true })}
                  className={`w-full ${
                    errors.info ? "border-red-500" : "border-slate-200"
                  } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 bg-white p-5 rounded flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Shopping Cart</h3>
              <div className="flex gap-4 items-center">
                <Image
                  src={firstairimage}
                  alt="product"
                  width={120}
                  height={120}
                />
                <div>
                  <h4 className="font-semibold text-lg">First Aid Box</h4>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      type="button"
                      onClick={decressCount}
                      className="w-8 h-8 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="text-xl">{count}</span>
                    <button
                      type="button"
                      onClick={incressCount}
                      className="w-8 h-8 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳ {totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>৳ {tax}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>৳ {discountPrice}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>৳ {totalPrice + tax - discountPrice}</span>
              </div>
              <h4 className="text-xl font-semibold mt-4">
                Select Payment Method
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {[bkash, nagad].map((img, i) => {
                  const method = img?.src?.includes("cash")
                    ? "cash"
                    : img?.src?.includes("bkash")
                    ? "bkash"
                    : "nagad";
                  return (
                    <div
                      key={i}
                      onClick={() => handlePaymentSelection(method)}
                      className={`border-2 cursor-pointer p-2 rounded ${
                        payment === method
                          ? "border-green-500"
                          : "border-slate-300"
                      }`}
                    >
                      <Image src={img} alt="payment" width={70} height={40} />
                    </div>
                  );
                })}
              </div>
              {showForm && (
                <div className="mt- p-4 bg-gray-100 rounded">
                  {decription
                    .filter((item) => item.method === payment)
                    .map((item, index) => (
                      <div key={index}>
                        <p className="mb-2 text-gray-700">{item.descrip}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{item.phone}</span>
                          <Copy
                            className="w-5 h-5 text-gray-600 cursor-pointer"
                            onClick={() => {
                              navigator.clipboard.writeText(item.phone);
                              alert("Copied to clipboard: " + item.phone);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              )}

              <button
                type="submit"
                className="bg-green-600 text-white py-3 rounded mt-4 hover:bg-green-700 transition"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default CheckOut;
