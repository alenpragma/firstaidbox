"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import firstairimage from "../../../public/first-aid-img/firstaidbox.png";
import bkash from "../../../public/first-aid-img/bkash.png";
import rocket from "../../../public/first-aid-img/rocket.png";
import cashDelevery from "../../../public/first-aid-img/cash.png";
import Image from "next/image";
import { useForm } from "react-hook-form";

const CheckOut = () => {

  const [count, setCount] = useState(1);
  const [total, setTotal] = useState('');
  const [totalPrice, setTotalPrice] = useState(1500);
  const [delivery, setdelivery] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [singlePrice, setSinglePrice] = useState(1500);




  const [payment, setPayment] = useState('');

  const handlePaymentSelection = (selectedPayment) => {
    setPayment(selectedPayment);
  };


  const dicressCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incressCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setTotalPrice(count * singlePrice);
  }, [count]);

  useEffect(() => {
    setDiscountPrice(totalPrice / 100 * 0);
  }, [totalPrice]);

  useEffect(() => {
    setTax(totalPrice / 100 * 0);
  }, [totalPrice]);

  const [orderData, setOrderData] = useState({
    // firstName: "",
    // lastName: "",
    // phone: "",
    // email: "",
    // roadHouse: "",
    // district: "",
    // policeStation: "",
    // zipCode: "",
    // quantity: count,
    // price: total,
    // info: "",
    payment: ""
  });



  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderData = { ...data, "quantity": count, price: totalPrice, payment: payment };

    if (orderData.payment == '') {
      return alert("Select payment method");
    }

    const isAnyValueEmpty = Object.values(orderData).some(value => value === "");
    if (isAnyValueEmpty) {
      alert("All Field are required");
      return;
    }

    fetch("https://firstaidbox-admin-sigma.vercel.app/api/v1/orders", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData?.data);
        reset();
        alert("Successfuly order complete");
      })

      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {

    setOrderData(prevData => ({
      ...prevData,
      price: totalPrice + delivery + tax - discountPrice,
      quantity: count
    }));
  }, [count, totalPrice]);


  return (
    <div id="orderNow" className="py-[50px] md:py-[90px] bg-[#E5E5E5]">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="lg:text-[#1D1D1D] lg:text-7xl md:text-5xl text-3xl mb-8 font-bold">
              Checkout Page
            </h2>
          </div>
          <div className="lg:flex justify-between gap-5 lg:mt-0 mt-5">
            <div className="flex-1 flex flex-col gap-5 w-[100%] justify-between">
              {/* Contact Information */}
              <div className="bg-[#FFF] px-5 py-10 rounded">
                <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-2">
                  Contact Information
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, firstName: e?.target?.value }))}
                    placeholder="Frist Name"
                    {...register("firstName", { required: true })}
                    className={`${errors.firstName ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  {/* {errors.exampleRequired && <span>This field is required</span>} */}
                  <input
                    type="text"
                    placeholder="Last Name"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, lastName: e?.target?.value }))}

                    {...register("lastName", { required: true })}
                    className={`${errors.lastName ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, phone: e?.target?.value }))}
                    {...register("phone", { required: true })}
                    className={`${errors.phone ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                  <input
                    type="email"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, email: e?.target?.value }))}

                    placeholder="Email Address"
                    {...register("email", { required: true })}
                    className={`${errors.email ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  />
                </div>
              </div>
              {/* Billing Information */}
              <div className="bg-[#FFF] px-5 py-10 rounded">
                <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-2">
                  Address
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Road / House"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, roadHouse: e?.target?.value }))}

                    {...register("roadHouse", { required: true })}
                    className={`${errors.roadHouse ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`} />
                  <input
                    type="text"
                    placeholder="Police station"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, policeStation: e?.target?.value }))}

                    {...register("policeStation", { required: true })}
                    className={`${errors.policeStation ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`} />

                  <input
                    type="text"
                    placeholder="Your District"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, district: e?.target?.value }))}

                    {...register("district", { required: true })}
                    className={`${errors.district ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`} />

                  <input
                    type="number"
                    placeholder="Zip Code"
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, zipCode: e?.target?.value }))}

                    {...register("zipCode", { required: true })}
                    className={`${errors.zipCode ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`} />

                </div>
              </div>
              {/* Additional */}
              <div className="bg-[#FFF] px-5 py-10 rounded">
                <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-2">
                  Additional Information
                </h2>
                <div className="">
                  <textarea
                    rows="5"
                    cols={'54'}
                    // onChange={(e) => setOrderData(prevData => ({ ...prevData, info: e?.target?.value }))}

                    {...register("info", { required: true })}
                    className={`${errors.info ? 'border-red-500' : "border-slate-200"} border-2 outline-[#2ACB35] px-2 py-4 rounded`}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Contact Imformation */}
            <div className="flex-1 flex flex-col justify-between gap-5 w-[100%] bg-[#FFF] p-5 rounded">
              <div>
                <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-3">
                  Shopping Cart
                </h2>
                <div className="flex justify-center items-center bg-[#FFF] p-3 rounded text-center shadow">
                  <div className="">
                    <Image
                      className="w-[85px] h-[85px]"
                      src={firstairimage}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 text-[#323232] text-[14px] font-semibold">
                    <p>Good Morning First Aid Box</p>
                  </div>
                  <div className="flex-1 flex justify-around items-center bg-[#E5E5E5] rounded py-2">

                    <span onClick={() => dicressCount()} className="font-semibold text-[27px] px-3 cursor-pointer">-</span>
                    <input
                      className="font-semibold text-[27px] w-5 bg-inherit" Value={count}></input>
                    <span onClick={() => incressCount()} className="font-semibold text-[27px] px-2 cursor-pointer">+</span>
                  </div>
                  <div className="flex-1 font-semibold text-[27px]">{totalPrice} tk</div>
                </div>
              </div>
              <div>
                <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-3">
                  Order Summery
                </h2>
                <div className="bg-[#E5E5E5] px-5 py-8 rounded">
                  <ul>

                    <li className="flex justify-between p-2">
                      <span className="text-[#323232] text-[24px] font-bold">
                        Delivery
                      </span>
                      <span className="text-[#323232] text-[24px] font-bold">
                        {delivery}
                      </span>
                    </li>
                    <li className="flex justify-between p-2">
                      <span className="text-[#323232] text-[24px] font-bold">
                        Tax <span className="ps-3">0</span>
                      </span>
                      <span className="text-[#323232] text-[24px] font-bold">
                        {tax}
                      </span>
                    </li>
                    <li className="flex justify-between p-2">
                      <span className="text-[#323232] text-[24px] font-bold">
                        Discount <span className="ps-3"> {'0'}</span>
                      </span>
                      <span className="text-[#323232] text-[24px] font-bold">
                        {discountPrice}
                      </span>
                    </li>
                    <hr className="border-b-[1px] border-gray-900" />
                    <li className="flex justify-between p-2">
                      <span className="text-[#323232] text-[24px] font-bold">
                        Total
                      </span>
                      <span className="text-[#323232] text-[24px] font-bold">
                        {totalPrice + delivery + tax - discountPrice}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-[#1D1D1D] text-[24px] font-bold mb-3">
                  Select Payment Method
                </h2>
                <div className="bg-[#E5E5E5] px-5 py-8 rounded flex justify-around">

                  {/* <btutton className="w-[150px] bg-white rounded p-2 cursor-pointer">
                  <Image className="w-full" src={bkash} alt="" />
                </btutton>
                <btutton className="w-[150px] bg-white rounded p-2 cursor-pointer">
                  <Image className="w-full" src={rocket} alt="" />
                </btutton> */}

                  <div

                    onClick={() => handlePaymentSelection('Cash')}
                    // onClick={(e) => setOrderData(prevData => ({ ...prevData, payment: 'Cash' }))}
                    className={`${payment == "Cash" && "border-2 border-black"} w-[150px]  bg-white rounded p-2 cursor-pointer`}>

                    <Image className="w-full" src={cashDelevery} alt="" />
                  </div>

                </div>
              </div>
              <div>
                <button type="submit" className="w-full px-8 py-3 bg-[#2ACB35] hover:bg-[#43b04a] rounded-md text-[#FFF] font-semibold text-[24px] uppercase">
                  Order Now
                </button>
              </div>
            </div>
          </div>


        </form>
      </Container>
    </div>
  );
};

export default CheckOut;
