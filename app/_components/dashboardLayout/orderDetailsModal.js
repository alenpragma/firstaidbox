import React from "react";

const OrderDetailsModal = ({ data, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 px-2 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="bg-[#EDEDED] py-6 min-h-[60%] min-w-[50%] px-5 rounded-lg shadow-md">
        {/* Close Button */}
        <div
          onClick={onClose}
          className="text-end cursor-pointer p-3 bg-gray-300 w-10 h-10 ms-auto flex justify-center items-center rounded-full"
        >
          X
        </div>

        {/* Modal Content */}
        <div className="max-w-screen lg:w-[654px]">
          <p className="text-md mb-[30px] text-center lg:text-2xl">
            Order Details
          </p>

          <div className="flex justify-between gap-4">
            <div>
              <p className="mt-1">
                <span className="font-semibold">Name:</span> {data?.firstName}{" "}
                {data?.lastName}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Email:</span> {data?.email}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Phone:</span> {data?.phone}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Road/House:</span>{" "}
                {data?.roadHouse}
              </p>
              <p className="mt-1">
                <span className="font-semibold">District:</span>{" "}
                {data?.district}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Police Station:</span>{" "}
                {data?.policeStation}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Zip Code:</span> {data?.zipCode}
              </p>
            </div>
            <div>
              <p className="mt-1">
                <span className="font-semibold">Quantity:</span>{" "}
                {data?.quantity}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Price:</span> {data?.price}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Payment:</span> {data?.payment}
              </p>
            </div>
          </div>

          <p className="mt-4">
            <span className="font-semibold">Info:</span> {data?.info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
