"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import Image from "next/image";
import { useForm } from "react-hook-form";

// Images
import firstairimage from "../../assets/img/p-03.png";
import bkash from "../../../public/first-aid-img/bkash.png";
import nagad from "../../../public/first-aid-img/nagad.png";
import { useGetData } from "../../../lib/fetch/useGetData";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../lib/fetch/AxiosInstance";
import toast from "react-hot-toast";

// COD image
const codImg =
  "https://d28wu8o6itv89t.cloudfront.net/images/Cashondeliveryjpgjpg-1594648666434.jpeg";

// Payment descriptions
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
  {
    method: "cod",
    descrip: "ক্যাশ অন ডেলিভারিতে পেমেন্ট করুন",
  },
];

// Payment options
const paymentMethods = [
  { method: "cod", img: codImg },
  { method: "bkash", img: bkash },
  { method: "nagad", img: nagad },
];

const CheckOut = () => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [payment, setPayment] = useState("cod"); // default COD
  const [copyTimeout, setCopyTimeout] = useState(false);

  const { data, isLoading } = useGetData(["products"], `/products`);
  const { data: deliveryOption, isLoading: deliveryLoading } = useGetData(
    ["delivery"],
    `/delivery-options`
  );

  const deliveryOptions = deliveryOption?.data;
  const produts = data?.data?.data[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Update total price when count or product changes
  useEffect(() => {
    if (produts?.discount_price) {
      setTotalPrice(count * Number(produts?.discount_price));
    }
  }, [count, produts]);

  // Calculate discount & tax
  useEffect(() => {
    const price = Number(totalPrice) || 0;
    setDiscountPrice((price * 0) / 100); // set your discount %
    setTax((price * 0) / 100); // set your tax %
  }, [totalPrice]);

  // Copy phone to clipboard
  const copyToClipboard = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopyTimeout(true);
    setTimeout(() => setCopyTimeout(false), 1000);
  };

  const handlePaymentSelection = (selectedPayment) => {
    setPayment(selectedPayment);
  };

  const decressCount = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const incressCount = () => {
    if (count < produts?.total_stock) {
      setCount((prev) => prev + 1);
    } else {
      toast.error(`Maximum available stock is ${produts?.total_stock}`, {
        position: "bottom-center",
      });
    }
  };

  // Handle delivery change
  const handleDeliveryChange = (e) => {
    const selected = deliveryOptions.find(
      (opt) => opt.id === Number(e.target.value)
    );
    setDelivery(Number(selected?.charge) || 0);
  };

  // Mutation for creating order
  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(`/orders`, data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message, { position: "bottom-center" });
      reset();
    },
    onError: (err) => {
      console.log(err);
      toast.error("Something went wrong", { position: "bottom-center" });
    },
  });

  const onSubmit = (formData) => {
    const orderData = {
      ...formData,
      price: totalPrice + tax + delivery - discountPrice,
      delivery_charge: delivery,
      payment_method: payment,
      items: [
        {
          product_id: produts?.id,
          quantity: count,
        },
      ],
    };

    if (!payment) {
      alert("Select payment method");
      return;
    }

    const isAnyValueEmpty = Object.values(orderData).some(
      (value) => value === "" || value === undefined
    );
    if (isAnyValueEmpty) {
      alert("All fields are required");
      return;
    }

    console.log("Order Data:", orderData);
    mutate(orderData);
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

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
              {/* Contact Information */}
              <div className="bg-white px-5 py-10 rounded">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <div className="grid grid-cols-1 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className={`${
                      errors.name ? "border-red-500" : "border-slate-200"
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
                    {...register("address", { required: true })}
                    className={`${
                      errors.email ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="bg-white px-5 py-10 rounded">
                <h3 className="text-2xl font-bold mb-2">Address</h3>
                <div className="grid grid-cols-12 gap-3">
                  <input
                    type="text"
                    placeholder="Your District"
                    {...register("district", { required: true })}
                    className={`${
                      errors.district ? "border-red-500" : "border-slate-200"
                    } border-2 col-span-12 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="text"
                    placeholder="Thana"
                    {...register("thana", { required: true })}
                    className={`${
                      errors.thana ? "border-red-500" : "border-slate-200"
                    } border-2 outline-[#2ACB35] px-2 py-4 rounded col-span-12`}
                  />
                </div>
              </div>

              {/* Delivery Charge */}
              <div className="bg-white px-5 py-10 rounded mt-5">
                <h3 className="text-2xl font-bold mb-2">Delivery Area</h3>
                <div className="grid grid-cols-12 gap-3">
                  {deliveryOptions?.map((item) => (
                    <label
                      key={item.id}
                      className={`${
                        errors.delivery_option_id
                          ? "border-red-500"
                          : "border-slate-200"
                      } border-2 col-span-12 flex items-center gap-2 px-2 py-4 rounded cursor-pointer`}
                    >
                      <input
                        type="radio"
                        value={item?.id}
                        {...register("delivery_option_id", {
                          required: true,
                        })}
                        onChange={handleDeliveryChange}
                        className="w-5 h-5 accent-[#2ACB35]"
                      />
                      <span>
                        {item?.name} - ৳{item?.charge}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 bg-white p-5 rounded flex flex-col gap-5">
              <h3 className="text-2xl font-bold">Shopping Cart</h3>
              <div className="flex gap-4 items-center">
                <Image
                  src={produts?.main_image}
                  alt="product"
                  width={120}
                  height={120}
                />
                <div>
                  <h4 className="font-semibold text-lg">{produts?.name}</h4>
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
                <span>Price</span>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 relative">
                    <span className="line-through">
                      ৳ {Number(produts?.regular_price).toLocaleString()}
                    </span>
                  </span>
                  <span className="text-red-500 font-semibold">
                    ৳ {Number(produts?.discount_price).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Stock</span>
                <span>{produts?.total_stock}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>৳{delivery}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>
                  {" "}
                  {Number(
                    totalPrice + tax + delivery - discountPrice
                  ).toLocaleString()}
                </span>
              </div>

              {/* Payment Method */}
              <h4 className="text-xl font-semibold mt-4 mb-2">
                Select Payment Method
              </h4>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {paymentMethods.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handlePaymentSelection(item.method)}
                    className={`border-2 cursor-pointer p-2 rounded ${
                      payment === item.method
                        ? "border-green-500"
                        : "border-slate-300"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt={item.method}
                      width={70}
                      height={40}
                    />
                  </div>
                ))}
              </div>

              {/* Payment description */}
              <div className="mt-4 p-4 bg-gray-100 rounded">
                {decription
                  .filter((item) => item.method === payment)
                  .map((item, index) => (
                    <div key={index}>
                      <p className="mb-2 text-gray-700">{item.descrip}</p>
                      {item.phone && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{item.phone}</span>
                          {copyTimeout ? (
                            <span className="text-gray-500 cursor-pointer border border-green-300 px-4 py-1 rounded">
                              Copied!
                            </span>
                          ) : (
                            <span
                              onClick={() => copyToClipboard(item.phone)}
                              className="text-gray-500 cursor-pointer border border-green-300 px-4 py-1 rounded"
                            >
                              Copy
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {/* Conditional Transaction ID */}
              {(payment === "bkash" || payment === "nagad") && (
                <input
                  type="text"
                  placeholder="Transaction ID"
                  {...register("transaction_id", { required: true })}
                  className={`w-full border-2 px-2 py-4 rounded outline-[#2ACB35] ${
                    errors.transaction_id
                      ? "border-red-500"
                      : "border-slate-200"
                  } mb-4`}
                />
              )}

              <button
                type="submit"
                className="bg-green-600 text-white py-3 rounded mt-4 hover:bg-green-700 transition"
              >
                {isPending ? "Processing" : " Confirm Order"}
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default CheckOut;
