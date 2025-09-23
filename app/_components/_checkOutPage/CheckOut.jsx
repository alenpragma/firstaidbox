"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useGetData } from "../../../lib/fetch/useGetData";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../lib/fetch/AxiosInstance";
import toast from "react-hot-toast";

// Images
import bkash from "../../../public/first-aid-img/bkash.png";
import nagad from "../../../public/first-aid-img/nagad.png";

// COD image
const codImg =
  "https://d28wu8o6itv89t.cloudfront.net/images/Cashondeliveryjpgjpg-1594648666434.jpeg";

// Payment method images mapping
const paymentImages = {
  Bkash: bkash,
  Nagad: nagad,
};

const CheckOut = () => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [copyTimeout, setCopyTimeout] = useState(false);

  const { data: payment_method, isLoading: paymentLoading } = useGetData(
    ["payment_method"],
    `/payment-methods`
  );
  const { data, isLoading, refetch } = useGetData(["products"], `/products`);
  const { data: deliveryOption, isLoading: deliveryLoading } = useGetData(
    ["delivery"],
    `/delivery-options`
  );

  const deliveryOptions = deliveryOption?.data;
  console.log(deliveryOptions?.[0]?.id);
  const product = data?.data?.data[0];
  const paymentId = payment_method?.[0]?.id;
  const [payment, setPayment] = useState();

  useEffect(() => {
    if (paymentId) {
      setPayment(paymentId);
    }
  }, [paymentId]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      delivery_option_id: "1",
    },
  });
  useEffect(() => {
    if (product?.discount_price) {
      setTotalPrice(count * Number(product.discount_price));
    }
  }, [count, product]);

  // Calculate discount & tax
  useEffect(() => {
    const price = Number(totalPrice) || 0;
    setDiscountPrice((price * 0) / 100); // set your discount %
    setTax((price * 0) / 100); // set your tax %
  }, [totalPrice]);

  // Copy phone/account no to clipboard
  const copyToClipboard = (accountNo) => {
    navigator.clipboard.writeText(accountNo);
    setCopyTimeout(true);
    setTimeout(() => setCopyTimeout(false), 1000);
  };

  const decressCount = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const incressCount = () => {
    if (count < product?.total_stock) {
      setCount((prev) => prev + 1);
    } else {
      toast.error(`Maximum available stock is ${product?.total_stock}`, {
        position: "bottom-center",
      });
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(`/orders`, data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message, { position: "top-center" });
      refetch();
    },
    onError: (err) => {
      toast.error(err?.message?.message || "Something went wrong", {
        position: "top-center",
      });
    },
  });

  const onSubmit = (formData) => {
    const orderData = {
      ...formData,
      price: totalPrice + tax - discountPrice,
      delivery_charge: 0,
      payment_method_id: payment,
      items: [
        {
          product_id: product?.id,
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
    mutate(orderData);
  };

  // if (isLoading && deliveryLoading && paymentLoading) {
  //   return <p>Loading....</p>;
  // }
  const loading = isLoading && deliveryLoading && paymentLoading;

  return (
    <>
      {loading === true ? (
        <p>Loading.....</p>
      ) : (
        <div id="orderNow" className="py-[50px] md:py-[90px] bg-[#E5E5E5]">
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-[#1D1D1D]">
                Checkout Page
              </h2>

              <div className="lg:flex gap-5">
                {/* Left Side */}
                <div className="flex-1 flex flex-col justify-between gap-5">
                  {/* Contact Information */}
                  <div className="bg-white px-5 py-10 rounded">
                    <h3 className="text-2xl font-bold mb-2">
                      Contact Information
                    </h3>
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
                    <div className="grid grid-cols-12 gap-3">
                      <input
                        type="text"
                        placeholder="Address"
                        {...register("address", { required: true })}
                        className={`${
                          errors.address ? "border-red-500" : "border-slate-200"
                        } border-2 col-span-12 outline-[#2ACB35] px-2 py-4 rounded`}
                      />
                      <input
                        type="text"
                        placeholder="Your District"
                        {...register("district", { required: true })}
                        className={`${
                          errors.district
                            ? "border-red-500"
                            : "border-slate-200"
                        } border-2 md:col-span-6 col-span-12 outline-[#2ACB35] px-2 py-4 rounded`}
                      />
                      <input
                        type="text"
                        placeholder="Thana"
                        {...register("thana", { required: true })}
                        className={`${
                          errors.thana ? "border-red-500" : "border-slate-200"
                        } border-2 outline-[#2ACB35] px-2 py-4 rounded md:col-span-6 col-span-12`}
                      />
                    </div>
                  </div>

                  {/* Delivery Charge */}
                  <div className="bg-white px-5 py-10 rounded">
                    <h3 className="text-2xl font-bold mb-2">Delivery Type</h3>
                    <div className="grid grid-cols-12 gap-3">
                      <label className="border-2 col-span-12 flex items-center gap-2 px-2 py-4 rounded cursor-pointer">
                        <input
                          type="radio"
                          value="1"
                          {...register("delivery_option_id", {
                            required: true,
                          })}
                          className="w-5 h-5 accent-[#2ACB35]"
                        />
                        <div className="flex items-center justify-between w-full">
                          <span> {deliveryOptions?.[0]?.name} </span>
                          <Image
                            src={codImg}
                            alt="cod"
                            width={50}
                            height={50}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 bg-white p-5 rounded flex flex-col gap-3">
                  <h3 className="text-2xl font-bold">Shopping Cart</h3>
                  <div className="flex gap-4 items-center">
                    <Image
                      className="size-20"
                      src={product?.main_image}
                      alt="product"
                      width={120}
                      height={120}
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{product?.name}</h4>
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
                      <span className="text-gray-500 line-through">
                        ৳ {Number(product?.regular_price).toLocaleString()}
                      </span>
                      <span className="text-red-500 font-semibold">
                        ৳ {Number(product?.discount_price).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Stock</span>
                    <span>{product?.total_stock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charge</span>
                    <span>৳{0.0}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>
                      {Number(
                        totalPrice + tax - discountPrice
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mt-4 p-3 bg-gray-50 rounded-lg">
                      অর্ডারটি কনফার্ম করতে ২০০ টাকা অগ্রিম পরিশোধ করুেন।
                    </h4>
                  </div>

                  {/* Payment Method */}
                  <h4 className="text-xl font-semibold mt-4 mb-2">
                    Select Payment Method
                  </h4>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {payment_method?.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setPayment(item.id)}
                        className={`border-2 cursor-pointer p-2 rounded flex items-center justify-center ${
                          payment === item.id
                            ? "border-green-500"
                            : "border-slate-300"
                        }`}
                      >
                        <Image
                          src={paymentImages[item.name]}
                          alt={item.name}
                          width={70}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Payment description */}
                  <div className="p-4 bg-gray-100 rounded">
                    {payment_method
                      ?.filter((item) => item.id === payment)
                      .map((item) => (
                        <div key={item.id}>
                          <p className="mb-2 text-gray-700">
                            {item.description}
                          </p>
                          {item.account_no && (
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">
                                {item.account_no}
                              </span>
                              {copyTimeout ? (
                                <span className="text-gray-500 border border-green-300 px-4 py-1 rounded">
                                  Copied!
                                </span>
                              ) : (
                                <span
                                  onClick={() =>
                                    copyToClipboard(item.account_no)
                                  }
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

                  {/* Transaction ID input */}
                  {/* {(payment === item?.id || payment === item?.id) && ( */}
                  <input
                    type="text"
                    placeholder="Transaction ID"
                    {...register("transaction_id", { required: true })}
                    className={`w-full border-2 px-2 py-4 rounded outline-[#2ACB35] ${
                      errors.transaction_id
                        ? "border-red-500"
                        : "border-slate-200"
                    } mt-3`}
                  />
                  {/* )} */}

                  <button
                    type="submit"
                    className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
                  >
                    {isPending ? "Processing..." : "Confirm Order"}
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </div>
      )}
    </>
  );
};

export default CheckOut;
